import { useState, useRef, useEffect, useCallback } from 'react';
import { X, MessageSquare, ArrowRight, Send, Loader as Loader2, Sparkles } from 'lucide-react';

const APP_URL = 'https://app.acaigestor.com.br';
const WHATSAPP_URL = 'https://wa.me/5511926036878?text=Ol%C3%A1%2C%20quero%20conhecer%20o%20VendaFlow';
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string;
const EDGE_FN = `${SUPABASE_URL}/functions/v1/generate-sales-assistant-response`;

const track = (e: string) => {
  try {
    const w = window as any;
    if (w?.plausible) w.plausible(e);
  } catch { /* noop */ }
};

type Role = 'user' | 'assistant';
type InterestLevel = 'low' | 'medium' | 'high';
type Intent = 'curiosity' | 'comparison' | 'interest' | 'purchase' | 'human_support';

interface Message { role: Role; content: string; }
interface LeadData { name: string; business_type: string; city: string; whatsapp: string; }

const QUICK_QUESTIONS = [
  'Quanto custa?',
  'Serve para minha loja?',
  'Tem teste grátis?',
  'O que é o ComercIA?',
  'Preciso instalar algum programa?',
];

const WELCOME = 'Olá! Sou a IA do VendaFlow. Posso te ajudar a escolher o melhor plano para organizar sua loja. Quer saber sobre preços, funcionalidades ou teste grátis?';
const ERROR_MSG = 'Posso te ajudar pelo WhatsApp ou você pode criar uma conta grátis para testar.';
const TYPING_DELAY = 600;

const BENEFITS = ['Tira dúvidas', 'Ajuda a escolher o plano', 'Responde em segundos'];

