import { Check, Sparkles } from 'lucide-react';
import { AnimateIn, AnimateItem } from './AnimateIn';

const APP_URL = 'https://app.tivora.com.br';

const plans = [
  {
    name: 'Starter',
    price: 'R$ 49,90',
    period: '/mês',
    tagline: 'Ideal para pequenos negócios que estão começando a organizar sua operação.',
    popular: false,
    badge: null,
    features: [
      'PDV Inteligente',
      'Controle de Estoque',
      'Financeiro',
      'Relatórios',
      'Suporte',
    ],
  },
  {
    name: 'Pro',
    price: 'R$ 79,90',
    period: '/mês',
    tagline: 'Para empresas que precisam de mais controle e produtividade.',
    popular: false,
    badge: null,
    features: [
      'Tudo do Starter',
      'Pedidos Online',
      'Controle de Mesas',
      'Gestão de Clientes',
      'Relatórios Avançados',
    ],
  },
  {
    name: 'Pro + IA',
    price: 'R$ 119,90',
    period: '/mês',
    tagline: 'Combina toda a gestão do Tivora com Inteligência Artificial.',
    popular: true,
    badge: 'Mais Escolhido',
    features: [
      'Tudo do Pro',
      'IA Tivora',
      'Atendimento Inteligente',
      'Sugestão de Produtos',
      'Automações',
      'Prioridade no suporte',
    ],
  },
  {
    name: 'Premium + IA',
    price: 'R$ 169,90',
    period: '/mês',
    tagline: 'Plano completo para operações que desejam máximo controle.',
    popular: false,
    badge: null,
    features: [
      'Tudo do Pro + IA',
      'Recursos Premium',
      'Prioridade máxima',
      'Funcionalidades avançadas',
      'Multiunidade (em breve)',
    ],
  },
];

const trialBadges = [
  '7 dias grátis',
  'Todas as funcionalidades liberadas',
  'Sem fidelidade',
  'Cancelamento a qualquer momento',
];

export function Pricing() {
  return (
    <section id="planos" className="py-20 sm:py-28 bg-[#F8FAFC]">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimateIn variant="fadeUp" className="text-center mb-12">
          <span className="inline-block bg-[#2563EB]/8 text-[#2563EB] text-sm font-semibold px-4 py-1.5 rounded-full mb-5 border border-[#2563EB]/15">
            Planos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4">
            Escolha o plano ideal para você
          </h2>
        </AnimateIn>

        {/* Trial banner */}
        <AnimateIn variant="fadeUp" delay={0.05} className="mb-10">
          <div className="bg-white border border-[#2563EB]/20 rounded-2xl px-6 sm:px-8 py-6 max-w-3xl mx-auto shadow-sm">
            <h3 className="text-[#0F172A] font-extrabold text-lg sm:text-xl mb-1.5 text-center">
              Teste todas as funcionalidades por 7 dias
            </h3>
            <p className="text-slate-500 text-sm sm:text-base text-center mb-5 leading-relaxed">
              Experimente o Tivora gratuitamente com acesso completo a todos os recursos da plataforma, incluindo a IA Tivora.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {trialBadges.map(badge => (
                <span key={badge} className="inline-flex items-center gap-1.5 bg-[#1E3A8A]/6 border border-[#1E3A8A]/12 text-[#1E3A8A] text-xs font-semibold px-3.5 py-1.5 rounded-full">
                  <Check className="w-3 h-3 text-[#2563EB]" strokeWidth={3} />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* Plans grid */}
        <AnimateIn variant="fadeUp" stagger className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {plans.map((plan, i) => (
            <AnimateItem key={i}>
              <div
                className={`relative rounded-2xl flex flex-col h-full transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-[#0F172A] to-[#1E3A8A]/90 ring-2 ring-[#2563EB]/60 shadow-2xl shadow-blue-900/30'
                    : 'bg-white border border-slate-200 shadow-sm hover:border-[#2563EB]/25 hover:shadow-lg hover:shadow-[#2563EB]/5'
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                    <div className="flex items-center gap-1.5 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white px-4 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wide shadow-lg whitespace-nowrap">
                      <Sparkles className="w-3 h-3" />
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div className={`p-6 flex flex-col h-full ${plan.badge ? 'pt-8' : ''}`}>
                  {/* Name */}
                  <p className={`text-base font-extrabold mb-2 ${plan.popular ? 'text-white' : 'text-[#0F172A]'}`}>
                    {plan.name}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-0.5 mb-3">
                    <span className={`text-2xl font-extrabold ${plan.popular ? 'text-white' : 'text-[#0F172A]'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm font-medium ${plan.popular ? 'text-slate-400' : 'text-slate-400'}`}>
                      {plan.period}
                    </span>
                  </div>

                  {/* Tagline */}
                  <p className={`text-xs leading-relaxed mb-5 min-h-[3rem] ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                    {plan.tagline}
                  </p>

                  {/* CTA */}
                  <a
                    href={`${APP_URL}/register`}
                    className={`block w-full py-3 rounded-xl font-bold text-center text-sm transition-all duration-200 no-underline mb-5 ${
                      plan.popular
                        ? 'bg-[#2563EB] hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-px'
                        : 'bg-[#F8FAFC] hover:bg-slate-100 text-[#1E3A8A] border border-slate-200 hover:border-[#2563EB]/30 font-bold'
                    }`}
                  >
                    Começar teste grátis
                  </a>

                  {/* Divider */}
                  <div className={`h-px mb-4 ${plan.popular ? 'bg-white/10' : 'bg-slate-100'}`} />

                  {/* Features */}
                  <ul className="space-y-2.5 flex-1">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${
                          plan.popular ? 'bg-[#2563EB]/20' : 'bg-[#2563EB]/8'
                        }`}>
                          <Check
                            className={plan.popular ? 'text-[#06B6D4]' : 'text-[#2563EB]'}
                            style={{ width: 10, height: 10 }}
                            strokeWidth={3}
                          />
                        </span>
                        <span className={`text-xs leading-snug ${plan.popular ? 'text-slate-300' : 'text-slate-600'}`}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateItem>
          ))}
        </AnimateIn>

        {/* Footer note */}
        <AnimateIn variant="fadeUp" delay={0.1} className="mt-8 text-center">
          <p className="text-slate-400 text-sm">
            Todos os planos incluem 7 dias grátis · Sem fidelidade · Cancele quando quiser
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
