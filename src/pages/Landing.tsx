import {
  Store, ChartBar as BarChart3, Package, DollarSign, Smartphone,
  Check, TrendingDown, Clock, CircleAlert as AlertCircle, Zap,
  Shield, Award, ChevronDown, ArrowRight, BadgeCheck, Star,
  CircleCheck as CheckCircle, TrendingUp, MapPin, X, Lock,
  PhoneCall,
} from 'lucide-react';
import { useState, useEffect } from 'react';

const APP_URL = 'https://app.acaigestor.com.br';

const track = (eventName: string) => {
  try {
    const w = window as any; // eslint-disable-line @typescript-eslint/no-explicit-any
    if (typeof w !== 'undefined' && w.plausible) w.plausible(eventName);
  } catch { /* noop */ }
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const painPoints = [
  { icon: <TrendingDown className="w-6 h-6" />, title: 'Fecha o dia sem saber se lucrou', desc: 'O dinheiro entra, mas o que sobrou é um mistério.' },
  { icon: <Package className="w-6 h-6" />, title: 'Estoque fura sem avisar', desc: 'Você perde venda porque o produto acabou e não sabia.' },
  { icon: <Clock className="w-6 h-6" />, title: 'Fila longa afasta cliente', desc: 'A demora no balcão faz quem estava pronto para comprar desistir.' },
  { icon: <AlertCircle className="w-6 h-6" />, title: 'Erros no caixa viram prejuízo', desc: 'Quando o caixa não fecha, você perde tempo e dinheiro.' },
];

const benefits = [
  { icon: <Zap className="w-6 h-6" />, title: 'Venda mais rápido', desc: 'PDV ultrarrápido que atende em segundos. Sem travar, sem confusão no balcão.' },
  { icon: <Package className="w-6 h-6" />, title: 'Controle estoque automático', desc: 'Cada venda baixa o estoque. Saiba o que está acabando antes de acabar.' },
  { icon: <BarChart3 className="w-6 h-6" />, title: 'Chega de planilhas', desc: 'Caixa, produtos, relatórios e pedidos em um único lugar. Sem Excel, sem papel.' },
  { icon: <Smartphone className="w-6 h-6" />, title: 'Tudo na palma da mão', desc: 'Acesse do celular, tablet ou computador de onde você estiver.' },
  { icon: <DollarSign className="w-6 h-6" />, title: 'Saiba exatamente o que lucrou', desc: 'Relatórios claros de vendas, ticket médio e lucro real por período.' },
  { icon: <TrendingUp className="w-6 h-6" />, title: 'Decida com dados reais', desc: 'Veja quais produtos vendem mais e cresça com base em números, não em achismo.' },
];

const beforeAfter = [
  { before: 'Fecha o dia sem saber o lucro', after: 'Vê o resultado em tempo real, direto no celular' },
  { before: 'Descobre que o estoque acabou na hora da venda', after: 'Recebe alerta automático antes de furar' },
  { before: 'Perde 30 min fechando o caixa toda noite', after: 'Caixa fecha em menos de 2 minutos, com tudo auditado' },
  { before: 'Usa caderno, planilha e papel juntos', after: 'Um sistema só faz tudo, do PDV ao relatório' },
];

const testimonials = [
  {
    name: 'Mariana Costa', city: 'São Paulo, SP', role: 'Dona de açaiteria',
    text: 'Em 3 dias já recuperei o valor do plano. O atendimento ficou 3x mais rápido e parei de perder venda por falta de controle.',
    stars: 5, result: 'Recuperou o investimento em 3 dias',
    photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=160&h=160&dpr=2',
  },
  {
    name: 'João Alves', city: 'Campinas, SP', role: 'Dono de lanchonete',
    text: 'Antes eu fechava o dia sem saber se tinha lucro. Agora acompanho tudo em tempo real. Descobri que um produto me dava prejuízo há 4 meses.',
    stars: 5, result: 'Descobriu produto dando prejuízo há 4 meses',
    photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=160&h=160&dpr=2',
  },
  {
    name: 'Carlos Mendes', city: 'Belo Horizonte, MG', role: 'Cafeteria local',
    text: 'Tentei usar outros sistemas e era tudo complicado demais. O VendaFlow meu funcionário aprendeu em 10 minutos. O sistema se paga rápido.',
    stars: 5, result: 'Funcionário aprendeu em 10 minutos',
    photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=160&h=160&dpr=2',
  },
];

const plans = [
  {
    name: 'Starter', price: 'R$ 39,90', subtitle: 'Para começar organizado',
    buttonText: 'Testar grátis por 7 dias', popular: false,
    events: ['plan_starter_click', 'start_trial_click'],
    features: ['Cadastro de produtos', 'Controle básico de vendas', 'Relatório diário', 'Acesso mobile e desktop', 'Suporte por email'],
  },
  {
    name: 'Pro', price: 'R$ 79,90', subtitle: 'Para vender mais e crescer',
    buttonText: '👉 Quero testar grátis por 7 dias', popular: true,
    events: ['plan_pro_click', 'start_trial_click'],
    features: ['Tudo do Starter', 'PDV completo e ultrarrápido', 'Controle de caixa profissional', 'Estoque completo com alertas', 'Relatórios de lucro detalhados', 'Múltiplos usuários (até 3)', 'Cardápio e pedidos online', 'Suporte prioritário'],
  },
  {
    name: 'Premium', price: 'R$ 149,90', subtitle: 'Para operações maiores',
    buttonText: 'Falar com especialista', popular: false,
    events: ['plan_premium_click'],
    features: ['Tudo do Pro', 'Usuários ilimitados', 'Comandas e mesas', 'Fichas técnicas', 'Gestão de clientes', 'API para integrações', 'Atendimento VIP'],
  },
];

const faqs = [
  { q: 'Preciso instalar alguma coisa?', a: 'Não. Funciona direto no navegador — celular ou computador. Cria a conta e começa a usar na hora.' },
  { q: 'Meu funcionário vai conseguir usar?', a: 'Sim. A interface foi feita para ser usada no balcão, sob pressão. Se usa WhatsApp, usa o VendaFlow.' },
  { q: 'E se eu não gostar?', a: 'Você tem 7 dias grátis para testar sem comprometer nada. Se não gostar, não cobra nada, sem burocracia.' },
  { q: 'Serve para açaiteria mesmo?', a: 'Foi feito exatamente para açaiterias, lanchonetes, cafeterias e comércios locais. Não é um sistema genérico.' },
  { q: 'Posso cancelar quando quiser?', a: 'Sim. Sem contrato, sem multa. Cancele quando quiser direto pelo painel em menos de 1 minuto.' },
  { q: 'Tem suporte se eu travar?', a: 'Sim. Suporte em português em todos os planos. Nos planos superiores, atendimento com prioridade.' },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function Landing() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [bannerVisible, setBannerVisible] = useState(true);
  const [recentSignup, setRecentSignup] = useState<{ name: string; city: string } | null>(null);

  const signupNames = [
    { name: 'Fernanda S.', city: 'São Paulo' },
    { name: 'Ricardo M.', city: 'Fortaleza' },
    { name: 'Patrícia L.', city: 'Manaus' },
    { name: 'Bruno A.', city: 'Salvador' },
    { name: 'Juliana K.', city: 'Curitiba' },
    { name: 'Rafael N.', city: 'Recife' },
  ];

  useEffect(() => {
    let idx = 0;
    const show = () => {
      setRecentSignup(signupNames[idx % signupNames.length]);
      idx++;
      setTimeout(() => setRecentSignup(null), 4000);
    };
    const timer = setInterval(show, 9000);
    const initial = setTimeout(show, 3000);
    return () => { clearInterval(timer); clearTimeout(initial); };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const PrimaryCTA = ({ label = '👉 Testar grátis agora', event = 'cta_click', className = '' }) => (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <a
        href={`${APP_URL}/register`}
        onClick={() => { track(event); track('start_trial_click'); }}
        className="group relative overflow-hidden bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-white font-extrabold text-lg px-10 py-4 rounded-2xl transition-all shadow-xl shadow-emerald-500/40 flex items-center gap-3 no-underline"
        style={{ boxShadow: '0 0 0 0 rgba(16,185,129,0.4)' }}
      >
        <span className="relative z-10 flex items-center gap-3">
          {label}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </span>
        <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      </a>
      <p className="text-xs text-slate-400 flex items-center gap-1.5">
        <Lock className="w-3 h-3" />
        7 dias grátis · Sem cartão · Cancele quando quiser
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">

      {/* ── URGENCY BANNER ── */}
      {bannerVisible && (
        <div className="relative bg-emerald-600 text-white text-sm font-semibold py-2.5 px-4 text-center">
          <span className="hidden sm:inline">Oferta por tempo limitado: </span>
          7 dias grátis + setup sem custo para novas lojas.{' '}
          <a href={`${APP_URL}/register`} onClick={() => track('banner_cta')} className="underline underline-offset-2 font-bold hover:text-emerald-100 transition no-underline" style={{ textDecoration: 'underline' }}>
            Ativar agora →
          </a>
          <button
            onClick={() => setBannerVisible(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition p-1"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 bg-white/97 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2.5">
              <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-2 rounded-xl shadow-sm">
                <Store className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">VendaFlow</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <button onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-slate-900 transition">Como funciona</button>
              <button onClick={() => document.getElementById('depoimentos')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-slate-900 transition">Depoimentos</button>
              <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-slate-900 transition">Planos</button>
            </div>
            <div className="flex items-center gap-3">
              <a href={`${APP_URL}/login`} className="hidden sm:block text-slate-500 hover:text-slate-900 font-medium text-sm transition no-underline">
                Entrar
              </a>
              <a
                href={`${APP_URL}/register`}
                onClick={() => track('nav_cta_click')}
                className="bg-emerald-500 hover:bg-emerald-400 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition shadow-md shadow-emerald-200/60 no-underline"
              >
                Testar grátis
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ── 1. HERO ── */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/10 blur-[160px] rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-600/8 blur-[140px] rounded-full translate-y-1/3 -translate-x-1/4" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:56px_56px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-0 sm:pt-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left */}
            <div>
              {/* Social proof badge */}
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold mb-7">
                <BadgeCheck className="w-4 h-4 flex-shrink-0" />
                +500 açaiterias já organizam com o VendaFlow
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-[3.5rem] font-extrabold tracking-tight leading-[1.06] mb-5">
                Sua açaíteria perdendo
                <br />
                <span className="text-red-400">R$ 800 por mês</span>
                <br />
                <span className="text-emerald-400">sem perceber</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 mb-7 leading-relaxed max-w-lg">
                Estoque furado, caixa que não fecha, filas longas — cada um desses problemas custa dinheiro. <strong className="text-white">O VendaFlow resolve tudo em um sistema simples.</strong>
              </p>

              <ul className="space-y-3 mb-9">
                {[
                  'Controle total do estoque e do caixa',
                  'Atendimento 3x mais rápido no balcão',
                  'Saiba o lucro real todo dia, sem planilha',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-100 text-base">
                    <span className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 shadow-sm shadow-emerald-500/50">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <PrimaryCTA event="cta_hero_click" className="items-start" />

              <button
                onClick={() => { track('cta_hero_demo'); document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="mt-4 text-slate-400 hover:text-slate-200 text-sm font-medium transition underline underline-offset-2"
              >
                Ver como funciona antes de cadastrar
              </button>
            </div>

            {/* Right: mockup */}
            <div className="relative flex items-end pt-8 lg:pt-0">
              <div className="w-full relative">
                <div className="absolute -inset-6 bg-emerald-500/8 blur-3xl rounded-3xl" />
                <div className="relative bg-slate-800/70 backdrop-blur-sm rounded-t-2xl border border-slate-700/60 border-b-0 shadow-2xl overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/50 bg-slate-900/60">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs text-slate-400 font-medium">VendaFlow · Dashboard</span>
                    <span className="ml-auto flex items-center gap-1 text-xs text-emerald-400 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Ao vivo
                    </span>
                  </div>
                  <div className="p-5 space-y-4">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl p-4">
                        <p className="text-xs text-emerald-100 mb-0.5">Hoje</p>
                        <p className="text-2xl font-extrabold text-white">R$ 2.847</p>
                        <p className="text-xs text-emerald-200 mt-0.5 flex items-center gap-1"><TrendingUp className="w-3 h-3" />+18% ontem</p>
                      </div>
                      <div className="bg-slate-700/50 rounded-xl p-4">
                        <p className="text-xs text-slate-400 mb-0.5">Pedidos</p>
                        <p className="text-2xl font-bold text-white">87</p>
                      </div>
                      <div className="bg-slate-700/50 rounded-xl p-4">
                        <p className="text-xs text-slate-400 mb-0.5">Ticket</p>
                        <p className="text-2xl font-bold text-white">R$ 32</p>
                      </div>
                    </div>
                    <div className="bg-slate-900/60 rounded-xl p-4">
                      <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-3">Mais vendidos</p>
                      {[
                        { name: 'Açaí 500ml', qty: 45, pct: 92 },
                        { name: 'Açaí 300ml', qty: 32, pct: 65 },
                        { name: 'Suco Natural', qty: 21, pct: 43 },
                      ].map((p) => (
                        <div key={p.name} className="mb-2">
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-slate-200">{p.name}</span>
                            <span className="text-slate-400">{p.qty} vendidos</span>
                          </div>
                          <div className="h-1.5 bg-slate-700 rounded-full">
                            <div className="h-1.5 bg-emerald-500 rounded-full" style={{ width: `${p.pct}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold px-3 py-2.5 rounded-lg">
                      <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      Caixa aberto · Saldo atual R$ 2.727,50
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF BAR ── */}
      <section className="bg-slate-50 border-y border-slate-200 py-5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-slate-700 text-sm font-semibold">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {['https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg', 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg', 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'].map((src, i) => (
                  <img key={i} src={`${src}?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2`} alt="" className="w-7 h-7 rounded-full object-cover border-2 border-white" />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />)}
                </div>
                <span className="text-xs text-slate-500 font-normal">+500 lojas ativas</span>
              </div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-slate-200" />
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span>7 dias grátis, sem cartão de crédito</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-slate-200" />
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span>Pronto para usar em 5 minutos</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-slate-200" />
            <div className="flex items-center gap-2">
              <PhoneCall className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span>Suporte em português</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. DOR ── */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-red-50 text-red-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-5 border border-red-100">
              Reconhece algum desses problemas?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Todo mês você perde dinheiro
              <span className="text-red-500"> sem nem perceber</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Açaiterias sem gestão perdem em média <strong className="text-slate-900">R$ 800 a R$ 2.000 por mês</strong> em erros evitáveis.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {painPoints.map((p, i) => (
              <div key={i} className="group bg-slate-50 border border-slate-200 hover:border-red-200 hover:bg-red-50/50 rounded-2xl p-6 transition-all">
                <div className="w-11 h-11 bg-red-100 text-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-200 transition">
                  {p.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2 leading-snug">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-800 px-6 py-4 rounded-2xl font-semibold">
              <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              O VendaFlow elimina todos esses problemas. E você tem 7 dias grátis para provar.
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. ANTES/DEPOIS ── */}
      <section id="como-funciona" className="py-20 sm:py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_60%)]" aria-hidden />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              A transformação
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              O que muda no dia a dia
              <span className="text-emerald-400"> da sua loja</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Não é teoria. Isso é o que donos de açaíteria relatam na primeira semana.
            </p>
          </div>

          <div className="space-y-4">
            {beforeAfter.map((item, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-slate-800">
                <div className="flex items-center gap-4 bg-slate-900/80 px-6 py-5 border-b md:border-b-0 md:border-r border-slate-800">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    <span className="text-slate-500 text-xs uppercase tracking-wide font-semibold block mb-0.5">Antes</span>
                    {item.before}
                  </p>
                </div>
                <div className="flex items-center gap-4 bg-emerald-950/60 px-6 py-5">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/25 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-emerald-400" strokeWidth={3} />
                  </div>
                  <p className="text-white text-sm leading-relaxed">
                    <span className="text-emerald-400 text-xs uppercase tracking-wide font-semibold block mb-0.5">Com o VendaFlow</span>
                    {item.after}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <PrimaryCTA event="cta_before_after" />
          </div>
        </div>
      </section>

      {/* ── 4. BENEFÍCIOS ── */}
      <section id="beneficios" className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5 border border-emerald-100">
              Por que funciona?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Tudo que sua loja precisa
              <span className="text-emerald-600"> em um lugar só</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Cada recurso foi construído para o ritmo real de uma açaíteria ou lanchonete.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <div key={i} className="group flex gap-4 bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/40 hover:shadow-md rounded-2xl p-6 transition-all">
                <div className="w-11 h-11 bg-emerald-500 text-white rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm shadow-emerald-200">
                  {b.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1 text-base">{b.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <PrimaryCTA event="cta_benefits_click" />
          </div>
        </div>
      </section>

      {/* ── 5. QUEBRA DE OBJEÇÃO ── */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-emerald-100">
                Feito para simplicidade
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-5 leading-tight">
                Não precisa entender
                <br />
                <span className="text-emerald-600">de tecnologia</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Se você usa WhatsApp, você consegue usar o VendaFlow. Sem manual de 100 páginas. Sem treinamento caro. Funciona e pronto.
              </p>
              <ul className="space-y-3.5">
                {[
                  'Interface pensada para quem está no balcão',
                  'Funciona em qualquer celular, sem instalar app',
                  'Suporte em português quando você precisar',
                  'Configurado e pronto em menos de 5 minutos',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mini PDV card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-100 blur-2xl rounded-3xl opacity-40" />
              <div className="relative bg-white border border-slate-200 rounded-2xl shadow-xl p-6 space-y-3">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-emerald-500 rounded-xl flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-900 font-bold text-sm">Nova venda</p>
                      <p className="text-slate-400 text-xs">Toque para registrar</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">PDV Aberto</span>
                </div>
                <div className="h-px bg-slate-100" />
                {[
                  { name: 'Açaí 500ml', price: 'R$ 18,00', qty: 2 },
                  { name: 'Suco de Laranja', price: 'R$ 9,00', qty: 1 },
                  { name: 'Granola extra', price: 'R$ 3,50', qty: 2 },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between bg-slate-50 rounded-xl px-4 py-3">
                    <div>
                      <p className="text-slate-900 text-sm font-semibold">{item.name}</p>
                      <p className="text-slate-400 text-xs">Qtd: {item.qty}</p>
                    </div>
                    <p className="text-emerald-600 font-bold text-sm">{item.price}</p>
                  </div>
                ))}
                <div className="flex justify-between items-center bg-emerald-500 rounded-xl px-5 py-4">
                  <span className="text-white font-bold">Total</span>
                  <span className="text-white font-extrabold text-xl">R$ 52,50</span>
                </div>
                <button className="w-full bg-slate-900 text-white font-bold rounded-xl py-3 text-sm hover:bg-slate-800 transition">
                  Finalizar e imprimir
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. DEPOIMENTOS ── */}
      <section id="depoimentos" className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex justify-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />)}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              O que donos de loja falam
            </h2>
            <p className="text-slate-500 text-lg">
              Resultados reais de quem testou e ficou.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="flex flex-col bg-slate-50 border border-slate-200 hover:border-emerald-200 hover:shadow-lg rounded-2xl p-7 transition-all">
                {/* Result badge */}
                <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full mb-4 w-fit">
                  <CheckCircle className="w-3.5 h-3.5" />
                  {t.result}
                </div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-slate-700 leading-relaxed mb-6 text-base flex-1">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.photo} alt={t.name} className="w-11 h-11 rounded-full object-cover ring-2 ring-emerald-100 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs flex items-center gap-1">
                      <MapPin className="w-3 h-3" />{t.city} · {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats bar */}
          <div className="mt-10 grid grid-cols-3 gap-0 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl overflow-hidden">
            {[
              { value: '+500', label: 'lojas ativas' },
              { value: '4,9/5', label: 'avaliação média' },
              { value: '< 5min', label: 'para configurar' },
            ].map((s, i) => (
              <div key={i} className={`text-center py-7 ${i < 2 ? 'border-r border-white/20' : ''}`}>
                <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">{s.value}</p>
                <p className="text-emerald-100 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. GARANTIA + OFERTA ── */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-emerald-600 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:40px_40px]" aria-hidden />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/3" aria-hidden />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
                7 dias grátis.
                <br />Zero risco.
              </h2>
              <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                Teste com sua loja real. Se não gostar, cancela antes de terminar o período — e não paga nada.
              </p>
              <a
                href={`${APP_URL}/register`}
                onClick={() => { track('cta_offer_click'); track('start_trial_click'); }}
                className="inline-flex items-center gap-3 bg-white text-emerald-700 hover:bg-emerald-50 px-10 py-5 rounded-2xl font-extrabold text-xl transition-all shadow-2xl no-underline group"
              >
                👉 Criar conta grátis agora
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="mt-3 text-sm text-emerald-200 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" />
                Sem cartão de crédito · Cancele quando quiser
              </p>
            </div>
            {/* Garantia card */}
            <div className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-extrabold text-white text-lg">Garantia total</p>
                  <p className="text-emerald-200 text-sm">Sem risco, sem surpresa</p>
                </div>
              </div>
              <ul className="space-y-3.5">
                {[
                  '7 dias para testar com sua loja real',
                  'Sem cartão de crédito na hora de criar conta',
                  'Cancele em 1 clique, sem multa',
                  'Seus dados sempre seguros',
                  'Suporte em português durante o teste',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-emerald-100 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-300 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. PLANOS ── */}
      <section id="pricing" className="py-20 sm:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5 border border-emerald-100">
              Planos
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Comece grátis. Escolha depois.
            </h2>
            <p className="text-slate-600 text-lg">
              7 dias grátis em qualquer plano. Sem cartão. Cancele quando quiser.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-3xl flex flex-col transition-all ${plan.popular ? 'bg-gradient-to-b from-slate-900 to-slate-950 text-white shadow-2xl shadow-slate-900/40 md:scale-[1.04] z-10' : 'bg-white border border-slate-200 shadow-sm'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-5 py-1.5 rounded-full text-xs font-extrabold tracking-wide shadow-lg uppercase whitespace-nowrap">
                    Mais escolhido
                  </div>
                )}
                <div className="p-8">
                  <h3 className={`text-xl font-bold mb-1 ${plan.popular ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                  <p className={`text-sm mb-5 min-h-[40px] ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>{plan.subtitle}</p>
                  <div className="mb-6">
                    <span className={`text-5xl font-extrabold ${plan.popular ? 'text-white' : 'text-slate-900'}`}>{plan.price}</span>
                    <span className={`text-base ml-1 ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>/mês</span>
                  </div>
                  <a
                    href={`${APP_URL}/register`}
                    onClick={() => plan.events.forEach((e) => track(e))}
                    className={`block w-full py-4 rounded-2xl font-bold text-center text-base transition no-underline mb-2 ${plan.popular ? 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/30' : 'bg-slate-100 hover:bg-emerald-50 text-slate-900 border border-slate-200'}`}
                  >
                    {plan.buttonText}
                  </a>
                  {plan.popular && (
                    <p className="text-center text-xs text-emerald-400 mb-5 flex items-center justify-center gap-1">
                      <Lock className="w-3 h-3" />Sem cartão no cadastro
                    </p>
                  )}
                  {!plan.popular && <div className="mb-5" />}
                  <ul className="space-y-3.5">
                    {plan.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle className={`flex-shrink-0 mt-0.5 ${plan.popular ? 'text-emerald-400' : 'text-emerald-500'}`} style={{ width: 18, height: 18 }} />
                        <span className={`text-sm ${plan.popular ? 'text-slate-300' : 'text-slate-600'}`}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-slate-400 text-sm flex items-center justify-center gap-2">
              <Shield className="w-4 h-4 text-emerald-500" />
              Todos os planos com 7 dias grátis · Cancele a qualquer momento · Sem burocracia
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">Ainda tem dúvida?</h2>
            <p className="text-slate-500 text-lg">Respondemos as mais comuns aqui.</p>
          </div>
          <div className="space-y-3 mb-12">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 hover:border-emerald-200 rounded-2xl overflow-hidden transition">
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-semibold text-slate-900">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openFAQ === i ? 'rotate-180' : ''}`} />
                </button>
                {openFAQ === i && (
                  <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-200 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* CTA inside FAQ */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-7 text-center">
            <p className="font-bold text-slate-900 text-lg mb-2">Ainda com dúvida? Teste de graça e veja por si mesmo.</p>
            <p className="text-slate-500 text-sm mb-5">Nenhuma resposta convence mais do que 7 dias usando com a sua loja.</p>
            <PrimaryCTA event="cta_faq_click" label="👉 Criar conta grátis agora" />
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 sm:py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15),transparent_60%)]" aria-hidden />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" aria-hidden />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <Award className="w-4 h-4" />
            Mais de 500 lojas já organizadas
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Sua loja pode estar
            <br />
            <span className="text-emerald-400">organizada hoje.</span>
          </h2>

          <p className="text-slate-300 text-xl mb-10 max-w-xl mx-auto leading-relaxed">
            Cada dia sem controle é dinheiro perdido. Crie sua conta em 2 minutos e comece agora.
          </p>

          <PrimaryCTA event="cta_final_click" label="👉 Criar minha conta grátis" className="items-center mb-10" />

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" />7 dias grátis</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" />Sem cartão</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" />Cancele quando quiser</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" />Suporte em português</span>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-slate-950 border-t border-slate-800/60 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2.5">
              <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-2 rounded-xl">
                <Store className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">VendaFlow</span>
            </div>
            <div className="flex gap-6 text-sm">
              <a href={`${APP_URL}/login`} className="text-slate-400 hover:text-white transition no-underline">Entrar</a>
              <a href={`${APP_URL}/register`} className="text-slate-400 hover:text-white transition no-underline">Criar conta</a>
              <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="text-slate-400 hover:text-white transition">Planos</button>
            </div>
            <p className="text-slate-500 text-sm">© 2025 VendaFlow. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* ── FLOATING CTA (mobile) ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white border-t border-slate-200 px-4 py-3 shadow-2xl">
        <a
          href={`${APP_URL}/register`}
          onClick={() => { track('cta_floating_mobile'); track('start_trial_click'); }}
          className="flex items-center justify-center gap-2 w-full bg-emerald-500 hover:bg-emerald-400 text-white font-extrabold text-base py-3.5 rounded-xl transition no-underline shadow-lg shadow-emerald-500/30"
        >
          👉 Testar grátis por 7 dias
          <ArrowRight className="w-4 h-4" />
        </a>
        <p className="text-center text-xs text-slate-400 mt-1.5">Sem cartão · Cancele quando quiser</p>
      </div>

      {/* ── RECENT SIGNUP TOAST ── */}
      {recentSignup && (
        <div className="fixed bottom-24 sm:bottom-6 left-4 z-50 bg-white border border-slate-200 rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 max-w-xs animate-[fadeInUp_0.3s_ease]">
          <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-slate-900 text-xs font-bold">{recentSignup.name} de {recentSignup.city}</p>
            <p className="text-slate-500 text-xs">acabou de criar uma conta</p>
          </div>
        </div>
      )}
    </div>
  );
}
