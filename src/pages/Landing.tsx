import {
  Store, ChartBar as BarChart3, Package, DollarSign, Smartphone,
  Check, TrendingDown, Clock, CircleAlert as AlertCircle, Zap,
  Shield, Award, ChevronDown, ArrowRight, BadgeCheck, Star,
  CircleCheck as CheckCircle, TrendingUp, MapPin,
} from 'lucide-react';
import { useState } from 'react';

const APP_URL = 'https://app.acaigestor.com.br';

const trackEvent = (eventName: string) => {
  try {
    const w = window as any; // eslint-disable-line @typescript-eslint/no-explicit-any
    if (typeof w !== 'undefined' && w.plausible) w.plausible(eventName);
  } catch { /* Plausible not loaded */ }
};

// ─── DATA ───────────────────────────────────────────────────────────────────

const painPoints = [
  { icon: <TrendingDown className="w-6 h-6" />, title: 'Fecha o dia sem saber se lucrou', desc: 'O dinheiro entra, mas o que sobrou é um mistério.' },
  { icon: <Package className="w-6 h-6" />, title: 'Estoque fura sem avisar', desc: 'Você perde venda porque o produto acabou e você não sabia.' },
  { icon: <Clock className="w-6 h-6" />, title: 'Fila longa afasta cliente', desc: 'A demora no balcão faz quem estava pronto para comprar desistir.' },
  { icon: <AlertCircle className="w-6 h-6" />, title: 'Erro no caixa vira prejuízo', desc: 'Quando o caixa não fecha, você perde tempo investigando.' },
];

const benefits = [
  { icon: <Zap className="w-6 h-6" />, title: 'Venda mais rápido', desc: 'PDV ultrarrápido que atende em segundos. Sem travar, sem confusão no balcão.' },
  { icon: <Package className="w-6 h-6" />, title: 'Controle seu estoque automaticamente', desc: 'Cada venda atualiza o estoque. Saiba o que está acabando antes de acabar.' },
  { icon: <BarChart3 className="w-6 h-6" />, title: 'Organize sem planilhas', desc: 'Tudo em um só lugar: caixa, produtos, relatórios e pedidos. Sem Excel, sem papel.' },
  { icon: <Smartphone className="w-6 h-6" />, title: 'Tudo na palma da mão', desc: 'Acesse pelo celular, tablet ou computador de onde você estiver.' },
  { icon: <DollarSign className="w-6 h-6" />, title: 'Saiba exatamente o que lucrou', desc: 'Relatórios claros de vendas, ticket médio e lucro real por período.' },
  { icon: <TrendingUp className="w-6 h-6" />, title: 'Cresça com dados reais', desc: 'Veja quais produtos vendem mais e decida com base em números, não em achismo.' },
];

