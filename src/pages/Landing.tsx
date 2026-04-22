import {
  Store,
  ChartBar as BarChart3,
  Package,
  DollarSign,
  Smartphone,
  Check,
  X,
  TrendingDown,
  Clock,
  CircleAlert as AlertCircle,
  Zap,
  Shield,
  Award,
  ChevronDown,
  ArrowRight,
  Users,
  BadgeCheck,
} from 'lucide-react';
import { useState } from 'react';

const APP_URL = 'https://app.acaigestor.com.br';

export default function Landing() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

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
      icon: <TrendingDown className="w-6 h-6" />,
      title: 'Fecha o dia sem saber se lucrou',
      description: 'O dinheiro entra, mas você não sabe o que realmente sobrou no fim do dia.',
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Produtos acabam sem aviso',
      description: 'Você perde vendas porque o estoque sai do controle e ninguém percebe a tempo.',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Atendimento lento faz cliente desistir',
      description: 'Fila, demora e confusão no balcão acabam afastando quem já estava pronto para comprar.',
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: 'Erros no caixa viram prejuízo',
      description: 'Quando o caixa não fecha, você perde tempo, dinheiro e confiança na operação.',
    },
    {
      icon: <X className="w-6 h-6" />,
      title: 'Falta controle do negócio',
      description: 'Sem dados claros, você toma decisões no escuro e cresce com insegurança.',
    },
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Venda mais rápido no PDV',
      description: 'Atenda em segundos, reduza filas e aumente suas vendas nos horários de maior movimento.',
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Caixa sob controle de verdade',
      description: 'Saiba exatamente quanto entrou, saiu e quanto realmente sobrou no fechamento do dia.',
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Descubra o que dá mais lucro',
      description: 'Veja quais produtos vendem mais, quais performam pior e decida com base em dados.',
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Estoque sem bagunça',
      description: 'Organize categorias, produtos e movimentações para nunca mais vender no improviso.',
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Use onde estiver',
      description: 'Celular, tablet ou computador. O sistema acompanha sua operação em qualquer lugar.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Equipe mais alinhada',
      description: 'Dê mais agilidade ao atendimento e mais clareza para quem trabalha com você.',
    },
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      title: 'Venda também no online',
      description: 'Divulgue seu cardápio e receba pedidos pela internet com mais praticidade no plano Pro.',
    },
  ];

  const systemDemo = [
    {
      title: 'PDV Rápido',
      description: 'Venda sem travar fila e atenda em poucos toques',
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Dashboard Inteligente',
      description: 'Veja vendas, ticket médio e desempenho em tempo real',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Categorias e Produtos',
      description: 'Encontre tudo rápido e mantenha sua operação organizada',
      color: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Controle de Caixa',
      description: 'Acompanhe cada entrada e saída sem perder o controle',
      color: 'from-orange-500 to-red-600',
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
      bonus: true,
      subtitle: 'Ideal para quem quer vender mais, organizar a operação e começar no online',
      buttonText: 'Começar grátis agora',
      trackEvents: ['plan_pro_click', 'start_trial_click'],
      features: [
        'Tudo do Starter',
        'PDV completo e rápido',
        'Controle de caixa profissional',
        'Categorias e gestão avançada',
        'Relatórios detalhados',
        'Controle de estoque',
        'Múltiplos usuários (até 3)',
        'Cardápio online incluído',
        'Venda online incluída',
        'Suporte prioritário',
      ],
    },
    {
      name: 'Premium',
      price: 'R$ 149,90',
      subtitle: 'Para operações maiores e mais completas',
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
        'Atendimento prioritário',
      ],
    },
  ];

  const testimonials = [
    {
      name: 'João, dono de lanchonete',
      text: 'Antes eu fechava o dia sem saber se tinha lucro. Agora acompanho tudo em minutos.',
    },
    {
      name: 'Mariana, dona de açaiteria',
      text: 'O atendimento ficou mais rápido e eu parei de perder venda por falta de controle.',
    },
    {
      name: 'Carlos, cafeteria local',
      text: 'Finalmente consegui organizar caixa, produtos e operação em um lugar só.',
    },
  ];

  const faqs = [
    {
      question: 'Preciso instalar algo?',
      answer:
        'Não. O VendaFlow funciona direto no navegador. Você acessa, entra na conta e começa a usar sem instalação complicada.',
    },
    {
      question: 'Funciona no celular?',
      answer:
        'Sim. O sistema foi pensado para funcionar bem em celular, tablet e computador, acompanhando a rotina real do seu negócio.',
    },
    {
      question: 'Preciso entender de sistema para usar?',
      answer:
        'Não. O VendaFlow foi feito para ser simples e direto, mesmo para quem nunca usou um sistema de gestão antes.',
    },
    {
      question: 'Posso cancelar quando quiser?',
      answer:
        'Sim. Sem burocracia, sem contrato preso. Você pode cancelar quando quiser diretamente pelo painel.',
    },
    {
      question: 'Tem suporte?',
      answer:
        'Sim. Todos os planos incluem suporte. Os planos superiores têm prioridade de atendimento.',
    },
    {
      question: 'Serve para quais tipos de negócio?',
      answer:
        'Açaiterias, lanchonetes, cafeterias, delivery, conveniência e outros comércios que precisam vender com mais controle e rapidez.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/95 backdrop-blur sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-2 rounded-xl shadow-sm">
                <Store className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">VendaFlow</span>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href={`${APP_URL}/login`}
                className="text-gray-700 hover:text-gray-900 font-medium transition hidden sm:block no-underline"
              >
                Entrar
              </a>
              <a
                href={`${APP_URL}/register`}
                onClick={() => trackEvent('start_trial_click')}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 sm:px-6 py-2.5 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition shadow-md no-underline"
              >
                Começar grátis
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-white pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-72 h-72 bg-green-200/30 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-200/30 blur-3xl rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-14 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white border border-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm mb-6">
                <BadgeCheck className="w-4 h-4" />
                7 dias grátis para testar sem risco
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.05]">
                Pare de perder dinheiro no seu negócio —
                <span className="block mt-2 bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">
                  controle vendas, estoque e caixa em um só lugar
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Venda mais, atenda mais rápido e saiba exatamente o que acontece no seu negócio, mesmo sem experiência com sistemas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href={`${APP_URL}/register`}
                  onClick={() => {
                    trackEvent('cta_hero_click');
                    trackEvent('start_trial_click');
                  }}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-green-700 transition shadow-lg flex items-center justify-center group no-underline"
                >
                  Começar grátis agora
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  onClick={() => {
                    trackEvent('cta_view_plans');
                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition border border-gray-200 shadow-sm"
                >
                  Ver planos
                </button>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-5 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  7 dias grátis
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  Sem cartão
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  Cancele quando quiser
                </span>
              </div>
            </div>

            {/* Visual demo */}
            <div className="mt-12 lg:mt-0">
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-200">
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-2 text-sm text-gray-600 font-medium">VendaFlow Dashboard</span>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-2xl text-white shadow-sm">
                      <div className="text-sm opacity-90 mb-1">Vendas Hoje</div>
                      <div className="text-3xl font-bold">R$ 2.847,50</div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-50 p-3 rounded-xl border border-gray-200">
                        <div className="text-xs text-gray-600 mb-1">Produtos vendidos</div>
                        <div className="text-xl font-bold text-gray-900">127</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-xl border border-gray-200">
                        <div className="text-xs text-gray-600 mb-1">Ticket médio</div>
                        <div className="text-xl font-bold text-gray-900">R$ 32,40</div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-600">Açaí 500ml</span>
                        <span className="font-semibold text-gray-900">45 vendas</span>
                      </div>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-600">X-Burger</span>
                        <span className="font-semibold text-gray-900">32 vendas</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Suco Natural</span>
                        <span className="font-semibold text-gray-900">28 vendas</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-2xl shadow-xl">
                  <div className="text-xs opacity-90 mb-1">PDV Ativo</div>
                  <div className="text-2xl font-bold">Pronto para vender</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Seu negócio pode estar perdendo dinheiro sem você perceber
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Veja alguns sinais que travam vendas, bagunçam a operação e diminuem seu lucro.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {painPoints.map((pain, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-red-100 hover:border-red-200 hover:shadow-lg transition group"
              >
                <div className="bg-red-50 text-red-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-100 transition">
                  {pain.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">{pain.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{pain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Com o VendaFlow, tudo fica mais simples
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Menos improviso, mais agilidade, mais controle e mais clareza para tomar decisões.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-lg transition group bg-white"
              >
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Veja como é simples usar
            </h2>
            <p className="text-lg sm:text-xl text-gray-300">
              Tudo que você precisa para vender mais com rapidez e sem complicação.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemDemo.map((demo, index) => (
              <div key={index} className="group cursor-pointer">
                <div
                  className={`bg-gradient-to-br ${demo.color} p-8 rounded-2xl shadow-lg group-hover:scale-[1.03] transition-transform h-48 flex flex-col justify-between`}
                >
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{demo.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">{demo.description}</p>
                  </div>
                  <div className="flex justify-end">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 border border-green-200 px-4 py-2 rounded-full text-sm font-semibold text-center">
              <BadgeCheck className="w-4 h-4" />
              No plano Pro, você ganha cardápio online e venda online como diferencial
            </div>
          </div>

          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Escolha o plano ideal para o seu momento
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Teste grátis por 7 dias. Sem cartão de crédito. Sem compromisso.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8 items-stretch">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl shadow-xl p-8 pt-12 relative transition-all flex flex-col ${
                  plan.popular
                    ? 'border-2 border-green-500 lg:scale-[1.03]'
                    : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
  <>
    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
      🔥 MAIS ESCOLHIDO
    </div>

    {plan.bonus && (
      <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white text-green-700 border border-green-200 px-4 py-1 rounded-full text-xs font-semibold shadow-sm">
        Inclui online
      </div>
    )}
  </>
)}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 min-h-[20px]">{plan.subtitle}</p>
                  <div className="mb-2">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 text-lg">/mês</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`${APP_URL}/register`}
                  onClick={() => {
                    plan.trackEvents.forEach((evt) => trackEvent(evt));
                  }}
                  className={`block w-full py-4 rounded-xl font-semibold transition text-lg shadow-md text-center no-underline ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-green-200'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.buttonText}
                </a>

                {plan.popular && (
                  <p className="text-center text-sm text-green-700 font-medium mt-3">
                    Venda no balcão e também no online no mesmo plano.
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 text-base sm:text-lg">
              <Shield className="w-5 h-5 inline mr-2 text-green-600" />
              Todos os planos incluem 7 dias grátis • Cancele quando quiser
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials / social proof */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <Award className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Quem usa, sente a diferença no dia a dia
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Negócios locais usam o VendaFlow para vender com mais velocidade e mais controle.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {testimonials.map((item, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-1 mb-4 text-green-600">
                  <Check className="w-4 h-4" />
                  <Check className="w-4 h-4" />
                  <Check className="w-4 h-4" />
                  <Check className="w-4 h-4" />
                  <Check className="w-4 h-4" />
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">“{item.text}”</p>
                <p className="text-sm font-semibold text-gray-900">{item.name}</p>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <div className="text-4xl font-bold text-green-600 mb-2">Simples</div>
              <p className="text-gray-600">Interface intuitiva para quem quer agilidade sem complicação</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <div className="text-4xl font-bold text-green-600 mb-2">Rápido</div>
              <p className="text-gray-600">Venda em segundos e reduza filas nos momentos de pico</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <div className="text-4xl font-bold text-green-600 mb-2">Completo</div>
              <p className="text-gray-600">Tudo o que você precisa para vender e controlar melhor</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Perguntas frequentes
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Tudo que você precisa saber antes de começar
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-gray-900 text-lg pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openFAQ === index && (
                  <div className="px-6 pb-5 text-gray-600 border-t border-gray-100 pt-4 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-24 bg-gradient-to-r from-green-500 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-0 right-10 w-64 h-64 rounded-full bg-white blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Comece hoje e pare de perder dinheiro no seu negócio
          </h2>
          <p className="text-xl sm:text-2xl text-green-50 mb-10 max-w-2xl mx-auto">
            Teste grátis por 7 dias e veja como é mais fácil vender com agilidade, controle e clareza.
          </p>

          <a
            href={`${APP_URL}/register`}
            onClick={() => {
              trackEvent('cta_final_click');
              trackEvent('start_trial_click');
            }}
            className="bg-white text-green-700 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-gray-50 transition shadow-2xl inline-flex items-center group no-underline"
          >
            Começar grátis agora
            <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-green-50 text-sm">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              7 dias grátis
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              Sem cartão de crédito
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              Cancele quando quiser
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-2 rounded-xl">
                <Store className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">VendaFlow</span>
            </div>

            <p className="text-gray-400 mb-6 max-w-md">
              Mais controle, mais agilidade e mais clareza para vender melhor todos os dias.
            </p>

            <div className="flex gap-6 mb-6 text-sm">
              <a href={`${APP_URL}/login`} className="text-gray-400 hover:text-white transition no-underline">
                Entrar
              </a>
              <a href={`${APP_URL}/register`} className="text-gray-400 hover:text-white transition no-underline">
                Criar conta
              </a>
              <button
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-white transition"
              >
                Planos
              </button>
            </div>

            <p className="text-gray-500 text-sm">
              © 2024 VendaFlow. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
