import { useState, useEffect } from 'react';
import {
  ShoppingBag,
  BarChart3,
  Package,
  Users,
  Clock,
  Shield,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Check,
  Star,
  Menu,
  X,
  Zap,
  TrendingUp,
  Smartphone,
} from 'lucide-react';

const APP_URL = 'https://app.acaigestor.com.br';

function trackEvent(name: string, props?: Record<string, string>) {
  try {
    if (typeof window !== 'undefined' && (window as any).plausible) {
      (window as any).plausible(name, { props });
    }
  } catch {
    // Plausible not loaded yet — safe to ignore
  }
}

/* ───────────────────────── Header ───────────────────────── */

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Funcionalidades', href: '#funcionalidades' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Planos', href: '#planos' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="/" className="flex items-center gap-2 no-underline">
            <div className="w-9 h-9 bg-brand-600 rounded-xl flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <span
              className={`text-xl font-bold transition-colors duration-300 ${
                scrolled ? 'text-neutral-900' : 'text-neutral-900'
              }`}
            >
              AcaiGestor
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 no-underline ${
                  scrolled
                    ? 'text-neutral-600 hover:text-neutral-900'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`${APP_URL}/login`}
              onClick={() => trackEvent('click_login', { location: 'header' })}
              className="text-sm font-medium text-neutral-700 hover:text-neutral-900 px-4 py-2 rounded-lg transition-colors no-underline"
            >
              Entrar
            </a>
            <a
              href={`${APP_URL}/register`}
              onClick={() =>
                trackEvent('click_register', { location: 'header' })
              }
              className="text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 px-5 py-2.5 rounded-xl transition-colors no-underline"
            >
              Comecar Gratis
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-neutral-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-50 rounded-lg no-underline"
              >
                {link.label}
              </a>
            ))}
            <hr className="my-3 border-neutral-100" />
            <a
              href={`${APP_URL}/login`}
              className="block px-4 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-50 rounded-lg no-underline"
            >
              Entrar
            </a>
            <a
              href={`${APP_URL}/register`}
              className="block px-4 py-3 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-xl text-center no-underline"
            >
              Comecar Gratis
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ───────────────────────── Hero ───────────────────────── */

