import { LayoutDashboard, TriangleAlert as AlertTriangle, Clock, TrendingDown } from 'lucide-react';
import { AnimateIn, AnimateItem } from './AnimateIn';

const problems = [
  {
    icon: <LayoutDashboard className="w-6 h-6" />,
    title: 'Dados espalhados em vários lugares',
    desc: 'Caderno, WhatsApp, planilha e caixa que não bate. Ninguém sabe o que está acontecendo de verdade.',
  },
  {
    icon: <TrendingDown className="w-6 h-6" />,
    title: 'Sem visibilidade do que lucra ou perde',
    desc: 'O dinheiro entra, a conta paga, mas sobrou quanto? Sem dados, você gerencia no escuro.',
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: 'Estoque fura sem avisar',
    desc: 'Produto acaba no pico do movimento. Venda perdida, cliente insatisfeito.',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Operação manual consome tempo',
    desc: 'Anotar pedido, calcular troco, contar estoque — tarefas que deveriam ser automáticas.',
  },
];

export function Problems() {
  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn variant="fadeUp" className="text-center mb-14">
          <span className="inline-block bg-slate-200/80 text-slate-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-5 border border-slate-300/50">
            O problema de quem não tem sistema
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight mb-4">
            Você reconhece algum desses cenários?
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Pequenos negócios sem gestão estruturada perdem em média R$ 1.200/mês em ineficiências que poderiam ser resolvidas.
          </p>
        </AnimateIn>

        <AnimateIn variant="fadeUp" stagger className="grid sm:grid-cols-2 gap-5">
          {problems.map((p, i) => (
            <AnimateItem key={i}>
              <div className="bg-white border border-slate-200 hover:border-[#2563EB]/30 rounded-2xl p-7 transition-all duration-200 group hover:shadow-lg hover:shadow-[#2563EB]/5">
                <div className="flex items-start gap-5">
                  <div className="w-11 h-11 bg-slate-100 text-slate-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#1E3A8A]/8 group-hover:text-[#2563EB] transition-all duration-200">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0F172A] text-base mb-2 leading-snug">{p.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            </AnimateItem>
          ))}
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={0.2} className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 bg-[#1E3A8A]/8 border border-[#1E3A8A]/15 text-[#1E3A8A] font-semibold px-7 py-4 rounded-2xl text-sm">
            <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
            O Tivora resolve todos esses problemas — em uma única plataforma
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
