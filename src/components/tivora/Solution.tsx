import { Check, X } from 'lucide-react';
import { AnimateIn } from './AnimateIn';

const before = [
  'Pedidos perdidos no papel ou WhatsApp',
  'Caixa que não fecha no fim do dia',
  'Estoque no chute ou no caderno',
  'Sem noção do lucro real',
  'Ferramentas desconectadas',
  'Tempo desperdiçado em tarefas manuais',
];

const after = [
  'Pedidos organizados e rastreados em tempo real',
  'Caixa com abertura, fechamento e histórico',
  'Estoque com alertas automáticos de reposição',
  'Relatórios de lucro por dia, semana e mês',
  'Tudo integrado em uma única plataforma',
  'Automação que devolve horas do seu dia',
];

export function Solution() {
  return (
    <section id="solucao" className="py-20 sm:py-28 bg-[#0F172A] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(37,99,235,0.1),transparent)]" aria-hidden />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" aria-hidden />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn variant="fadeUp" className="text-center mb-14">
          <span className="inline-block bg-[#2563EB]/15 border border-[#2563EB]/25 text-[#06B6D4] text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            A transformação que o Tivora entrega
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            Antes e depois do Tivora
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Uma mudança que você sente na primeira semana.
          </p>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Before */}
          <AnimateIn variant="fadeLeft">
            <div className="bg-white/4 border border-white/10 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center">
                  <X className="w-5 h-5 text-slate-400" />
                </div>
                <h3 className="font-extrabold text-xl text-slate-300">Sem o Tivora</h3>
              </div>
              <ul className="space-y-3.5">
                {before.map(item => (
                  <li key={item} className="flex items-start gap-3 text-slate-400">
                    <span className="w-5 h-5 rounded-full bg-white/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-slate-500" strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>

          {/* After */}
          <AnimateIn variant="fadeRight">
            <div className="bg-gradient-to-b from-[#1E3A8A]/30 to-[#2563EB]/15 border border-[#2563EB]/30 rounded-2xl p-8 h-full shadow-xl shadow-blue-900/20">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-10 bg-[#2563EB]/20 border border-[#2563EB]/30 rounded-xl flex items-center justify-center">
                  <Check className="w-5 h-5 text-[#06B6D4]" />
                </div>
                <h3 className="font-extrabold text-xl text-white">Com o Tivora</h3>
              </div>
              <ul className="space-y-3.5">
                {after.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#2563EB] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm shadow-blue-500/30">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </span>
                    <span className="text-slate-200 text-sm leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