function Hero() {
  return (
    <section className="relative pt-28 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-emerald-50" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-100/60 text-brand-700 rounded-full text-sm font-medium mb-8">
            <Zap className="w-4 h-4" />
            Sistema completo para acaiterias
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
            Gestao inteligente{' '}
            <span className="text-brand-600">para sua acaiteria</span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-500 leading-relaxed mb-10 max-w-2xl mx-auto">
            Controle pedidos, estoque, financeiro e equipe em um unico lugar.
            Simples, rapido e feito sob medida para o seu negocio.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`${APP_URL}/register`}
              onClick={() =>
                trackEvent('click_register', { location: 'hero' })
              }
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-2xl text-lg transition-all duration-200 hover:shadow-lg hover:shadow-brand-600/25 no-underline"
            >
              Comecar Gratis
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#como-funciona"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-neutral-50 text-neutral-700 font-semibold rounded-2xl text-lg border border-neutral-200 transition-all duration-200 no-underline"
            >
              Como Funciona
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-neutral-400">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-brand-500" />
              Sem cartao de credito
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-brand-500" />
              Pronto em 2 minutos
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-24 max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-neutral-900/10 border border-neutral-200/50">
            <img
              src="https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
              alt="Dashboard do AcaiGestor"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Features ───────────────────────── */

const features = [
  {
    icon: ShoppingBag,
    title: 'Gestao de Pedidos',
    description:
      'Receba e gerencie pedidos em tempo real. Acompanhe cada etapa do preparo ate a entrega.',
  },
  {
    icon: Package,
    title: 'Controle de Estoque',
    description:
      'Monitore ingredientes e insumos. Alertas automaticos quando o estoque esta baixo.',
  },
  {
    icon: BarChart3,
    title: 'Relatorios Financeiros',
    description:
      'Visualize receitas, despesas e lucro em dashboards claros. Tome decisoes com dados reais.',
  },
  {
    icon: Users,
    title: 'Gestao de Equipe',
    description:
      'Controle turnos, permissoes e produtividade. Cada colaborador com seu nivel de acesso.',
  },
  {
    icon: Clock,
    title: 'Historico Completo',
    description:
      'Todas as operacoes registradas. Consulte vendas, alteracoes e movimentacoes a qualquer momento.',
  },
  {
    icon: Shield,
    title: 'Seguranca Total',
    description:
      'Dados protegidos com criptografia. Backups automaticos e acesso seguro de qualquer lugar.',
  },
];

function Features() {
  return (
    <section id="funcionalidades" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Tudo que voce precisa em um so lugar
          </h2>
          <p className="text-lg text-neutral-500">
            Funcionalidades pensadas para o dia a dia de quem administra uma
            acaiteria.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-8 rounded-2xl border border-neutral-100 hover:border-brand-200 bg-white hover:shadow-lg hover:shadow-brand-100/40 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-brand-50 group-hover:bg-brand-100 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                <f.icon className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {f.title}
              </h3>
              <p className="text-neutral-500 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── How It Works ───────────────────────── */

const steps = [
  {
    number: '01',
    title: 'Crie sua conta',
    description:
      'Cadastre-se gratuitamente em menos de 2 minutos. Sem cartao de credito.',
  },
  {
    number: '02',
    title: 'Configure sua loja',
    description:
      'Adicione seus produtos, precos e personalize o cardapio da sua acaiteria.',
  },
  {
    number: '03',
    title: 'Comece a vender',
    description:
      'Receba pedidos, controle o estoque e acompanhe tudo pelo painel em tempo real.',
  },
];

function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 lg:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Comece em 3 passos simples
          </h2>
          <p className="text-lg text-neutral-500">
            Nao precisa de conhecimento tecnico. Configure tudo em minutos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px border-t-2 border-dashed border-neutral-300" />
              )}
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-brand-600 text-white text-2xl font-bold rounded-2xl mb-6 shadow-lg shadow-brand-600/20">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {step.title}
              </h3>
              <p className="text-neutral-500 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Pricing ───────────────────────── */

const plans = [
  {
    name: 'Starter',
    price: 'Gratis',
    period: '',
    description: 'Para quem esta comecando e quer testar o sistema.',
    cta: 'Comecar Gratis',
    featured: false,
    features: [
      'Ate 50 pedidos/mes',
      '1 usuario',
      'Controle basico de estoque',
      'Relatorio mensal',
      'Suporte por email',
    ],
  },
  {
    name: 'Profissional',
    price: 'R$ 79',
    period: '/mes',
    description: 'Para acaiterias em crescimento que precisam de mais controle.',
    cta: 'Testar por 7 dias',
    featured: true,
    features: [
      'Pedidos ilimitados',
      'Ate 5 usuarios',
      'Estoque completo com alertas',
      'Relatorios em tempo real',
      'Gestao de equipe',
      'Suporte prioritario',
    ],
  },
  {
    name: 'Empresarial',
    price: 'R$ 149',
    period: '/mes',
    description: 'Para operacoes maiores com multiplas unidades.',
    cta: 'Falar com Vendas',
    featured: false,
    features: [
      'Tudo do Profissional',
      'Usuarios ilimitados',
      'Multi-lojas',
      'API de integracao',
      'Relatorios avancados',
      'Gerente de conta dedicado',
    ],
  },
];

function Pricing() {
  return (
    <section id="planos" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Planos que cabem no seu bolso
          </h2>
          <p className="text-lg text-neutral-500">
            Comece gratis e escale conforme sua acaiteria cresce.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.featured
                  ? 'bg-neutral-900 text-white shadow-2xl shadow-neutral-900/20 scale-105'
                  : 'bg-white border border-neutral-200 hover:shadow-lg'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-500 text-white text-xs font-semibold rounded-full">
                  Mais Popular
                </div>
              )}

              <h3
                className={`text-lg font-semibold mb-2 ${
                  plan.featured ? 'text-white' : 'text-neutral-900'
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mb-6 ${
                  plan.featured ? 'text-neutral-400' : 'text-neutral-500'
                }`}
              >
                {plan.description}
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <span
                  className={`text-4xl font-bold ${
                    plan.featured ? 'text-white' : 'text-neutral-900'
                  }`}
                >
                  {plan.price}
                </span>
                {plan.period && (
                  <span
                    className={`text-sm ${
                      plan.featured ? 'text-neutral-400' : 'text-neutral-500'
                    }`}
                  >
                    {plan.period}
                  </span>
                )}
              </div>

              <a
                href={`${APP_URL}/register`}
                onClick={() =>
                  trackEvent('click_register', {
                    location: 'pricing',
                    plan: plan.name,
                  })
                }
                className={`block w-full py-3 px-6 rounded-xl text-center font-semibold text-sm transition-all duration-200 no-underline mb-8 ${
                  plan.featured
                    ? 'bg-brand-500 hover:bg-brand-600 text-white'
                    : 'bg-neutral-900 hover:bg-neutral-800 text-white'
                }`}
              >
                {plan.cta}
              </a>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 shrink-0 mt-0.5 ${
                        plan.featured ? 'text-brand-400' : 'text-brand-500'
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.featured ? 'text-neutral-300' : 'text-neutral-600'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Testimonials ───────────────────────── */

const testimonials = [
  {
    name: 'Carlos Silva',
    role: 'Dono da Acai Mania',
    text: 'Antes eu controlava tudo no caderno. Com o AcaiGestor, reduzi o desperdicio de estoque em 30% e consigo ver meu lucro real todo dia.',
    stars: 5,
  },
  {
    name: 'Ana Paula Costa',
    role: 'Gerente, Acai Premium',
    text: 'O sistema e super intuitivo. Minha equipe aprendeu a usar em um dia. Os relatorios me ajudam a tomar decisoes muito mais rapidas.',
    stars: 5,
  },
  {
    name: 'Roberto Almeida',
    role: 'Proprietario, Rei do Acai',
    text: 'Tenho 3 lojas e o AcaiGestor me permite acompanhar todas de um so lugar. O suporte e excelente e o preco e muito justo.',
    stars: 5,
  },
];

function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 lg:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Quem usa, recomenda
          </h2>
          <p className="text-lg text-neutral-500">
            Veja o que nossos clientes dizem sobre o AcaiGestor.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 border border-neutral-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
              <p className="text-neutral-600 leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div>
                <p className="font-semibold text-neutral-900">{t.name}</p>
                <p className="text-sm text-neutral-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FAQ ───────────────────────── */

const faqs = [
  {
    q: 'Preciso pagar para comecar a usar?',
    a: 'Nao! O plano Starter e totalmente gratuito. Voce pode testar o sistema sem compromisso e sem cartao de credito.',
  },
  {
    q: 'O sistema funciona no celular?',
    a: 'Sim. O AcaiGestor e totalmente responsivo e funciona em qualquer dispositivo com acesso a internet — celular, tablet ou computador.',
  },
  {
    q: 'Meus dados estao seguros?',
    a: 'Absolutamente. Usamos criptografia de ponta a ponta e backups automaticos diarios. Seus dados estao protegidos seguindo os mais altos padroes de seguranca.',
  },
  {
    q: 'Posso cancelar a qualquer momento?',
    a: 'Sim. Nao temos fidelidade ou multa. Voce pode fazer upgrade, downgrade ou cancelar quando quiser.',
  },
  {
    q: 'Quanto tempo leva para configurar?',
    a: 'Menos de 5 minutos. Crie sua conta, adicione seus produtos e comece a receber pedidos. Se precisar de ajuda, nosso suporte esta disponivel.',
  },
  {
    q: 'Consigo gerenciar mais de uma loja?',
    a: 'Sim! O plano Empresarial suporta multiplas lojas em um unico painel. Ideal para quem esta expandindo.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-neutral-500">
            Tire suas duvidas sobre o AcaiGestor.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border border-neutral-200 rounded-xl overflow-hidden transition-colors hover:border-neutral-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-neutral-50 transition-colors"
                >
                  <span className="font-medium text-neutral-900 pr-4">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-neutral-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-neutral-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-neutral-500 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── CTA ───────────────────────── */

function CTA() {
  return (
    <section className="py-20 lg:py-32 bg-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Pronto para transformar sua acaiteria?
        </h2>
        <p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto">
          Junte-se a centenas de acaiterias que ja usam o AcaiGestor para
          crescer com mais controle e menos esforco.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`${APP_URL}/register`}
            onClick={() => trackEvent('click_register', { location: 'cta' })}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-2xl text-lg transition-all duration-200 hover:shadow-lg hover:shadow-brand-500/25 no-underline"
          >
            Comecar Agora
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href={`${APP_URL}/login`}
            onClick={() => trackEvent('click_login', { location: 'cta' })}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-2xl text-lg border border-neutral-700 transition-all duration-200 no-underline"
          >
            Ja tenho conta
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Stats ───────────────────────── */

const stats = [
  { value: '500+', label: 'Acaiterias ativas', icon: ShoppingBag },
  { value: '50k+', label: 'Pedidos por mes', icon: TrendingUp },
  { value: '99.9%', label: 'Disponibilidade', icon: Zap },
  { value: '4.9/5', label: 'Avaliacao dos clientes', icon: Star },
];

function Stats() {
  return (
    <section className="py-16 bg-white border-y border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-6 h-6 text-brand-500 mx-auto mb-3" />
              <p className="text-3xl font-bold text-neutral-900 mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-neutral-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Footer ───────────────────────── */

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-neutral-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-brand-600 rounded-xl flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">AcaiGestor</span>
            </div>
            <p className="text-neutral-500 leading-relaxed max-w-sm">
              Sistema completo de gestao para acaiterias. Controle pedidos,
              estoque, financeiro e equipe em um unico lugar.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Produto
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#funcionalidades"
                  className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors no-underline"
                >
                  Funcionalidades
                </a>
              </li>
              <li>
                <a
                  href="#planos"
                  className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors no-underline"
                >
                  Planos
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors no-underline"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors no-underline"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Acesso
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`${APP_URL}/login`}
                  className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors no-underline"
                >
                  Entrar
                </a>
              </li>
              <li>
                <a
                  href={`${APP_URL}/register`}
                  className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors no-underline"
                >
                  Criar Conta
                </a>
              </li>
            </ul>

            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 mt-8">
              Funciona em
            </h4>
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <Smartphone className="w-4 h-4" />
              Celular, tablet e desktop
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 text-center">
          <p className="text-sm text-neutral-600">
            &copy; {year} AcaiGestor. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────────────── Landing (main) ───────────────────────── */

export default function Landing() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
