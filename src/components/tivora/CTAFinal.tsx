import { ArrowRight, Shield, Lock } from 'lucide-react';
import { AnimateIn } from './AnimateIn';

const APP_URL = 'https://app.tivora.com.br';

export function CTAFinal() {
  return (
    <section className="py-28 sm:py-36 bg-[#0F172A] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(37,99,235,0.15),transparent)]" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-[#1E3A8A]/20 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-[#06B6D4]/8 blur-[80px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateIn variant="fadeUp">
          <div className="inline-flex items-center gap-2 bg-[#2563EB]/15 border border-[#2563EB]/25 text-[#06B6D4] px-4 py-2 rounded-full text-sm font-semibold mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse" />
            Comece hoje, veja a diferença esta semana
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
            Sua operação pode estar
            <br />
            <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
              organizada hoje.
            </span>
          </h2>

          <p className="text-slate-300 text-xl leading-relaxed mb-12 max-w-xl mx-auto">
            Cada dia sem controle é decisão baseada em achismo. Comece grátis e veja o que muda na sua primeira semana.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href={`${APP_URL}/register`}
              className="group inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-blue-500 text-white font-bold px-10 py-5 rounded-xl text-lg transition-all duration-200 no-underline shadow-2xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-px"
            >
              Começar grátis agora
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            {[
              { icon: <Lock className="w-3.5 h-3.5" />, label: '7 dias grátis' },
              { icon: <Shield className="w-3.5 h-3.5" />, label: 'Sem cartão de crédito' },
              { icon: <Lock className="w-3.5 h-3.5" />, label: 'Cancele quando quiser' },
              { icon: <Shield className="w-3.5 h-3.5" />, label: 'Suporte em português' },
            ].map(t => (
              <span key={t.label} className="flex items-center gap-2">
                <span className="text-[#2563EB]">{t.icon}</span>
                {t.label}
              </span>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
