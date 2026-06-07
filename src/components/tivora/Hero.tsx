import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, ChartBar as BarChart3, Package, DollarSign, ShoppingCart } from 'lucide-react';

const APP_URL = 'https://app.tivora.com.br';

const hidden = { opacity: 0, y: 28 };
const visible = { opacity: 1, y: 0 };
const ease = 'easeOut' as const;

function DashboardMockup() {
  return (
    <div className="bg-[#0F172A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
      <div className="flex items-center gap-1.5 px-4 py-3 bg-white/5 border-b border-white/8">
        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
        <span className="ml-3 text-xs text-slate-400 font-medium">Tivora · Dashboard</span>
        <span className="ml-auto flex items-center gap-1.5 text-xs text-[#06B6D4] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse" />
          Ao vivo
        </span>
      </div>

      <div className="p-5 space-y-4">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Faturamento hoje', value: 'R$ 4.280', delta: '+12%', icon: <DollarSign className="w-4 h-4" /> },
            { label: 'Pedidos', value: '134', delta: '+8', icon: <ShoppingCart className="w-4 h-4" /> },
            { label: 'Ticket médio', value: 'R$ 31,90', delta: '', icon: <BarChart3 className="w-4 h-4" /> },
          ].map((kpi, i) => (
            <div key={i} className={`rounded-xl p-3 ${i === 0 ? 'bg-gradient-to-br from-[#2563EB] to-[#06B6D4] text-white' : 'bg-white/5 border border-white/8'}`}>
              <div className={`flex items-center justify-between mb-2 ${i === 0 ? 'text-blue-100' : 'text-slate-500'}`}>
                <span className="text-[10px] font-medium">{kpi.label}</span>
                {kpi.icon}
              </div>
              <p className={`text-base font-extrabold ${i === 0 ? 'text-white' : 'text-slate-100'}`}>{kpi.value}</p>
              {kpi.delta && (
                <p className={`text-[10px] mt-0.5 font-semibold ${i === 0 ? 'text-blue-100' : 'text-[#06B6D4]'}`}>{kpi.delta} hoje</p>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white/4 border border-white/8 rounded-xl p-3">
          <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-3">Vendas — últimos 7 dias</p>
          <div className="flex items-end gap-1.5 h-14">
            {[55, 72, 48, 88, 63, 91, 100].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm" style={{
                height: `${h}%`,
                background: i === 6
                  ? 'linear-gradient(to top, #2563EB, #06B6D4)'
                  : 'rgba(255,255,255,0.1)',
              }} />
            ))}
          </div>
          <div className="flex justify-between mt-1.5">
            {['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'].map(d => (
              <span key={d} className="text-[9px] text-slate-600 flex-1 text-center">{d}</span>
            ))}
          </div>
        </div>

        <div className="bg-white/4 border border-white/8 rounded-xl p-3">
          <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-2">Pedidos recentes</p>
          {[
            { n: '#1042 · Mesa 3', s: 'R$ 47,90', t: 'Entregue' },
            { n: '#1043 · Delivery', s: 'R$ 62,50', t: 'Em preparo' },
            { n: '#1044 · Balcão', s: 'R$ 23,00', t: 'Aguardando' },
          ].map((o, i) => (
            <div key={i} className="flex items-center justify-between py-1.5">
              <div>
                <p className="text-slate-200 text-xs font-medium">{o.n}</p>
                <p className="text-slate-500 text-[10px]">{o.t}</p>
              </div>
              <span className="text-[#06B6D4] text-xs font-bold">{o.s}</span>
            </div>
          ))}
        </div>

        <div className="bg-[#1E3A8A]/30 border border-[#2563EB]/30 rounded-xl px-3 py-2.5 flex items-center gap-2">
          <Package className="w-4 h-4 text-[#2563EB] flex-shrink-0" />
          <p className="text-slate-300 text-xs"><span className="font-semibold text-white">2 itens</span> com estoque baixo — clique para ver</p>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative bg-[#0F172A] text-white overflow-hidden min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#2563EB]/8 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[#06B6D4]/6 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(37,99,235,0.1),transparent)]" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          <div>
            <motion.div
              initial={hidden}
              animate={visible}
              transition={{ duration: 0.6, delay: 0, ease }}
              className="inline-flex items-center gap-2 bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#06B6D4] px-4 py-2 rounded-full text-sm font-semibold mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse" />
              Nova plataforma de gestão inteligente
            </motion.div>

            <motion.h1
              initial={hidden}
              animate={visible}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="text-4xl sm:text-5xl xl:text-[3.5rem] font-extrabold leading-[1.08] tracking-tight mb-6"
            >
              Menos caos.<br />
              Mais controle.<br />
              <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
                Mais crescimento.
              </span>
            </motion.h1>

            <motion.p
              initial={hidden}
              animate={visible}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-lg"
            >
              Controle vendas, estoque, financeiro, pedidos e atendimento em uma única plataforma moderna e intuitiva.
            </motion.p>

            <motion.div
              initial={hidden}
              animate={visible}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <a
                href={`${APP_URL}/register`}
                className="group inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-blue-500 text-white font-bold px-7 py-4 rounded-xl text-base transition-all duration-200 no-underline shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-px"
              >
                Começar grátis
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <button
                onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-white/30 text-slate-300 hover:text-white font-semibold px-7 py-4 rounded-xl text-base transition-all duration-200"
              >
                Ver demonstração
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>

            <motion.div
              initial={hidden}
              animate={visible}
              transition={{ duration: 0.6, delay: 0.4, ease }}
              className="flex flex-wrap items-center gap-x-6 gap-y-2"
            >
              {['7 dias grátis', 'Sem cartão de crédito', 'Cancele quando quiser'].map(t => (
                <span key={t} className="flex items-center gap-2 text-sm text-slate-400">
                  <span className="w-1 h-1 rounded-full bg-[#2563EB]" />
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            className="relative"
          >
            <div className="absolute -inset-8 bg-[#2563EB]/6 blur-3xl rounded-3xl" aria-hidden />
            <div className="relative">
              <DashboardMockup />
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5, ease }}
                className="absolute -left-5 top-1/3 bg-[#0F172A] border border-white/12 rounded-xl px-4 py-3 shadow-2xl hidden sm:flex items-center gap-3"
              >
                <div className="w-8 h-8 bg-[#1E3A8A] rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-[#06B6D4]" />
                </div>
                <div>
                  <p className="text-white text-xs font-bold">+23% faturamento</p>
                  <p className="text-slate-500 text-[10px]">vs. mês anterior</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5, ease }}
                className="absolute -right-5 bottom-1/4 bg-[#0F172A] border border-white/12 rounded-xl px-4 py-3 shadow-2xl hidden sm:flex items-center gap-3"
              >
                <div className="w-8 h-8 bg-[#1E3A8A] rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-4 h-4 text-[#2563EB]" />
                </div>
                <div>
                  <p className="text-white text-xs font-bold">134 pedidos hoje</p>
                  <p className="text-slate-500 text-[10px]">atualizado agora</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