export function VendaFlowSalesAssistant() {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  const [interestLevel, setInterestLevel] = useState<InterestLevel>('low');
  const [accumulatedLead, setAccumulatedLead] = useState<LeadData>({ name: '', business_type: '', city: '', whatsapp: '' });
  const [highIntentTracked, setHighIntentTracked] = useState(false);
  const [leadStartTracked, setLeadStartTracked] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipTracked, setTooltipTracked] = useState(false);
  // pulse is active for 2s every 10s
  const [pulseActive, setPulseActive] = useState(true);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const tooltipTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Pulse every 10 seconds (on for 2s, off for 8s)
  useEffect(() => {
    const cycle = () => {
      setPulseActive(true);
      const off = setTimeout(() => setPulseActive(false), 2000);
      return off;
    };
    cycle();
    const interval = setInterval(() => cycle(), 10000);
    return () => { clearInterval(interval); };
  }, []);

  // Tooltip: show after 12s idle or scroll > 45%
  const triggerTooltip = useCallback(() => {
    if (open || showTooltip || tooltipTracked) return;
    setShowTooltip(true);
    if (!tooltipTracked) {
      track('sales_assistant_tooltip_view');
      setTooltipTracked(true);
    }
    // Auto-hide after 6s
    setTimeout(() => setShowTooltip(false), 6000);
  }, [open, showTooltip, tooltipTracked]);

  useEffect(() => {
    tooltipTimerRef.current = setTimeout(triggerTooltip, 12000);
    return () => { if (tooltipTimerRef.current) clearTimeout(tooltipTimerRef.current); };
  }, [triggerTooltip]);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrolled > 0.45) triggerTooltip();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [triggerTooltip]);

  useEffect(() => {
    if (open) setShowTooltip(false);
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  useEffect(() => {
    if (interestLevel === 'high' && !highIntentTracked) {
      track('sales_assistant_high_intent');
      setHighIntentTracked(true);
    }
  }, [interestLevel, highIntentTracked]);

  const sendMessage = useCallback(async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    track('sales_assistant_message_sent');

    const userMsg: Message = { role: 'user', content: trimmed };
    const nextHistory = [...history, userMsg];
    setHistory(nextHistory);
    setInput('');
    setLoading(true);

    if (!leadStartTracked && history.length === 0) {
      track('sales_assistant_lead_started');
      setLeadStartTracked(true);
    }

    await new Promise((r) => setTimeout(r, TYPING_DELAY));

    try {
      const res = await fetch(EDGE_FN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Apikey': SUPABASE_ANON_KEY,
        },
        body: JSON.stringify({ message: trimmed, history: history.slice(-10), accumulated_lead: accumulatedLead }),
      });

      if (!res.ok) { setHistory([...nextHistory, { role: 'assistant', content: ERROR_MSG }]); return; }

      const data = await res.json();
      const reply: string = data.reply || ERROR_MSG;
      const intent: Intent = data.intent || 'curiosity';
      const level: InterestLevel = data.interest_level || 'low';
      const lead: LeadData = data.lead || accumulatedLead;

      setAccumulatedLead((prev) => ({
        name: lead.name || prev.name,
        business_type: lead.business_type || prev.business_type,
        city: lead.city || prev.city,
        whatsapp: lead.whatsapp || prev.whatsapp,
      }));

      const levelOrder: Record<InterestLevel, number> = { low: 0, medium: 1, high: 2 };
      if (levelOrder[level] > levelOrder[interestLevel]) setInterestLevel(level);

      if ((lead.business_type || accumulatedLead.business_type) && (level === 'high' || intent === 'purchase')) {
        track('sales_assistant_lead_completed');
      }

      setHistory([...nextHistory, { role: 'assistant', content: reply }]);
    } catch {
      setHistory([...nextHistory, { role: 'assistant', content: ERROR_MSG }]);
    } finally {
      setLoading(false);
    }
  }, [history, loading, accumulatedLead, interestLevel, leadStartTracked]);

  function handleOpen() {
    setOpen(true);
    track('sales_assistant_opened');
  }

  function handleTooltipClick() {
    track('sales_assistant_tooltip_click');
    handleOpen();
  }

  function handleSignup() {
    track('sales_assistant_signup_click');
    window.open(`${APP_URL}/register`, '_blank', 'noopener');
  }

  function handleWhatsapp() {
    track('sales_assistant_whatsapp_click');
    window.open(WHATSAPP_URL, '_blank', 'noopener');
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(input); }
  }

  const showQuick = history.length === 0 && !loading;
  const showSmartCTA = interestLevel !== 'low' || history.some((m) => m.role === 'assistant');

  return (
    <>
      {/* Floating button + tooltip */}
      {!open && (
        <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-2">

          {/* Tooltip bubble */}
          {showTooltip && (
            <button
              onClick={handleTooltipClick}
              className="bg-white text-slate-700 text-xs font-medium px-3.5 py-2.5 rounded-2xl rounded-br-sm shadow-lg border border-slate-200 max-w-[200px] text-left leading-snug hover:bg-slate-50 transition-all animate-[fadeInUp_0.2s_ease]"
            >
              Posso te ajudar a escolher o melhor plano 👋
              <span className="block text-emerald-600 font-semibold mt-0.5 text-[11px]">Toque para conversar</span>
            </button>
          )}

          {/* Badge */}
          <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm border border-emerald-200 text-emerald-700 text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm self-end">
            <Sparkles className="w-3 h-3 text-emerald-500" />
            IA pronta para ajudar
          </div>

          {/* Main button */}
          <button
            onClick={handleOpen}
            aria-label="Perguntar à IA"
            className="relative flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-white font-bold text-sm px-4 py-3 rounded-full shadow-[0_8px_24px_rgba(16,185,129,0.4)] hover:shadow-[0_12px_32px_rgba(16,185,129,0.5)] transition-all duration-200"
          >
            <MessageSquare className="w-4 h-4 flex-shrink-0" />
            <span>Perguntar à IA</span>
            {pulseActive && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-300 rounded-full animate-ping" />
            )}
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full" />
          </button>
        </div>
      )}

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm flex flex-col rounded-2xl shadow-2xl overflow-hidden border border-slate-200 bg-white animate-[fadeInUp_0.25s_ease]">

          {/* Header */}
          <div className="bg-emerald-600 px-4 py-3 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-none">VendaFlow IA</p>
                <p className="text-emerald-200 text-xs mt-0.5 flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full inline-block ${loading ? 'bg-yellow-300 animate-pulse' : 'bg-emerald-300'}`} />
                  {loading ? 'Digitando...' : 'IA online agora'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Benefits strip */}
          <div className="bg-emerald-50 border-b border-emerald-100 px-3 py-2 flex items-center gap-3 flex-shrink-0">
            {BENEFITS.map((b) => (
              <span key={b} className="flex items-center gap-1 text-[11px] text-emerald-700 font-medium whitespace-nowrap">
                <span className="text-emerald-500">✓</span>{b}
              </span>
            ))}
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2.5 max-h-64 bg-slate-50">

            <div className="flex justify-start">
              <div className="max-w-[88%] px-3 py-2 rounded-2xl rounded-tl-sm text-sm leading-relaxed bg-white text-slate-700 shadow-sm border border-slate-100">
                {WELCOME}
              </div>
            </div>

            {showQuick && (
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {QUICK_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="text-xs bg-white border border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-400 px-3 py-1.5 rounded-full transition-all font-medium"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {history.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[88%] px-3 py-2 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'user'
                      ? 'bg-emerald-500 text-white rounded-tr-sm'
                      : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-sm'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 shadow-sm px-3 py-2.5 rounded-2xl rounded-tl-sm flex items-center gap-2">
                  <Loader2 className="w-3.5 h-3.5 text-emerald-500 animate-spin" />
                  <span className="text-xs text-slate-400">Digitando...</span>
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="bg-white border-t border-slate-100 px-3 py-2 flex items-center gap-2 flex-shrink-0">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Digite sua dúvida..."
              disabled={loading}
              className="flex-1 text-sm bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-200 transition-all placeholder:text-slate-400 disabled:opacity-50"
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={loading || !input.trim()}
              className="w-9 h-9 flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 text-white rounded-xl transition-all flex-shrink-0"
              aria-label="Enviar"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

          {/* Smart CTAs */}
          {showSmartCTA && (
            <div className="bg-white border-t border-slate-100 p-3 flex gap-2 flex-shrink-0">
              <button
                onClick={handleSignup}
                className={`flex-1 flex items-center justify-center gap-1.5 text-white font-bold text-xs py-2.5 rounded-xl transition-all shadow-sm active:scale-95 bg-emerald-500 hover:bg-emerald-400 ${
                  interestLevel === 'high' ? 'ring-2 ring-emerald-300' : ''
                }`}
              >
                Criar conta grátis
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleWhatsapp}
                className="flex-1 flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-700 active:scale-95 text-white font-bold text-xs py-2.5 rounded-xl transition-all shadow-sm"
              >
                Falar no WhatsApp
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
