import { useState, useRef, useEffect } from 'react';
import { X, MessageSquare, ArrowRight, Send, Loader as Loader2 } from 'lucide-react';

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
type Message = { role: Role; content: string };

const QUICK_QUESTIONS = [
  'Quanto custa?',
  'Serve para minha loja?',
  'Tem teste grátis?',
  'O que é o ComercIA?',
  'Quero falar no WhatsApp',
];

const WELCOME = 'Olá! Sou a IA do VendaFlow. Posso te ajudar a escolher o melhor plano para organizar sua loja. Quer saber sobre preços, funcionalidades ou teste grátis?';

const ERROR_MSG = 'Não consegui responder agora. Você pode falar diretamente pelo WhatsApp.';

export function VendaFlowSalesAssistant() {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      inputRef.current?.focus();
    }
  }, [history, open, loading]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    track('sales_assistant_message_sent');

    const userMsg: Message = { role: 'user', content: trimmed };
    const nextHistory = [...history, userMsg];
    setHistory(nextHistory);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch(EDGE_FN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Apikey': SUPABASE_ANON_KEY,
        },
        body: JSON.stringify({
          message: trimmed,
          history: history.slice(-6),
        }),
      });

      const data = await res.json();
      const reply = res.ok && data.reply ? data.reply : ERROR_MSG;
      setHistory([...nextHistory, { role: 'assistant', content: reply }]);
    } catch {
      setHistory([...nextHistory, { role: 'assistant', content: ERROR_MSG }]);
    } finally {
      setLoading(false);
    }
  }

  function handleOpen() {
    setOpen(true);
    track('sales_assistant_opened');
  }

  function handleSignup() {
    track('sales_assistant_signup_clicked');
    window.open(`${APP_URL}/register`, '_blank', 'noopener');
  }

  function handleWhatsapp() {
    track('sales_assistant_whatsapp_clicked');
    window.open(WHATSAPP_URL, '_blank', 'noopener');
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  const showQuick = history.length === 0 && !loading;

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={handleOpen}
          aria-label="Fale com a IA"
          className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-white font-bold text-sm px-4 py-3 rounded-full shadow-[0_8px_24px_rgba(16,185,129,0.4)] hover:shadow-[0_12px_32px_rgba(16,185,129,0.5)] transition-all duration-200"
        >
          <MessageSquare className="w-4 h-4 flex-shrink-0" />
          <span>Fale com a IA</span>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-300 rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full" />
        </button>
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
                <p className="text-emerald-200 text-xs mt-0.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full inline-block" />
                  Assistente comercial
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

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 max-h-72 bg-slate-50">
            {/* Welcome bubble */}
            <div className="flex justify-start">
              <div className="max-w-[88%] px-3 py-2 rounded-2xl rounded-tl-sm text-sm leading-relaxed bg-white text-slate-700 shadow-sm border border-slate-100">
                {WELCOME}
              </div>
            </div>

            {/* Quick questions */}
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

            {/* Conversation history */}
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

            {/* Typing indicator */}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 shadow-sm px-3 py-2.5 rounded-2xl rounded-tl-sm flex items-center gap-1.5">
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

          {/* CTA buttons */}
          <div className="bg-white border-t border-slate-100 p-3 flex gap-2 flex-shrink-0">
            <button
              onClick={handleSignup}
              className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-white font-bold text-xs py-2.5 rounded-xl transition-all shadow-sm"
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
        </div>
      )}
    </>
  );
}
