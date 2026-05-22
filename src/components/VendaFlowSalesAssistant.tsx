import { useState, useRef, useEffect } from 'react';
import { X, MessageSquare, Send, ArrowRight } from 'lucide-react';

const APP_URL = 'https://app.acaigestor.com.br';
const WHATSAPP_URL = 'INSERIR_LINK_DO_WHATSAPP_AQUI';

const track = (e: string) => {
  try {
    const w = window as any;
    if (w?.plausible) w.plausible(e);
  } catch { /* noop */ }
};

type Message = { from: 'bot' | 'user'; text: string };

const QUICK_QUESTIONS = [
  { id: 'price', label: 'Quanto custa?' },
  { id: 'fit', label: 'Serve para minha loja?' },
  { id: 'trial', label: 'Tem teste grátis?' },
  { id: 'comercia', label: 'O que o ComercIA faz?' },
  { id: 'signup', label: 'Quero criar conta' },
];

const ANSWERS: Record<string, string> = {
  price:
    'O plano VendaFlow Pro custa R$79,90/mês. O combo VendaFlow Pro + ComercIA custa R$119,90/mês. O Premium + ComercIA custa R$169,90/mês.',
  fit:
    'Sim. O VendaFlow atende açaiterias, lanchonetes, pizzarias, hamburguerias e pequenos comércios que precisam organizar pedidos, estoque, caixa e vendas.',
  trial:
    'Sim. Você pode criar uma conta grátis para testar o sistema antes de contratar.',
  comercia:
    'O ComercIA é o atendente inteligente com IA. Ele ajuda a responder clientes, tirar dúvidas sobre produtos, horários, entrega e formas de pagamento.',
  signup:
    'Perfeito! Clique no botão abaixo para criar sua conta grátis agora.',
};

const WELCOME: Message = {
  from: 'bot',
  text: 'Olá! Sou a IA do VendaFlow. Posso te ajudar a escolher o melhor plano para organizar sua loja. Sobre o que você quer saber?',
};

export function VendaFlowSalesAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [showQuick, setShowQuick] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  function handleOpen() {
    setOpen(true);
    track('sales_assistant_opened');
  }

  function handleQuestion(id: string, label: string) {
    track('sales_assistant_question_clicked');
    setShowQuick(false);
    setMessages((prev) => [
      ...prev,
      { from: 'user', text: label },
      { from: 'bot', text: ANSWERS[id] },
    ]);
  }

  function handleSignup() {
    track('sales_assistant_signup_clicked');
    window.open(`${APP_URL}/register`, '_blank', 'noopener');
  }

  function handleWhatsapp() {
    track('sales_assistant_whatsapp_clicked');
    window.open(WHATSAPP_URL, '_blank', 'noopener');
  }

  const lastMsg = messages[messages.length - 1];
  const showCTAs = lastMsg?.from === 'bot';

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
        <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm flex flex-col rounded-2xl shadow-2xl overflow-hidden border border-slate-200 animate-[fadeInUp_0.25s_ease]">
          {/* Header */}
          <div className="bg-emerald-600 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Send className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-none">VendaFlow IA</p>
                <p className="text-emerald-200 text-xs mt-0.5">Assistente comercial</p>
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
          <div className="bg-slate-50 flex-1 overflow-y-auto p-3 space-y-3 max-h-72">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                    msg.from === 'bot'
                      ? 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-sm'
                      : 'bg-emerald-500 text-white rounded-tr-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Quick questions */}
            {showQuick && (
              <div className="flex flex-wrap gap-2 pt-1">
                {QUICK_QUESTIONS.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => handleQuestion(q.id, q.label)}
                    className="text-xs bg-white border border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-400 px-3 py-1.5 rounded-full transition-all font-medium"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            )}

            {/* Show quick questions again if not showing */}
            {!showQuick && (
              <button
                onClick={() => setShowQuick(true)}
                className="text-xs text-slate-400 hover:text-emerald-600 transition-colors underline"
              >
                Ver outras perguntas
              </button>
            )}

            <div ref={bottomRef} />
          </div>

          {/* CTA buttons */}
          {showCTAs && (
            <div className="bg-white border-t border-slate-100 p-3 flex gap-2">
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
                WhatsApp
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
