import { Check, Shield, Lock } from 'lucide-react';
import { AnimateIn, AnimateItem } from './AnimateIn';

const APP_URL = 'https://app.tivora.com.br';

const plans = [
  {
    name: 'Starter',
    tagline: 'Para quem está começando',
    price: null,
    cta: 'Quero saber mais',
    popular: false,
    features: [
      'PDV Inteligente',
      'Gestão de Estoque',
      'Financeiro básico',
      'Relatório diário',
      'Acesso mobile e desktop',
      'Suporte por email',
    ],
  },
  {
    name: 'Pro',
    tagline: 'Para negócios em crescimento',
    price: null,
    cta: 'Começar grátis',
    popular: true,
    features: [
      'Tudo do Starter',
      'Pedidos Online',
      'Controle de Mesas',
      'Relatórios avançados',
      'Módulo de Clientes',
      'Múltiplos usuários',
      'Suporte prioritário',
    ],
  },
  {
    name: 'Premium',
    tagline: 'Gestão avançada com IA',
    price: null,
    cta: 'Quero saber mais',
    popular: false,
    features: [
      'Tudo do Pro',
      'IA Tivora (insights e previsões)',
      'Integrações avançadas',
      'Relatórios personalizados',
      'API de integração',
      'Gerente de conta dedicado',
      'SLA garantido',
    ],
  },
];

export function Pricing() {
  return (
    <section id="planos" className="py-20 sm:py-28 bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn variant="fadeUp" className="text-center mb-14">
          <span className="inline-block bg-[#2563EB]/8 text-[#2563EB] text-sm font-semibold px-4 py-1.5 rounded-full mb-5 border border-[#2563EB]/15">
            Planos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4">
            Escolha o plano ideal para você
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            7 dias grátis em qualquer plano. Sem cartão. Cancele quando quiser.
          </p>
        </AnimateIn>

        <AnimateIn variant="fadeUp" stagger className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {plans.map((plan, i) => (
            <AnimateItem key={i}>
              <div
                className={`relative rounded-2xl flex flex-col transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-[#0F172A] to-[#1E3A8A]/90 shadow-2xl shadow-blue-900/40 ring-2 ring-[#2563EB]/50 sm:scale-[1.03] z-10'
                    : 'bg-white border border-slate-200 shadow-sm'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white px-5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wide shadow-lg whitespace-nowrap">
                    Mais popular
                  </div>
                )}

                <div className="p-7">
                  <p className={`text-lg font-extrabold mb-1 ${plan.popular ? 'text-white' : 'text-[#0F172A]'}`}>
                    {plan.name}
                  </p>
                  <p className={`text-sm mb-6 min-h-[2.5rem] leading-snug ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                    {plan.tagline}
                  </p>

                  {/* Price placeholder */}
                  <div className="mb-6">
                    <span className={`inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-lg ${
                      plan.popular
                        ? 'bg-[#2563EB]/20 text-[#06B6D4] border border-[#2563EB]/30'
                        : 'bg-slate-100 text-slate-500 border border-slate-200'
                    }`}>
                      <Lock className="w-3.5 h-3.5" />
                      Preço em breve
                    </span>
                  </div>

                  <a
                    href={`${APP_URL}/register`}
                    className={`block w-full py-3.5 rounded-xl font-bold text-center text-sm transition-all duration-200 no-underline mb-2 ${
                      plan.popular
                        ? 'bg-[#2563EB] hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-px'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {plan.cta}
                  </a>

                  {plan.popular && (
                    <p className="text-center text-xs text-[#06B6D4] mb-5 flex items-center justify-center gap-1">
                      <Shield className="w-3 h-3" /> 7 dias grátis · Sem cartão
                    </p>
                  )}
                  {!plan.popular && <div className="mb-5" />}

                  <ul className="space-y-2.5">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <Check
                          className={`flex-shrink-0 mt-0.5 ${plan.popular ? 'text-[#06B6D4]' : 'text-[#2563EB]'}`}
                          style={{ width: 15, height: 15 }}
                        />
                        <span className={`text-sm leading-snug ${plan.popular ? 'text-slate-300' : 'text-slate-600'}`}>
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

        <AnimateIn variant="fadeUp" delay={0.15} className="mt-10 text-center">
          <p className="text-slate-400 text-sm flex items-center justify-center gap-2">
            <Shield className="w-4 h-4 text-[#2563EB]" />
            Todos os planos com 7 dias grátis · Cancele quando quiser · Sem burocracia
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
