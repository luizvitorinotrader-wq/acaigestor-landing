import {
  Store, ChartBar as BarChart3, Package, DollarSign, Smartphone,
  Check, TrendingDown, Clock, CircleAlert as AlertCircle, Zap,
  Shield, Award, ChevronDown, ArrowRight, BadgeCheck, Star,
  CircleCheck as CheckCircle, TrendingUp, MapPin, X, Lock,
  PhoneCall, Receipt, Users,
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const APP_URL = 'https://app.acaigestor.com.br';

const track = (e: string) => {
  try {
    const w = window as any; // eslint-disable-line @typescript-eslint/no-explicit-any
    if (w?.plausible) w.plausible(e);
  } catch { /* noop */ }
};

// ─── SHARED CTA BUTTON ───────────────────────────────────────────────────────

function PrimaryCTA({
  label = '👉 Criar conta grátis',
  event = 'cta_click',
  size = 'lg',
  className = '',
}: {
  label?: string;
  event?: string;
  size?: 'lg' | 'xl';
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <a
        href={`${APP_URL}/register`}
        onClick={() => { track(event); track('start_trial_click'); }}
        className={`group relative overflow-hidden bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] text-white font-extrabold rounded-2xl transition-all no-underline flex items-center gap-3 shadow-[0_8px_32px_rgba(16,185,129,0.35)] hover:shadow-[0_12px_40px_rgba(16,185,129,0.45)] ${size === 'xl' ? 'text-xl px-12 py-5' : 'text-lg px-9 py-4'}`}
      >
        <span className="relative z-10 flex items-center gap-3">
          {label}
          <ArrowRight className={`transition-transform group-hover:translate-x-1 ${size === 'xl' ? 'w-6 h-6' : 'w-5 h-5'}`} />
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      </a>
      <p className="text-xs flex items-center gap-1.5 text-slate-400">
        <Lock className="w-3 h-3" />
        7 dias grátis · Sem cartão · Cancele quando quiser
      </p>
    </div>
  );
}

// ─── DATA ────────────────────────────────────────────────────────────────────

const painPoints = [
  { icon: <TrendingDown className="w-6 h-6" />, title: 'Fecha o dia sem saber se lucrou', desc: 'O dinheiro entra, mas o que sobrou é um mistério todo dia.' },
  { icon: <Package className="w-6 h-6" />, title: 'Estoque fura sem avisar', desc: 'Você perde venda porque o produto acabou e você não sabia.' },
  { icon: <Clock className="w-6 h-6" />, title: 'Fila longa afasta cliente', desc: 'Demora no balcão faz quem estava pronto para comprar desistir.' },
  { icon: <AlertCircle className="w-6 h-6" />, title: 'Erro no caixa vira prejuízo', desc: 'Quando o caixa não fecha, você perde tempo e dinheiro.' },
];

const benefits = [
  { icon: <Zap className="w-7 h-7" />, title: 'Venda 3x mais rápido', desc: 'PDV ultrarrápido que registra vendas em segundos — sem travar, sem confusão no balcão.', accent: 'emerald' },
  { icon: <Package className="w-7 h-7" />, title: 'Estoque no automático', desc: 'Cada venda atualiza o estoque. Saiba o que está acabando antes de acabar e nunca perca uma venda.', accent: 'sky' },
  { icon: <BarChart3 className="w-7 h-7" />, title: 'Lucro real todo dia', desc: 'Veja exatamente quanto entrou, saiu e sobrou. Sem planilha, sem chute.', accent: 'teal' },
  { icon: <Smartphone className="w-7 h-7" />, title: 'Funciona em qualquer tela', desc: 'Celular, tablet ou computador. Seu negócio na palma da mão, de onde você estiver.', accent: 'green' },
];

const solution = [
  { icon: <Receipt className="w-5 h-5" />, title: 'PDV completo', desc: 'Registre vendas em toques, aplique descontos e feche o caixa sem erro.' },
  { icon: <Package className="w-5 h-5" />, title: 'Estoque inteligente', desc: 'Alertas automáticos, histórico de movimentação e controle por categoria.' },
  { icon: <BarChart3 className="w-5 h-5" />, title: 'Relatórios claros', desc: 'Veja vendas por dia, semana e produto — sem precisar calcular nada.' },
  { icon: <DollarSign className="w-5 h-5" />, title: 'Controle de caixa', desc: 'Abertura, fechamento, entradas e saídas — tudo auditado e no histórico.' },
  { icon: <Smartphone className="w-5 h-5" />, title: 'Pedidos online', desc: 'Cardápio digital e pedidos pelo celular, incluídos no plano Pro.' },
  { icon: <Users className="w-5 h-5" />, title: 'Múltiplos usuários', desc: 'Adicione sua equipe com perfis de acesso diferentes por função.' },
];

const testimonials = [
  {
    name: 'Mariana Costa', city: 'São Paulo, SP', role: 'Dona de açaiteria',
    text: 'Em 3 dias já recuperei o valor do plano. O atendimento ficou 3x mais rápido e parei de perder venda por falta de controle.',
    result: 'Recuperou o plano em 3 dias',
    photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=160&h=160&dpr=2',
  },
  {
    name: 'João Alves', city: 'Campinas, SP', role: 'Dono de lanchonete',
    text: 'Descobri que um produto me dava prejuízo há 4 meses. Sem o sistema eu nunca saberia. Agora acompanho tudo em tempo real.',
    result: 'Descobriu prejuízo oculto de 4 meses',
    photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=160&h=160&dpr=2',
  },
  {
    name: 'Carlos Mendes', city: 'Belo Horizonte, MG', role: 'Cafeteria local',
    text: 'Tentei outros sistemas e era tudo complicado demais. Meu funcionário aprendeu o VendaFlow em 10 minutos. O sistema se paga rápido.',
    result: 'Funcionário aprendeu em 10 minutos',
    photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=160&h=160&dpr=2',
  },
];

const plans = [
  {
    name: 'Starter', price: 'R$ 39,90', subtitle: 'Para começar com organização',
    cta: 'Testar grátis por 7 dias', popular: false,
    events: ['plan_starter_click', 'start_trial_click'],
    features: ['Cadastro de produtos', 'PDV básico', 'Relatório diário', 'Acesso mobile e desktop', 'Suporte por email'],
  },
  {
    name: 'Pro', price: 'R$ 79,90', subtitle: 'Para vender mais e crescer',
    cta: '👉 Quero testar grátis — 7 dias', popular: true,
    events: ['plan_pro_click', 'start_trial_click'],
    features: ['Tudo do Starter', 'PDV ultrarrápido', 'Controle de caixa profissional', 'Estoque com alertas', 'Relatórios de lucro', 'Múltiplos usuários (até 3)', 'Cardápio e pedidos online', 'Suporte prioritário'],
  },
  {
    name: 'Premium', price: 'R$ 149,90', subtitle: 'Para operações maiores',
    cta: 'Falar com especialista', popular: false,
    events: ['plan_premium_click'],
    features: ['Tudo do Pro', 'Usuários ilimitados', 'Comandas e mesas', 'Fichas técnicas', 'Gestão de clientes', 'API para integrações', 'Atendimento VIP'],
  },
];

const faqs = [
  { q: 'Preciso instalar alguma coisa?', a: 'Não. Funciona direto no navegador — celular ou computador. Cria a conta e usa na hora.' },
  { q: 'Meu funcionário consegue usar?', a: 'Sim. Foi feita para o balcão, sob pressão. Se usa WhatsApp, usa o VendaFlow.' },
  { q: 'E se eu não gostar?', a: '7 dias para testar sem comprometer nada. Não gostou, não paga — zero burocracia.' },
  { q: 'Serve para açaiteria?', a: 'Foi criado exatamente para açaiterias, lanchonetes e comércios locais. Não é genérico.' },
  { q: 'Posso cancelar quando quiser?', a: 'Sim. Sem contrato, sem multa. Cancele pelo painel em menos de 1 minuto.' },
];

const signupToasts = [
  { name: 'Fernanda S.', city: 'São Paulo' },
  { name: 'Ricardo M.', city: 'Fortaleza' },
  { name: 'Patrícia L.', city: 'Manaus' },
  { name: 'Bruno A.', city: 'Salvador' },
  { name: 'Juliana K.', city: 'Curitiba' },
  { name: 'Rafael N.', city: 'Recife' },
];

// ─── ANIMATED COUNTER ────────────────────────────────────────────────────────

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      let start = 0;
      const step = Math.ceil(to / 40);
      const id = setInterval(() => {
        start = Math.min(start + step, to);
        setValue(start);
        if (start >= to) clearInterval(id);
      }, 30);
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{value}{suffix}</span>;
}