const screenshots = [
  { label: 'PDV Rápido', desc: 'Atenda em segundos', img: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1', color: 'from-emerald-500/20 to-emerald-600/5' },
  { label: 'Dashboard', desc: 'Resultados ao vivo', img: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1', color: 'from-sky-500/20 to-sky-600/5' },
  { label: 'Pedidos Online', desc: 'Venda também pelo celular', img: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1', color: 'from-teal-500/20 to-teal-600/5' },
];

const testimonials = [
  { name: 'Mariana Costa', city: 'São Paulo, SP', role: 'Dona de açaiteria', text: 'O atendimento ficou muito mais rápido e parei de perder venda por falta de controle. Recomendo demais!', stars: 5, photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=160&h=160&dpr=2' },
  { name: 'João Alves', city: 'Campinas, SP', role: 'Dono de lanchonete', text: 'Antes eu fechava o dia sem saber se tinha lucro. Agora acompanho tudo em tempo real e tomo decisões com confiança.', stars: 5, photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=160&h=160&dpr=2' },
  { name: 'Carlos Mendes', city: 'Belo Horizonte, MG', role: 'Cafeteria local', text: 'Finalmente consegui organizar caixa, produtos e operação em um lugar só. O sistema paga o custo dele rápido.', stars: 5, photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=160&h=160&dpr=2' },
];

const plans = [
  {
    name: 'Starter',
    price: 'R$ 39,90',
    subtitle: 'Para começar organizado',
    buttonText: 'Testar grátis',
    popular: false,
    events: ['plan_starter_click', 'start_trial_click'],
    features: ['Cadastro de produtos', 'Controle básico de vendas', 'Relatório diário', 'Acesso mobile e desktop', 'Suporte por email'],
  },
  {
    name: 'Pro',
    price: 'R$ 79,90',
    subtitle: 'Para vender mais e crescer',
    buttonText: '👉 Testar grátis por 7 dias',
    popular: true,
    events: ['plan_pro_click', 'start_trial_click'],
    features: ['Tudo do Starter', 'PDV completo e ultrarrápido', 'Controle de caixa profissional', 'Estoque completo', 'Relatórios de lucro detalhados', 'Múltiplos usuários (até 3)', 'Cardápio e pedidos online', 'Suporte prioritário'],
  },
  {
    name: 'Premium',
    price: 'R$ 149,90',
    subtitle: 'Para operações maiores',
    buttonText: 'Falar com especialista',
    popular: false,
    events: ['plan_premium_click'],
    features: ['Tudo do Pro', 'Usuários ilimitados', 'Comandas e mesas', 'Fichas técnicas', 'Gestão de clientes', 'API para integrações', 'Atendimento VIP'],
  },
];

const faqs = [
  { q: 'Preciso instalar algo?', a: 'Não. O sistema funciona direto no navegador. Você acessa, cria sua conta e começa a usar na hora.' },
  { q: 'Funciona no celular?', a: 'Sim. Foi feito para celular, tablet e computador — onde quer que esteja.' },
  { q: 'Preciso entender de tecnologia?', a: 'Não. É simples e direto ao ponto. Se você usa WhatsApp, você usa o VendaFlow.' },
  { q: 'Posso cancelar quando quiser?', a: 'Sim. Sem burocracia, sem contrato. Cancele quando quiser direto pelo painel.' },
  { q: 'Serve para açaiteria?', a: 'Foi feito exatamente para açaiterias, lanchonetes, cafeterias e outros comércios locais.' },
  { q: 'Tem suporte em português?', a: 'Sim. Todos os planos incluem suporte em português, com prioridade nos planos superiores.' },
];

// ─── COMPONENT ──────────────────────────────────────────────────────────────

export default function Landing() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
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
              <button onClick={() => document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-slate-900 transition">Benefícios</button>
              <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-slate-900 transition">Planos</button>
            </div>
            <div className="flex items-center gap-3">
              <a href={`${APP_URL}/login`} className="hidden sm:block text-slate-600 hover:text-slate-900 font-medium text-sm transition no-underline">
                Entrar
              </a>
              <a
                href={`${APP_URL}/register`}
                onClick={() => trackEvent('nav_cta_click')}
                className="bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition shadow-sm shadow-emerald-200 no-underline"
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
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-emerald-500/10 blur-[140px] rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/8 blur-[120px] rounded-full translate-y-1/3 -translate-x-1/4" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-0 sm:pt-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                <BadgeCheck className="w-4 h-4 flex-shrink-0" />
                7 dias grátis · Sem cartão de crédito
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.07] mb-6">
                Pare de perder vendas<br />
                <span className="text-emerald-400">na sua açaíteria</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-lg">
                Controle estoque, vendas e pedidos em um só lugar, sem complicação.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  'Controle total do seu negócio',
                  'Mais agilidade no atendimento',
                  'Menos erros e prejuízos',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-200 text-base">
                    <span className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href={`${APP_URL}/register`}
                  onClick={() => { trackEvent('cta_hero_click'); trackEvent('start_trial_click'); }}
                  className="group bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-emerald-500/30 flex items-center justify-center gap-3 no-underline"
                >
                  👉 Testar grátis agora
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <button
                  onClick={() => { trackEvent('cta_hero_demo'); document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="group bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all flex items-center justify-center gap-2"
                >
                  Ver como funciona
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-5 text-sm text-slate-400">
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-400" />Sem cartão</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-400" />Cancele quando quiser</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-400" />Suporte em português</span>
              </div>
            </div>

            {/* Right: dashboard mockup */}
            <div className="relative pb-0 pt-8 lg:pt-0 flex items-end">
              <div className="w-full relative">
                {/* Glow */}
                <div className="absolute -inset-4 bg-emerald-500/10 blur-3xl rounded-3xl" />
                <div className="relative bg-slate-800/70 backdrop-blur-sm rounded-t-2xl border border-slate-700/60 border-b-0 shadow-2xl overflow-hidden">
                  {/* Window bar */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/50 bg-slate-900/50">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs text-slate-400 font-medium">VendaFlow · Dashboard</span>
                  </div>

                  <div className="p-5 space-y-4">
                    {/* Top stats row */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl p-4 col-span-1">
                        <p className="text-xs text-emerald-100 mb-0.5">Hoje</p>
                        <p className="text-2xl font-extrabold text-white">R$ 2.847</p>
                        <p className="text-xs text-emerald-200 mt-0.5">+18% ontem</p>
                      </div>
                      <div className="bg-slate-700/50 rounded-xl p-4">
                        <p className="text-xs text-slate-400 mb-0.5">Pedidos</p>
                        <p className="text-2xl font-bold text-white">87</p>
                      </div>
                      <div className="bg-slate-700/50 rounded-xl p-4">
                        <p className="text-xs text-slate-400 mb-0.5">Ticket médio</p>
                        <p className="text-2xl font-bold text-white">R$ 32</p>
                      </div>
                    </div>

                    {/* Best sellers */}
                    <div className="bg-slate-900/60 rounded-xl p-4">
                      <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-3">Mais vendidos hoje</p>
                      <div className="space-y-2.5">
                        {[
                          { name: 'Açaí 500ml', qty: 45, pct: 92 },
                          { name: 'Açaí 300ml', qty: 32, pct: 65 },
                          { name: 'Suco Natural', qty: 21, pct: 43 },
                        ].map((p) => (
                          <div key={p.name}>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-slate-200">{p.name}</span>
                              <span className="text-slate-400">{p.qty} vendidos</span>
                            </div>
                            <div className="h-1.5 bg-slate-700 rounded-full">
                              <div className="h-1.5 bg-emerald-500 rounded-full transition-all" style={{ width: `${p.pct}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Caixa status */}
                    <div className="flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold px-3 py-2.5 rounded-lg">
                      <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      Caixa aberto · Saldo R$ 2.727,50
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF BAR ── */}
      <section className="bg-slate-50 border-y border-slate-200 py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-slate-600 text-sm font-medium">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span>Mais de 500 lojas usando</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-300" />
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {['https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg', 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg', 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'].map((src, i) => (
                  <img key={i} src={`${src}?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2`} alt="" className="w-7 h-7 rounded-full object-cover border-2 border-white" />
                ))}
              </div>
              <span>Avaliação 5 estrelas</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-300" />
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span>7 dias grátis, sem cartão</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-300" />
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span>Pronto em menos de 5 minutos</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. DOR (Pain Points) ── */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-red-50 text-red-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-5 border border-red-100">
              Você reconhece algum desses problemas?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Seu negócio pode estar
              <span className="text-red-500"> perdendo dinheiro agora</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Comércios sem gestão perdem em média 20% do faturamento por falhas que poderiam ser evitadas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {painPoints.map((p, i) => (
              <div key={i} className="group bg-slate-50 border border-slate-200 hover:border-red-200 hover:bg-red-50/40 rounded-2xl p-6 transition-all">
                <div className="w-11 h-11 bg-red-100 text-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-200 transition">
                  {p.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2 leading-snug">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-700 px-6 py-3.5 rounded-2xl font-semibold text-sm">
              <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              O VendaFlow resolve todos esses problemas em um só lugar
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. COMO FUNCIONA (Screenshots) ── */}
      <section id="como-funciona" className="py-20 sm:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5 border border-emerald-100">
              Veja na prática
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Veja como funciona na prática
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Tudo pensado para ser simples, rápido e visual. Sem precisar de treinamento.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {screenshots.map((s, i) => (
              <div key={i} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`h-44 bg-gradient-to-br ${s.color} relative overflow-hidden`}>
                  <img
                    src={s.img}
                    alt={s.label}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="text-white font-bold text-sm">{s.label}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-slate-900 mb-1">{s.label}</h3>
                  <p className="text-slate-500 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Inline stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 bg-white border border-slate-200 rounded-2xl p-8">
            {[
              { value: '3x', label: 'mais rápido no atendimento' },
              { value: '7 dias', label: 'grátis para testar' },
              { value: '100%', label: 'no navegador, sem instalar' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl sm:text-4xl font-extrabold text-emerald-600 mb-1">{s.value}</p>
                <p className="text-sm text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. BENEFÍCIOS ── */}
      <section id="beneficios" className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5 border border-emerald-100">
              Por que usar o sistema?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Por que usar o VendaFlow?
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Cada recurso foi pensado para donos de comércio local que querem vender mais e se preocupar menos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="group flex gap-4 bg-slate-50 border border-slate-200 hover:border-emerald-200 hover:bg-emerald-50/30 rounded-2xl p-6 transition-all">
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
            <a
              href={`${APP_URL}/register`}
              onClick={() => { trackEvent('cta_benefits_click'); trackEvent('start_trial_click'); }}
              className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition shadow-lg shadow-emerald-200 no-underline"
            >
              👉 Testar grátis agora
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-sm text-slate-500 mt-3">7 dias grátis · Sem cartão de crédito · Cancele quando quiser</p>
          </div>
        </div>
      </section>

      {/* ── 5. QUEBRA DE OBJEÇÃO ── */}
      <section className="py-20 sm:py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.1),transparent_65%)]" aria-hidden />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                Feito para quem quer simplicidade
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight">
                Você não precisa entender<br />
                <span className="text-emerald-400">de tecnologia</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                O sistema foi feito para ser simples e direto ao ponto. Se você usa WhatsApp, você consegue usar o VendaFlow. Sem manual, sem curso, sem dor de cabeça.
              </p>
              <ul className="space-y-4">
                {[
                  'Interface pensada para quem está no balcão',
                  'Nenhum treinamento necessário',
                  'Suporte em português sempre que precisar',
                  'Pronto para usar em menos de 5 minutos',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual: simple UI card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-500/10 blur-3xl rounded-3xl" />
              <div className="relative bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 bg-emerald-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Nova venda</p>
                    <p className="text-slate-400 text-xs">Toque para registrar</p>
                  </div>
                </div>
                {[
                  { name: 'Açaí 500ml', price: 'R$ 18,00', qty: 2 },
                  { name: 'Suco de Laranja', price: 'R$ 9,00', qty: 1 },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between bg-slate-900/60 rounded-xl px-4 py-3">
                    <div>
                      <p className="text-white text-sm font-medium">{item.name}</p>
                      <p className="text-slate-400 text-xs">Qtd: {item.qty}</p>
                    </div>
                    <p className="text-emerald-400 font-bold text-sm">{item.price}</p>
                  </div>
                ))}
                <div className="flex justify-between items-center bg-emerald-500 rounded-xl px-5 py-3.5">
                  <span className="text-white font-bold">Total</span>
                  <span className="text-white font-extrabold text-lg">R$ 45,00</span>
                </div>
                <button className="w-full bg-white text-slate-900 font-bold rounded-xl py-3 text-sm hover:bg-slate-100 transition">
                  Finalizar venda
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. PROVA SOCIAL ── */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />)}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Donos de lojas já estão usando
            </h2>
            <p className="text-slate-600 text-lg max-w-xl mx-auto">
              Açaiterias, lanchonetes e pequenos comércios transformando a operação com o VendaFlow.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 hover:border-emerald-200 hover:shadow-lg rounded-2xl p-7 transition-all">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-slate-700 leading-relaxed mb-6 text-base">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.photo} alt={t.name} className="w-11 h-11 rounded-full object-cover ring-2 ring-emerald-100 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-slate-500 text-xs flex items-center gap-1">
                      <MapPin className="w-3 h-3" />{t.city} · {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. OFERTA (Trial) ── */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-emerald-600 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" aria-hidden />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/3" aria-hidden />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <Shield className="w-4 h-4" />
            Sem compromisso. Cancele quando quiser.
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
            Teste grátis por 7 dias
          </h2>
          <p className="text-xl text-emerald-100 mb-10 leading-relaxed">
            Sem compromisso. Comece agora e veja na prática como o VendaFlow vai transformar a operação do seu negócio.
          </p>
          <a
            href={`${APP_URL}/register`}
            onClick={() => { trackEvent('cta_offer_click'); trackEvent('start_trial_click'); }}
            className="inline-flex items-center gap-3 bg-white text-emerald-700 hover:bg-emerald-50 active:bg-emerald-100 px-10 py-5 rounded-2xl font-extrabold text-xl transition-all shadow-2xl no-underline group"
          >
            👉 Criar conta grátis
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="flex flex-wrap items-center justify-center gap-5 mt-8 text-sm text-emerald-100">
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4" />7 dias grátis</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4" />Sem cartão de crédito</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4" />Pronto em 5 minutos</span>
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
              Escolha o plano certo para você
            </h2>
            <p className="text-slate-600 text-lg">
              Todos os planos com 7 dias grátis. Sem cartão. Cancele quando quiser.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-3xl flex flex-col transition-all ${plan.popular ? 'bg-gradient-to-b from-slate-900 to-slate-950 text-white shadow-2xl shadow-slate-900/30 md:scale-[1.04] z-10' : 'bg-white border border-slate-200 shadow-sm'}`}
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
                    onClick={() => plan.events.forEach((e) => trackEvent(e))}
                    className={`block w-full py-4 rounded-2xl font-bold text-center text-base transition no-underline mb-6 ${plan.popular ? 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/30' : 'bg-slate-100 hover:bg-emerald-50 hover:border-emerald-300 text-slate-900 border border-slate-200'}`}
                  >
                    {plan.buttonText}
                  </a>
                  <ul className="space-y-3.5">
                    {plan.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle className={`w-4.5 h-4.5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-emerald-400' : 'text-emerald-500'}`} style={{ width: 18, height: 18 }} />
                        <span className={`text-sm ${plan.popular ? 'text-slate-300' : 'text-slate-600'}`}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
              <Shield className="w-4 h-4 text-emerald-500" />
              Todos os planos incluem 7 dias grátis sem cobrança
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Perguntas frequentes</h2>
            <p className="text-slate-600 text-lg">Tudo que você precisa saber antes de começar</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 hover:border-emerald-200 rounded-2xl overflow-hidden transition">
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between"
                >
                  <span className="font-semibold text-slate-900 pr-4">{faq.q}</span>
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
        </div>
      </section>

      {/* ── 9. CTA FINAL ── */}
      <section className="py-24 sm:py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.14),transparent_65%)]" aria-hidden />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" aria-hidden />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <Zap className="w-4 h-4 fill-emerald-300" />
            Comece hoje, sem risco nenhum
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Comece agora a organizar<br />
            <span className="text-emerald-400">sua loja</span>
          </h2>

          <p className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Pare de perder dinheiro por falta de controle. Crie sua conta grátis agora e veja a diferença na sua operação em minutos.
          </p>

          <a
            href={`${APP_URL}/register`}
            onClick={() => { trackEvent('cta_final_click'); trackEvent('start_trial_click'); }}
            className="group inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-white px-12 py-5 rounded-2xl font-extrabold text-xl transition-all shadow-2xl shadow-emerald-500/25 no-underline mb-10"
          >
            👉 Criar minha conta grátis
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" />7 dias grátis</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" />Sem cartão de crédito</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" />Cancele quando quiser</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" />Suporte em português</span>
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
    </div>
  );
}
