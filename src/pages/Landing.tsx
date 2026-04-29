import { Store, ChartBar as BarChart3, Package, DollarSign, Smartphone, Check, X, TrendingDown, Clock, CircleAlert as AlertCircle, Zap, Shield, Award, ChevronDown, ArrowRight, Users, BadgeCheck, Star, Play, CircleCheck as CheckCircle, TrendingUp, Layers } from 'lucide-react';
import { useState } from 'react';

const APP_URL = 'https://app.acaigestor.com.br';

export default function Landing() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const trackEvent = (eventName: string) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      if (typeof w !== 'undefined' && w.plausible) {
        w.plausible(eventName);
      }
    } catch {
      // Plausible not loaded yet
    }
  };

  const painPoints = [
    {
      icon: <TrendingDown className="w-7 h-7" />,
      title: 'Fecha o dia sem saber se lucrou',
      description: 'O dinheiro entra, mas você não sabe o que realmente sobrou.',
    },
    {
      icon: <Package className="w-7 h-7" />,
      title: 'Produtos acabam sem aviso',
      description: 'Você perde vendas porque o estoque sai do controle.',
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: 'Fila longa faz cliente desistir',
      description: 'Demora no balcão afasta quem estava pronto para comprar.',
    },
    {
      icon: <AlertCircle className="w-7 h-7" />,
      title: 'Erros no caixa viram prejuízo',
      description: 'Quando o caixa não fecha, você perde tempo e dinheiro.',
    },
    {
      icon: <X className="w-7 h-7" />,
      title: 'Decisões no escuro',
      description: 'Sem dados claros, você cresce com insegurança e no improviso.',
    },
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'PDV Ultrarrápido',
      description: 'Atenda em segundos, reduza filas e venda mais nos horários de pico.',
      highlight: false,
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Caixa sob controle',
      description: 'Saiba exatamente quanto entrou, saiu e quanto sobrou no fechamento.',
      highlight: false,
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Relatórios que mostram o lucro',
      description: 'Veja quais produtos vendem mais e decida com base em dados reais.',
      highlight: false,
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Estoque organizado',
      description: 'Nunca mais venda no improviso. Controle categorias e movimentações.',
      highlight: false,
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Acesse de qualquer lugar',
      description: 'Celular, tablet ou computador. Sua operação na palma da mão.',
      highlight: false,
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Venda também no online',
      description: 'Cardápio e pedidos online incluídos no plano Pro.',
      highlight: true,
    },
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'PDV Rápido',
      description: 'Venda sem travar fila e atenda em poucos toques.',
      color: 'bg-emerald-500',
      stat: '3x mais rápido',
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Dashboard em Tempo Real',
      description: 'Vendas, ticket médio e desempenho na sua tela.',
      color: 'bg-sky-500',
      stat: 'Atualizado ao vivo',
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Gestão de Produtos',
      description: 'Categorias, variações e controle completo de itens.',
      color: 'bg-teal-500',
      stat: 'Ilimitado no Pro',
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Controle de Caixa',
      description: 'Acompanhe cada entrada e saída sem perder o controle.',
      color: 'bg-green-600',
      stat: '100% auditável',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Cardápio Online',
      description: 'Divulgue produtos e receba pedidos pela internet.',
      color: 'bg-cyan-500',
      stat: 'Incluso no Pro',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Múltiplos Usuários',
      description: 'Adicione sua equipe com permissões por função.',
      color: 'bg-emerald-700',
      stat: 'Até 3 no Pro',
    },
  ];

  const testimonials = [
    {
      name: 'João Alves',
      role: 'Dono de lanchonete',
      text: 'Antes eu fechava o dia sem saber se tinha lucro. Agora acompanho tudo em minutos e tomo decisões com confiança.',
      stars: 5,
      avatar: 'JA',
    },
    {
      name: 'Mariana Costa',
      role: 'Dona de açaiteria',
      text: 'O atendimento ficou muito mais rápido e parei de perder venda por falta de controle. Recomendo demais!',
      stars: 5,
      avatar: 'MC',
    },
    {
      name: 'Carlos Mendes',
      role: 'Cafeteria local',
      text: 'Finalmente consegui organizar caixa, produtos e operação em um lugar só. O sistema paga o custo dele rápido.',
      stars: 5,
      avatar: 'CM',
    },
  ];

  const plans = [
    {
      name: 'Starter',
      price: 'R$ 39,90',
      subtitle: 'Para começar com organização',
      buttonText: 'Começar grátis',
      trackEvents: ['plan_starter_click', 'start_trial_click'],
      features: [
        'Cadastro de produtos',
        'Controle básico de vendas',
        'Relatório diário simples',
        'Acesso mobile e desktop',
        'Suporte por email',
      ],
    },
    {
      name: 'Pro',
      price: 'R$ 79,90',
      popular: true,
      subtitle: 'Para quem quer vender mais, organizar e crescer',
      buttonText: 'Quero o Pro — 7 dias grátis',
      trackEvents: ['plan_pro_click', 'start_trial_click'],
      features: [
        'Tudo do Starter',
        'PDV completo e ultrarrápido',
        'Controle de caixa profissional',
        'Categorias e gestão avançada',
        'Relatórios detalhados de lucro',
        'Controle de estoque completo',
        'Múltiplos usuários (até 3)',
        'Cardápio online incluído',
        'Venda online incluída',
        'Suporte prioritário',
      ],
    },
    {
      name: 'Premium',
      price: 'R$ 149,90',
      subtitle: 'Para operações maiores e completas',
      buttonText: 'Falar com especialista',
      trackEvents: ['plan_premium_click'],
      features: [
        'Tudo do Pro',
        'Usuários ilimitados',
        'Comandas e mesas',
        'Fichas técnicas de produtos',
        'Gestão de clientes',
        'Análises avançadas',
        'API para integrações',
        'Atendimento prioritário VIP',
      ],
    },
  ];

  const faqs = [
    {
      question: 'Preciso instalar algo?',
      answer: 'Não. O VendaFlow funciona direto no navegador. Você acessa, entra na conta e começa a usar sem instalação complicada.',
    },
    {
      question: 'Funciona no celular?',
      answer: 'Sim. O sistema foi pensado para funcionar bem em celular, tablet e computador, acompanhando a rotina real do seu negócio.',
    },
    {
      question: 'Preciso entender de sistema para usar?',
      answer: 'Não. O VendaFlow foi feito para ser simples e direto, mesmo para quem nunca usou um sistema de gestão antes.',
    },
    {
      question: 'Posso cancelar quando quiser?',
      answer: 'Sim. Sem burocracia, sem contrato preso. Você pode cancelar quando quiser diretamente pelo painel.',
    },
    {
      question: 'Tem suporte?',
      answer: 'Sim. Todos os planos incluem suporte. Os planos superiores têm prioridade de atendimento.',
    },
    {
      question: 'Serve para quais tipos de negócio?',
      answer: 'Açaiterias, lanchonetes, cafeterias, delivery, conveniência e outros comércios que precisam vender com mais controle e rapidez.',
    },
  ];

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
              <button onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-slate-900 transition">Demonstração</button>
              <button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-slate-900 transition">Recursos</button>
              <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-slate-900 transition">Planos</button>
            </div>
            <div className="flex items-center gap-3">
              <a href={`${APP_URL}/login`} className="hidden sm:block text-slate-600 hover:text-slate-900 font-medium text-sm transition no-underline">
                Entrar
              </a>
              <a
                href={`${APP_URL}/register`}
                onClick={() => trackEvent('nav_cta_click')}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition shadow-sm shadow-emerald-200 no-underline"
              >
                Começar grátis
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ── 1. HERO ── */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-600/10 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/4"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <BadgeCheck className="w-4 h-4" />
              7 dias grátis · Sem cartão de crédito
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6">
              Seu negócio vendendo
              <br />
              <span className="text-emerald-400">mais e sem bagunça</span>
              <br />
              a partir de hoje.
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              PDV rápido, controle de caixa, estoque e relatórios em um sistema simples que qualquer um usa — sem treinamento, sem complicação.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href={`${APP_URL}/register`}
                onClick={() => { trackEvent('cta_hero_click'); trackEvent('start_trial_click'); }}
                className="group bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-3 no-underline"
              >
                Começar grátis agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => { trackEvent('cta_hero_demo'); document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="group bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all flex items-center justify-center gap-3"
              >
                <Play className="w-5 h-5 fill-white" />
                Ver demonstração
              </button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-slate-400">
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" />Sem cartão de crédito</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" />Cancele quando quiser</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" />Suporte incluso</span>
            </div>
          </div>

          {/* Hero dashboard mockup */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="relative bg-slate-800/60 backdrop-blur rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden">
              {/* Window bar */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-slate-700/50 bg-slate-900/40">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                <span className="ml-3 text-xs text-slate-400 font-medium">VendaFlow — Dashboard</span>
              </div>

              <div className="grid md:grid-cols-3 gap-0 divide-x divide-slate-700/40">
                {/* Left: stats */}
                <div className="p-6 space-y-4">
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Resumo de hoje</p>
                  <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-5 rounded-xl">
                    <p className="text-xs text-emerald-100 mb-1">Vendas totais</p>
                    <p className="text-3xl font-extrabold text-white">R$ 2.847</p>
                    <p className="text-xs text-emerald-200 mt-1">+18% em relação a ontem</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-700/40 rounded-xl p-3">
                      <p className="text-xs text-slate-400 mb-1">Pedidos</p>
                      <p className="text-xl font-bold text-white">87</p>
                    </div>
                    <div className="bg-slate-700/40 rounded-xl p-3">
                      <p className="text-xs text-slate-400 mb-1">Ticket médio</p>
                      <p className="text-xl font-bold text-white">R$ 32</p>
                    </div>
                  </div>
                </div>

                {/* Middle: top products */}
                <div className="p-6">
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-4">Mais vendidos</p>
                  <div className="space-y-3">
                    {[
                      { name: 'Açaí 500ml', qty: 45, pct: 92 },
                      { name: 'X-Burger Duplo', qty: 32, pct: 65 },
                      { name: 'Suco Natural', qty: 28, pct: 57 },
                      { name: 'Açaí 300ml', qty: 21, pct: 43 },
                    ].map((p, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-slate-200">{p.name}</span>
                          <span className="text-slate-400 font-medium">{p.qty}</span>
                        </div>
                        <div className="h-1.5 bg-slate-700 rounded-full">
                          <div className="h-1.5 bg-emerald-500 rounded-full" style={{ width: `${p.pct}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: caixa status */}
                <div className="p-6">
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-4">Caixa</p>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Abertura</span>
                      <span className="text-slate-200 font-medium">R$ 200,00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Entradas</span>
                      <span className="text-emerald-400 font-semibold">+ R$ 2.847,50</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Saídas</span>
                      <span className="text-red-400 font-medium">- R$ 320,00</span>
                    </div>
                    <div className="h-px bg-slate-700 my-1"></div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300 font-semibold">Saldo atual</span>
                      <span className="text-white font-bold text-base">R$ 2.727,50</span>
                    </div>
                    <div className="mt-3 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold px-3 py-2 rounded-lg flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5" />
                      Caixa aberto e operando
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. VIDEO DEMO ── */}
      <section id="demo" className="py-20 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-emerald-100">
              Demonstração
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Veja o VendaFlow em ação
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Em menos de 2 minutos você entende como o sistema transforma a operação do seu negócio.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-950 aspect-video flex items-center justify-center group cursor-pointer"
            onClick={() => setVideoPlaying(true)}>
            {/* Thumbnail overlay */}
            {!videoPlaying && (
              <>
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Demonstração do sistema VendaFlow"
                  className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/40 group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
                  <p className="text-white font-semibold text-lg">Assistir demonstração</p>
                  <span className="text-slate-300 text-sm">2 minutos · Sem cadastro necessário</span>
                </div>
              </>
            )}
            {videoPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-950">
                <p className="text-white text-sm">Configure sua URL de vídeo aqui</p>
              </div>
            )}
          </div>

          {/* Stats below video */}
          <div className="grid grid-cols-3 gap-6 mt-10">
            {[
              { value: '3x', label: 'mais rápido no atendimento' },
              { value: '7 dias', label: 'grátis para testar' },
              { value: '100%', label: 'no navegador, sem instalar' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl sm:text-4xl font-extrabold text-emerald-600">{stat.value}</p>
                <p className="text-sm text-slate-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. DOR DO CLIENTE ── */}
      <section className="py-20 sm:py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.08),transparent_70%)]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="inline-block bg-red-500/20 border border-red-500/30 text-red-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              Reconhece algum desses problemas?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Seu negócio pode estar perdendo dinheiro
              <span className="text-red-400"> agora mesmo</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Esses problemas são comuns em comércios que ainda não têm um sistema de gestão. E cada um deles custa dinheiro.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {painPoints.map((pain, index) => (
              <div key={index} className="group relative bg-slate-900 border border-slate-800 hover:border-red-500/40 rounded-2xl p-6 transition-all hover:shadow-lg hover:shadow-red-500/5">
                <div className="w-12 h-12 bg-red-500/15 text-red-400 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-500/25 transition">
                  {pain.icon}
                </div>
                <h3 className="font-bold text-white mb-2 text-base leading-snug">{pain.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{pain.description}</p>
              </div>
            ))}
          </div>

          {/* Transition line */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 px-6 py-3 rounded-full font-semibold">
              <ArrowRight className="w-5 h-5" />
              Com o VendaFlow, você resolve tudo isso de uma vez
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. SOLUÇÃO COM BENEFÍCIOS ── */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5 border border-emerald-100">
              A solução
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Tudo que você precisa para vender
              <span className="text-emerald-600"> mais e melhor</span>
            </h2>
            <p className="text-slate-600 text-lg">
              O VendaFlow foi feito especialmente para comércios locais que precisam de agilidade no balcão e clareza nos números.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className={`group relative p-7 rounded-2xl border transition-all ${benefit.highlight ? 'bg-emerald-50 border-emerald-200 hover:shadow-lg hover:shadow-emerald-100' : 'bg-slate-50 border-slate-200 hover:border-emerald-200 hover:shadow-lg'}`}>
                {benefit.highlight && (
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    EXCLUSIVO PRO
                  </div>
                )}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 ${benefit.highlight ? 'bg-emerald-500 text-white' : 'bg-emerald-500 text-white'}`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={`${APP_URL}/register`}
              onClick={() => { trackEvent('cta_benefits_click'); trackEvent('start_trial_click'); }}
              className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition shadow-lg shadow-emerald-200 no-underline"
            >
              Começar grátis agora
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-sm text-slate-500 mt-3">7 dias grátis · Sem cartão de crédito</p>
          </div>
        </div>
      </section>

      {/* ── 5. RECURSOS (CARDS) ── */}
      <section id="features" className="py-20 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5 border border-emerald-100">
              Recursos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Um sistema completo para o seu negócio
            </h2>
            <p className="text-slate-600 text-lg">
              Cada recurso foi pensado para economizar seu tempo e aumentar sua receita.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white rounded-2xl border border-slate-200 p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                <div className={`${feature.color} text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-sm`}>
                  {feature.icon}
                </div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
                  <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded-full font-semibold whitespace-nowrap ml-2 flex-shrink-0">
                    {feature.stat}
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. PROVA SOCIAL ── */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <Award className="w-14 h-14 text-emerald-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Quem usa, sente a diferença
            </h2>
            <p className="text-slate-600 text-lg">
              Donos de comércios locais usando o VendaFlow para vender com mais agilidade e controle.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-14">
            {testimonials.map((item, index) => (
              <div key={index} className="bg-slate-50 border border-slate-200 rounded-2xl p-7 hover:shadow-lg hover:border-emerald-200 transition-all">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: item.stars }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-base leading-relaxed mb-6">"{item.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {item.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{item.name}</p>
                    <p className="text-slate-500 text-xs">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-3 gap-6 bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl p-8 sm:p-10 text-white text-center">
            {[
              { value: 'Simples', sub: 'de usar desde o primeiro dia' },
              { value: 'Rápido', sub: 'atendimento sem travar fila' },
              { value: 'Confiável', sub: 'controle total de caixa' },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-2xl sm:text-3xl font-extrabold mb-1">{s.value}</p>
                <p className="text-emerald-100 text-sm">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. PLANOS ── */}
      <section id="pricing" className="py-20 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5 border border-emerald-100">
              Planos e precos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Escolha o plano ideal para o seu momento
            </h2>
            <p className="text-slate-600 text-lg">
              Teste grátis por 7 dias. Sem cartão de crédito. Cancele quando quiser.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl transition-all flex flex-col ${
                  plan.popular
                    ? 'bg-gradient-to-b from-slate-900 to-slate-950 text-white shadow-2xl shadow-slate-900/30 md:scale-[1.04] z-10'
                    : 'bg-white border border-slate-200 shadow-sm'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-5 py-1.5 rounded-full text-xs font-extrabold tracking-wide shadow-lg uppercase">
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
                    onClick={() => plan.trackEvents.forEach((evt) => trackEvent(evt))}
                    className={`block w-full py-4 rounded-2xl font-bold text-center text-base transition no-underline mb-6 ${
                      plan.popular
                        ? 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/30'
                        : 'bg-slate-100 hover:bg-emerald-50 hover:border-emerald-300 text-slate-900 border border-slate-200'
                    }`}
                  >
                    {plan.buttonText}
                  </a>

                  <ul className="space-y-3.5">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className={`w-4.5 h-4.5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-emerald-400' : 'text-emerald-500'}`} style={{ width: '18px', height: '18px' }} />
                        <span className={`text-sm ${plan.popular ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Perguntas frequentes</h2>
            <p className="text-slate-600 text-lg">Tudo que você precisa saber antes de começar</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:border-emerald-200 transition">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between"
                >
                  <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`} />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-200 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CTA FINAL ── */}
      <section className="py-24 sm:py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.12),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <Zap className="w-4 h-4 fill-emerald-300" />
            Comece hoje, sem risco nenhum
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Seu negócio merece
            <br />
            <span className="text-emerald-400">funcionar de verdade.</span>
          </h2>

          <p className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Pare de perder dinheiro por falta de controle. Teste o VendaFlow grátis por 7 dias e veja a diferença na sua operação.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href={`${APP_URL}/register`}
              onClick={() => { trackEvent('cta_final_click'); trackEvent('start_trial_click'); }}
              className="group bg-emerald-500 hover:bg-emerald-400 text-white px-10 py-5 rounded-2xl font-bold text-xl transition shadow-2xl shadow-emerald-500/25 inline-flex items-center justify-center gap-3 no-underline"
            >
              Começar grátis agora
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-slate-400">
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
              <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="text-slate-400 hover:text-white transition">
                Planos
              </button>
            </div>

            <p className="text-slate-500 text-sm">© 2025 VendaFlow. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