// ─── SYSTEM MOCKUP SCREENS ───────────────────────────────────────────────────

function MockupDashboard() {
  return (
    <div className="bg-slate-800/70 border border-slate-700/60 rounded-xl overflow-hidden text-white shadow-2xl">
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-900/70 border-b border-slate-700/50">
        <div className="w-2 h-2 rounded-full bg-red-500/80" /><div className="w-2 h-2 rounded-full bg-yellow-500/80" /><div className="w-2 h-2 rounded-full bg-emerald-500/80" />
        <span className="ml-2 text-xs text-slate-400 font-medium">Dashboard · Hoje</span>
        <span className="ml-auto flex items-center gap-1 text-xs text-emerald-400 font-semibold"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />Ao vivo</span>
      </div>
      <div className="p-4 space-y-3">
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg p-3">
            <p className="text-xs text-emerald-100">Vendas hoje</p>
            <p className="text-xl font-extrabold">R$ 2.847</p>
            <p className="text-xs text-emerald-200 flex items-center gap-0.5 mt-0.5"><TrendingUp className="w-3 h-3" />+18%</p>
          </div>
          <div className="bg-slate-700/50 rounded-lg p-3">
            <p className="text-xs text-slate-400">Pedidos</p>
            <p className="text-xl font-bold">87</p>
          </div>
          <div className="bg-slate-700/50 rounded-lg p-3">
            <p className="text-xs text-slate-400">Ticket</p>
            <p className="text-xl font-bold">R$ 32</p>
          </div>
        </div>
        <div className="bg-slate-900/60 rounded-lg p-3">
          <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-2">Mais vendidos</p>
          {[{ n: 'Açaí 500ml', v: 45, p: 92 }, { n: 'Açaí 300ml', v: 32, p: 65 }, { n: 'Suco Natural', v: 21, p: 43 }].map(i => (
            <div key={i.n} className="mb-1.5">
              <div className="flex justify-between text-xs mb-0.5"><span className="text-slate-200">{i.n}</span><span className="text-slate-400">{i.v}</span></div>
              <div className="h-1 bg-slate-700 rounded-full"><div className="h-1 bg-emerald-500 rounded-full" style={{ width: `${i.p}%` }} /></div>
            </div>
          ))}
        </div>
        <div className="bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold px-3 py-2 rounded-lg flex items-center gap-2">
          <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" />Caixa aberto · Saldo R$ 2.727,50
        </div>
      </div>
    </div>
  );
}

