import { motion } from 'framer-motion';
import { Building2, Package, ShoppingCart, ChartBar as BarChart3 } from 'lucide-react';
import { AnimateIn } from './AnimateIn';

const steps = [
  {
    number: '01',
    icon: <Building2 className="w-6 h-6" />,
    title: 'Cadastre sua empresa',
    desc: 'Crie sua conta em minutos. Informe os dados do seu negócio e configure o perfil da sua loja.',
  },
  {
    number: '02',
    icon: <Package className="w-6 h-6" />,
    title: 'Configure seus produtos',
    desc: 'Cadastre produtos, defina preços, categorias e estoque inicial. Simples e rápido.',
  },
  {
    number: '03',
    icon: <ShoppingCart className="w-6 h-6" />,
    title: 'Comece a vender',
    desc: 'Abra o PDV, registre vendas, receba pedidos online e controle mesas — tudo no mesmo lugar.',
  },
  {
    number: '04',
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Acompanhe tudo em tempo real',
    desc: 'Dashboard com resultados ao vivo, relatórios automáticos e insights para crescer com decisões baseadas em dados.',
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 sm:py-28 bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn variant="fadeUp" className="text-center mb-16">
          <span className="inline-block bg-[#1E3A8A]/8 text-[#1E3A8A] text-sm font-semibold px-4 py-1.5 rounded-full mb-5 border border-[#1E3A8A]/15">
            Como funciona
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight mb-4">
            Do cadastro à primeira venda
            <span className="text-[#2563EB]"> em minutos</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Quatro passos simples para transformar a gestão do seu negócio.
          </p>
        </AnimateIn>

        {/* Desktop timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-[52px] left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px bg-gradient-to-r from-[#2563EB]/30 via-[#06B6D4]/50 to-[#2563EB]/30" />

          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <AnimateIn key={i} variant="fadeUp" delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="text-center"
                >
                  {/* Icon circle */}
                  <div className="relative w-[52px] h-[52px] mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB] to-[#06B6D4] rounded-full opacity-15 blur-md" />
                    <div className="relative w-full h-full bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-600/25">
                      {step.icon}
                    </div>
                    {/* Number badge */}
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-[#0F172A] border border-[#2563EB]/50 rounded-full flex items-center justify-center">
                      <span className="text-[9px] text-[#06B6D4] font-bold">{i + 1}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-[#0F172A] text-sm mb-3 leading-snug">{step.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                </motion.div>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="lg:hidden space-y-5">
          {steps.map((step, i) => (
            <AnimateIn key={i} variant="fadeUp" delay={i * 0.08}>
              <div className="flex gap-5 items-start bg-white border border-slate-200 rounded-2xl p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-md shadow-blue-600/20">
                  {step.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] text-[#06B6D4] font-bold uppercase tracking-widest">{step.number}</span>
                    <span className="w-4 h-px bg-[#2563EB]/30" />
                  </div>
                  <h3 className="font-bold text-[#0F172A] text-sm mb-1.5">{step.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
