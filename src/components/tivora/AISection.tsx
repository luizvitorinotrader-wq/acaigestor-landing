import { Sparkles, TrendingUp, Bell, Lightbulb, Activity } from 'lucide-react';
import { AnimateIn, AnimateItem } from './AnimateIn';

const features = [
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: 'Previsão de demanda',
    desc: 'A IA analisa seus dados históricos e projeta os dias de maior movimento para você se preparar.',
  },
  {
    icon: <Bell className="w-5 h-5" />,
    title: 'Alertas inteligentes',
    desc: 'Notificações automáticas sobre estoque, metas de faturamento e anomalias na operação.',
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: 'Sugestões de ação',
    desc: 'Recomendações práticas: produto que deve entrar em promoção, horário de pico subutilizado.',
  },
  {
    icon: <Activity className="w-5 h-5" />,
    title: 'Análise de tendências',
    desc: 'Identifique o que está vendendo mais, o que está caindo e por quê — com clareza visual.',
  },
];

export function AISection() {
  return (
    <section className="py-20 sm:py-28 bg-[#0F172A] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#06B6D4]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-[#2563EB]/6 blur-[80px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <div>
            <AnimateIn variant="fadeLeft">
              <div className="inline-flex items-center gap-2.5 bg-[#06B6D4]/10 border border-[#06B6D4]/20 text-[#06B6D4] px-4 py-2 rounded-full text-sm font-semibold mb-8">
                <Sparkles className="w-4 h-4" />
                IA Tivora
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                Inteligência artificial
                <br />
                <span className="bg-gradient-to-r from-[#06B6D4] to-[#2563EB] bg-clip-text text-transparent">
                  no centro da operação
                </span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
                A IA Tivora aprende com o comportamento do seu negócio e entrega insights acionáveis — não apenas relatórios. Você age antes do problema acontecer.
              </p>
              <div className="inline-flex items-center gap-2 text-slate-400 text-sm border border-white/10 px-4 py-2 rounded-lg">
                <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
                Disponível em breve para todos os planos
              </div>
            </AnimateIn>
          </div>

          {/* Right feature cards */}
          <AnimateIn variant="fadeRight" stagger className="grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <AnimateItem key={i}>
                <div className="bg-white/5 border border-white/10 hover:border-[#06B6D4]/30 rounded-2xl p-6 transition-all duration-200 group hover:bg-white/7">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#06B6D4]/20 to-[#2563EB]/20 border border-[#06B6D4]/20 rounded-xl flex items-center justify-center text-[#06B6D4] mb-4 group-hover:bg-[#06B6D4]/25 transition-colors">
                    {f.icon}
                  </div>
                  <h3 className="font-bold text-white text-sm mb-2">{f.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{f.desc}</p>
                </div>
              </AnimateItem>
            ))}
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