function MockupPDV() {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xl">
      <div className="bg-slate-900 text-white px-4 py-2.5 flex items-center justify-between">
        <span className="text-sm font-bold flex items-center gap-2"><Zap className="w-3.5 h-3.5 text-emerald-400" />PDV Rápido</span>
        <span className="text-xs text-emerald-400 font-semibold">● Aberto</span>
      </div>
      <div className="p-4 space-y-2">
        {[{ n: 'Açaí 500ml', p: 'R$ 18,00', q: 2 }, { n: 'Granola Extra', p: 'R$ 3,50', q: 2 }, { n: 'Suco Laranja', p: 'R$ 9,00', q: 1 }].map(i => (
          <div key={i.n} className="flex items-center justify-between bg-slate-50 rounded-lg px-3 py-2.5">
            <div><p className="text-slate-900 text-sm font-semibold">{i.n}</p><p className="text-slate-400 text-xs">Qtd: {i.q}</p></div>
            <p className="text-emerald-600 font-bold text-sm">{i.p}</p>
          </div>
        ))}
        <div className="flex justify-between items-center bg-slate-900 rounded-xl px-4 py-3 mt-1">
          <span className="text-white font-bold text-sm">Total</span>
          <span className="text-white font-extrabold text-lg">R$ 52,50</span>
        </div>
        <button className="w-full bg-emerald-500 text-white font-bold rounded-xl py-3 text-sm hover:bg-emerald-400 transition">
          ✓ Finalizar venda
        </button>
      </div>
    </div>
  );
}

function MockupStock() {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xl">
      <div className="bg-slate-900 text-white px-4 py-2.5 flex items-center justify-between">
        <span className="text-sm font-bold flex items-center gap-2"><Package className="w-3.5 h-3.5 text-emerald-400" />Estoque</span>
        <span className="text-xs bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-full font-semibold">2 alertas</span>
      </div>
      <div className="p-4 space-y-2">
        {[
          { n: 'Açaí 500ml', stock: 48, min: 20, ok: true },
          { n: 'Polpa Morango', stock: 6, min: 10, ok: false },
          { n: 'Granola', stock: 12, min: 8, ok: true },
          { n: 'Leite Ninho', stock: 3, min: 5, ok: false },
        ].map(i => (
          <div key={i.n} className={`flex items-center justify-between rounded-lg px-3 py-2.5 ${i.ok ? 'bg-slate-50' : 'bg-red-50 border border-red-100'}`}>
            <div className="flex items-center gap-2">
              {!i.ok && <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />}
              <p className={`text-sm font-semibold ${i.ok ? 'text-slate-900' : 'text-red-700'}`}>{i.n}</p>
            </div>
            <div className="text-right">
              <p className={`text-sm font-bold ${i.ok ? 'text-emerald-600' : 'text-red-600'}`}>{i.stock} un</p>
              <p className="text-xs text-slate-400">mín: {i.min}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function Landing() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [bannerOpen, setBannerOpen] = useState(true);
  const [toast, setToast] = useState<{ name: string; city: string } | null>(null);

  useEffect(() => {
    let idx = 0;
    const show = () => {
      setToast(signupToasts[idx % signupToasts.length]);
      idx++;
      setTimeout(() => setToast(null), 4500);
    };
    const t1 = setTimeout(show, 4000);
    const id = setInterval(show, 10000);
    return () => { clearTimeout(t1); clearInterval(id); };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">

      {/* ── TOP URGENCY BANNER ── */}
      {bannerOpen && (
        <div className="relative bg-gradient-to-r from-emerald-600 to-green-600 text-white text-sm font-semibold py-2.5 px-4 text-center">
          <span className="hidden sm:inline">Oferta por tempo limitado — </span>
          7 dias grátis + suporte na configuração para novas lojas.{' '}
          <a href={`${APP_URL}/register`} onClick={() => track('banner_cta')} className="font-extrabold underline underline-offset-2 hover:text-emerald-100 transition">
            Ativar agora →
          </a>
          <button onClick={() => setBannerOpen(false)} className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-white/70 hover:text-white transition" aria-label="Fechar">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 bg-white/97 backdrop-blur-lg border-b border-slate-100/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2.5">
              <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-1.5 rounded-lg shadow-sm shadow-emerald-200">
                <Store className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold tracking-tight">VendaFlow</span>
            </div>
            <div className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-500">
              <button onClick={() => document.getElementById('sistema')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-slate-900 transition">Sistema</button>
              <button onClick={() => document.getElementById('depoimentos')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-slate-900 transition">Depoimentos</button>
              <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-slate-900 transition">Planos</button>
            </div>
            <div className="flex items-center gap-3">
              <a href={`${APP_URL}/login`} className="hidden sm:block text-slate-500 hover:text-slate-900 font-medium text-sm transition no-underline">Entrar</a>
              <a href={`${APP_URL}/register`} onClick={() => track('nav_cta')} className="bg-emerald-500 hover:bg-emerald-400 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition shadow-md shadow-emerald-200/60 no-underline">
                Testar grátis
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════ */}
      <section className="relative bg-[#0a0f1e] text-white overflow-hidden">
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-0 right-0 w-[900px] h-[900px] rounded-full bg-emerald-500/8 blur-[180px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-emerald-700/6 blur-[140px] translate-y-1/2 -translate-x-1/4" />
          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.08),transparent)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-0">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* ─ Copy ─ */}
            <div className="pb-16 lg:pb-24">
              {/* Trust pill */}
              <div className="inline-flex items-center gap-2.5 bg-emerald-500/15 border border-emerald-500/25 text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                <BadgeCheck className="w-4 h-4 flex-shrink-0" />
                +500 açaiterias já organizam com o VendaFlow
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-[3.6rem] font-extrabold leading-[1.05] tracking-tight mb-5">
                Pare de perder vendas<br />
                <span className="text-emerald-400">na sua açaíteria</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-xl">
                Controle estoque, vendas e pedidos em um só lugar —{' '}
                <strong className="text-white">simples e rápido</strong>. Sem planilha, sem papel, sem bagunça.
              </p>

              {/* Bullets */}
              <ul className="space-y-3.5 mb-10">
                {[
                  'Caixa que fecha certo todo dia',
                  'Estoque que avisa antes de furar',
                  'Relatório de lucro real em segundos',
                  'Pronto para usar em menos de 5 minutos',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-slate-200 text-base">
                    <span className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 shadow-sm shadow-emerald-500/40">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <PrimaryCTA event="cta_hero" className="items-start" />

              <button
                onClick={() => { track('hero_demo'); document.getElementById('sistema')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="mt-5 text-slate-500 hover:text-slate-300 text-sm transition underline underline-offset-2"
              >
                Ver o sistema antes de criar conta
              </button>
            </div>

            {/* ─ Mockup ─ */}
            <div className="relative flex items-end justify-center pb-0 pt-4 lg:pt-0">
              <div className="w-full max-w-md relative">
                <div className="absolute -inset-8 bg-emerald-500/6 blur-3xl rounded-3xl" />
                <div className="relative">
                  <MockupDashboard />
                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl border border-slate-100 px-4 py-3 flex items-center gap-3">
                    <div className="w-9 h-9 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-900 text-xs font-extrabold">+18% hoje</p>
                      <p className="text-slate-400 text-xs">vs. ontem</p>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl border border-slate-100 px-4 py-3 flex items-center gap-3">
                    <div className="w-9 h-9 bg-sky-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-900 text-xs font-extrabold">Caixa fechado</p>
                      <p className="text-slate-400 text-xs">em 1 min 42s</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF STRIP ── */}
      <section className="bg-slate-50 border-y border-slate-200 py-5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-slate-600">
            {[
              { icon: <Award className="w-5 h-5 text-emerald-500" />, label: '+500 lojas ativas' },
              { icon: <Star className="w-5 h-5 text-amber-400 fill-amber-400" />, label: 'Avaliação 4,9/5' },
              { icon: <Shield className="w-5 h-5 text-emerald-500" />, label: '7 dias grátis, sem cartão' },
              { icon: <Zap className="w-5 h-5 text-emerald-500" />, label: 'Pronto em 5 minutos' },
              { icon: <PhoneCall className="w-5 h-5 text-emerald-500" />, label: 'Suporte em português' },
            ].map((item, i, arr) => (
              <div key={i} className="flex items-center gap-2">
                {item.icon}
                {item.label}
                {i < arr.length - 1 && <span className="hidden sm:inline-block w-px h-4 bg-slate-300 ml-8" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          2. DOR DO CLIENTE
      ══════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-red-50 text-red-600 text-sm font-bold px-4 py-1.5 rounded-full mb-5 border border-red-100">
              Você reconhece algum desses problemas?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-5">
              Todo mês você perde dinheiro<br />
              <span className="text-red-500">sem perceber</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Açaiterias sem sistema perdem em média{' '}
              <strong className="text-slate-900">R$ 800 a R$ 2.000 por mês</strong>{' '}
              em erros que poderiam ser evitados.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {painPoints.map((p, i) => (
              <div key={i} className="group relative bg-white border border-slate-200 hover:border-red-200 hover:shadow-lg rounded-2xl p-7 transition-all duration-200 overflow-hidden">
                <div className="absolute inset-0 bg-red-50/0 group-hover:bg-red-50/60 transition-colors duration-200" />
                <div className="relative">
                  <div className="w-12 h-12 bg-red-100 text-red-500 rounded-xl flex items-center justify-center mb-5 group-hover:bg-red-200 transition-colors">
                    {p.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 leading-snug text-base">{p.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <div className="inline-flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold px-7 py-4 rounded-2xl text-sm">
              <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              O VendaFlow resolve tudo isso — e você tem 7 dias grátis para provar
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          3. SISTEMA (prints / mockups)
      ══════════════════════════════════════════════ */}
      <section id="sistema" className="py-20 sm:py-28 bg-[#0a0f1e] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(16,185,129,0.07),transparent_60%)]" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-emerald-500/15 border border-emerald-500/25 text-emerald-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              O sistema na prática
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">
              Veja como é simples
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Três telas que mudam a operação da sua loja do dia para a noite.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Dashboard */}
            <div className="group">
              <div className="mb-4 flex items-center gap-3">
                <div className="w-9 h-9 bg-emerald-500/20 border border-emerald-500/30 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">Dashboard</p>
                  <p className="text-slate-400 text-xs">Resultados em tempo real</p>
                </div>
              </div>
              <div className="group-hover:-translate-y-1 transition-transform duration-300">
                <MockupDashboard />
              </div>
            </div>

            {/* PDV */}
            <div className="group lg:mt-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="w-9 h-9 bg-sky-500/20 border border-sky-500/30 rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">PDV Rápido</p>
                  <p className="text-slate-400 text-xs">Venda em segundos</p>
                </div>
              </div>
              <div className="group-hover:-translate-y-1 transition-transform duration-300">
                <MockupPDV />
              </div>
            </div>

            {/* Estoque */}
            <div className="group">
              <div className="mb-4 flex items-center gap-3">
                <div className="w-9 h-9 bg-teal-500/20 border border-teal-500/30 rounded-xl flex items-center justify-center">
                  <Package className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">Controle de Estoque</p>
                  <p className="text-slate-400 text-xs">Alertas automáticos</p>
                </div>
              </div>
              <div className="group-hover:-translate-y-1 transition-transform duration-300">
                <MockupStock />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-0 bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            {[
              { n: 3, suffix: 'x', label: 'mais rápido no atendimento' },
              { n: 5, suffix: 'min', label: 'para configurar e usar' },
              { n: 100, suffix: '%', label: 'no navegador, sem instalar' },
            ].map((s, i) => (
              <div key={i} className={`text-center py-8 ${i < 2 ? 'border-r border-white/10' : ''}`}>
                <p className="text-4xl font-extrabold text-emerald-400 mb-1"><Counter to={s.n} suffix={s.suffix} /></p>
                <p className="text-slate-400 text-sm">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <PrimaryCTA event="cta_sistema" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          4. BENEFÍCIOS
      ══════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-bold px-4 py-1.5 rounded-full mb-5 border border-emerald-100">
              Por que usar?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-5">
              O que muda na sua loja
              <span className="text-emerald-600"> a partir do dia 1</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Cada funcionalidade foi pensada para o ritmo real de uma açaíteria ou lanchonete.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => {
              const colors: Record<string, string> = {
                emerald: 'bg-emerald-500 shadow-emerald-200',
                sky: 'bg-sky-500 shadow-sky-200',
                teal: 'bg-teal-500 shadow-teal-200',
                green: 'bg-green-600 shadow-green-200',
              };
              return (
                <div key={i} className="group relative bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl rounded-2xl p-7 transition-all duration-200">
                  <div className={`w-12 h-12 ${colors[b.accent]} text-white rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                    {b.icon}
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">{b.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          5. SOLUÇÃO CLARA (feature grid)
      ══════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-bold px-4 py-1.5 rounded-full mb-6 border border-emerald-100">
                A solução completa
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-5">
                Tudo que sua loja precisa
                <br />
                <span className="text-emerald-600">em um único lugar</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                Não é um sistema genérico. Foi criado especificamente para açaiterias, lanchonetes e pequenos comércios que precisam de agilidade no balcão e clareza nos números.
              </p>
              <PrimaryCTA event="cta_solucao" className="items-start" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {solution.map((s, i) => (
                <div key={i} className="group bg-white border border-slate-200 hover:border-emerald-200 hover:shadow-md rounded-2xl p-5 transition-all">
                  <div className="w-9 h-9 bg-emerald-500 text-white rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-sm shadow-emerald-200">
                    {s.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1 text-sm">{s.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          6. PROVA SOCIAL
      ══════════════════════════════════════════════ */}
      <section id="depoimentos" className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />)}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
              O que donos de loja falam
            </h2>
            <p className="text-slate-500 text-lg">Resultados reais de quem testou e ficou.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="flex flex-col bg-white border border-slate-100 hover:border-emerald-200 hover:shadow-xl rounded-2xl p-7 transition-all duration-200">
                <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-extrabold px-3 py-1.5 rounded-full mb-5 w-fit">
                  <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  {t.result}
                </div>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-slate-700 leading-relaxed text-base flex-1 mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                  <img src={t.photo} alt={t.name} className="w-11 h-11 rounded-full object-cover ring-2 ring-emerald-100 flex-shrink-0" />
                  <div>
                    <p className="font-extrabold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs flex items-center gap-1"><MapPin className="w-3 h-3" />{t.city} · {t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social proof numbers */}
          <div className="mt-12 grid grid-cols-3 gap-0 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl overflow-hidden">
            {[
              { n: 500, suffix: '+', label: 'lojas ativas' },
              { n: 49, suffix: '/5', label: 'avaliação média' },
              { n: 5, suffix: 'min', label: 'para configurar' },
            ].map((s, i) => (
              <div key={i} className={`text-center py-8 ${i < 2 ? 'border-r border-white/20' : ''}`}>
                <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1"><Counter to={s.n} suffix={s.suffix} /></p>
                <p className="text-emerald-100 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          7. OFERTA / TRIAL
      ══════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 relative overflow-hidden bg-[#0a0f1e] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.12),transparent_65%)]" aria-hidden />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" aria-hidden />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Copy */}
            <div>
              <span className="inline-block bg-emerald-500/15 border border-emerald-500/25 text-emerald-300 text-sm font-bold px-4 py-1.5 rounded-full mb-7">
                Sem risco nenhum
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
                Teste grátis<br />
                <span className="text-emerald-400">por 7 dias</span>
              </h2>
              <p className="text-slate-300 text-xl leading-relaxed mb-9">
                Sem compromisso. Sem cartão. Comece agora e veja na prática o que o VendaFlow faz pela sua loja.
              </p>
              <PrimaryCTA event="cta_oferta" size="xl" label="👉 Criar conta grátis agora" className="items-start" />
            </div>

            {/* Guarantee card */}
            <div className="bg-white/6 border border-white/12 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-7">
                <div className="w-13 h-13 bg-emerald-500/20 border border-emerald-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-7 h-7 text-emerald-400" />
                </div>
                <div>
                  <p className="font-extrabold text-white text-lg">Garantia total</p>
                  <p className="text-slate-400 text-sm">Zero risco, zero surpresa</p>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  '7 dias para testar com sua loja real',
                  'Sem cartão de crédito no cadastro',
                  'Cancele em 1 clique, sem multa',
                  'Seus dados sempre seguros',
                  'Suporte em português durante o teste',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PLANOS ── */}
      <section id="pricing" className="py-20 sm:py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-bold px-4 py-1.5 rounded-full mb-5 border border-emerald-100">
              Planos
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Comece grátis, escolha depois</h2>
            <p className="text-slate-500 text-lg">7 dias grátis em qualquer plano. Sem cartão. Cancele quando quiser.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {plans.map((plan, i) => (
              <div key={i} className={`relative rounded-3xl flex flex-col ${plan.popular ? 'bg-gradient-to-b from-slate-900 to-[#0a0f1e] shadow-2xl shadow-slate-900/50 md:scale-[1.04] z-10' : 'bg-white border border-slate-200 shadow-sm'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wide shadow-lg whitespace-nowrap">
                    Mais escolhido
                  </div>
                )}
                <div className="p-8">
                  <p className={`text-xl font-extrabold mb-1 ${plan.popular ? 'text-white' : 'text-slate-900'}`}>{plan.name}</p>
                  <p className={`text-sm mb-5 min-h-[2.5rem] ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>{plan.subtitle}</p>
                  <div className="mb-7">
                    <span className={`text-5xl font-extrabold ${plan.popular ? 'text-white' : 'text-slate-900'}`}>{plan.price}</span>
                    <span className={`text-sm ml-1 ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>/mês</span>
                  </div>
                  <a
                    href={`${APP_URL}/register`}
                    onClick={() => plan.events.forEach(e => track(e))}
                    className={`block w-full py-4 rounded-2xl font-extrabold text-center text-base transition no-underline mb-2 ${plan.popular ? 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/30' : 'bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200'}`}
                  >
                    {plan.cta}
                  </a>
                  {plan.popular && (
                    <p className="text-center text-xs text-emerald-400 mb-6 flex items-center justify-center gap-1">
                      <Lock className="w-3 h-3" />Sem cartão no cadastro
                    </p>
                  )}
                  {!plan.popular && <div className="mb-6" />}
                  <ul className="space-y-3">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle style={{ width: 17, height: 17 }} className={`flex-shrink-0 mt-0.5 ${plan.popular ? 'text-emerald-400' : 'text-emerald-500'}`} />
                        <span className={`text-sm ${plan.popular ? 'text-slate-300' : 'text-slate-600'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-slate-400 text-sm flex items-center justify-center gap-2">
            <Shield className="w-4 h-4 text-emerald-500" />
            Todos os planos com 7 dias grátis · Cancele quando quiser · Sem burocracia
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">Ainda tem dúvida?</h2>
            <p className="text-slate-500 text-lg">As mais comuns, respondidas direto.</p>
          </div>
          <div className="space-y-3 mb-12">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 hover:border-emerald-200 rounded-2xl overflow-hidden transition bg-white">
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-semibold text-slate-900 text-base">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${openFAQ === i ? 'rotate-180' : ''}`} />
                </button>
                {openFAQ === i && (
                  <div className="px-6 pb-5 text-slate-600 leading-relaxed text-base border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
            <p className="font-extrabold text-slate-900 text-xl mb-2">A melhor resposta é testar.</p>
            <p className="text-slate-500 mb-6">7 dias grátis com a sua loja real. Sem cartão, sem compromisso.</p>
            <PrimaryCTA event="cta_faq" label="👉 Criar conta grátis agora" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          8. CTA FINAL
      ══════════════════════════════════════════════ */}
      <section className="py-28 sm:py-36 bg-[#0a0f1e] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(16,185,129,0.13),transparent)]" aria-hidden />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:48px_48px]" aria-hidden />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/25 text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold mb-10">
            <Award className="w-4 h-4" />
            +500 lojas já organizadas com o VendaFlow
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.04] mb-6">
            Sua loja pode estar<br />
            <span className="text-emerald-400">organizada hoje.</span>
          </h2>

          <p className="text-slate-300 text-xl leading-relaxed mb-12 max-w-xl mx-auto">
            Cada dia sem controle é dinheiro perdido. Crie sua conta em 2 minutos e veja a diferença na primeira semana.
          </p>

          <PrimaryCTA
            event="cta_final"
            size="xl"
            label="👉 Criar minha conta grátis"
            className="items-center mb-12"
          />

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            {['7 dias grátis', 'Sem cartão', 'Cancele quando quiser', 'Suporte em português'].map(t => (
              <span key={t} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500" />{t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0a0f1e] border-t border-white/8 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2.5">
              <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-1.5 rounded-lg">
                <Store className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-extrabold">VendaFlow</span>
            </div>
            <div className="flex gap-6 text-sm">
              <a href={`${APP_URL}/login`} className="text-slate-500 hover:text-white transition no-underline">Entrar</a>
              <a href={`${APP_URL}/register`} className="text-slate-500 hover:text-white transition no-underline">Criar conta</a>
              <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="text-slate-500 hover:text-white transition">Planos</button>
            </div>
            <p className="text-slate-600 text-sm">© 2025 VendaFlow. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* ── FLOATING CTA MOBILE ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white/98 backdrop-blur border-t border-slate-200 px-4 pt-3 pb-4 shadow-2xl">
        <a
          href={`${APP_URL}/register`}
          onClick={() => { track('cta_mobile_float'); track('start_trial_click'); }}
          className="flex items-center justify-center gap-2 w-full bg-emerald-500 hover:bg-emerald-400 text-white font-extrabold text-base py-4 rounded-xl transition no-underline shadow-lg shadow-emerald-500/30"
        >
          👉 Testar grátis por 7 dias
          <ArrowRight className="w-4 h-4" />
        </a>
        <p className="text-center text-xs text-slate-400 mt-1.5">Sem cartão · Cancele quando quiser</p>
      </div>

      {/* ── SIGNUP TOAST ── */}
      {toast && (
        <div className="fixed bottom-24 sm:bottom-6 left-4 z-50 animate-[fadeInUp_0.3s_ease]">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 max-w-[220px]">
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-slate-900 text-xs font-extrabold leading-tight">{toast.name} de {toast.city}</p>
              <p className="text-slate-400 text-xs">acabou de criar conta</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
