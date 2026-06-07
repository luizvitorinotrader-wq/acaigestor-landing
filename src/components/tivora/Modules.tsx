import { motion } from 'framer-motion';
import { ShoppingCart, Package, DollarSign, Globe, LayoutGrid, ChartBar as BarChart3, Users, Sparkles } from 'lucide-react';
import { AnimateIn, AnimateItem } from './AnimateIn';

const modules = [
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: 'PDV Inteligente',
    desc: 'Registre vendas em segundos. Frente de caixa rápida, desconto e múltiplas formas de pagamento.',
    accent: 'from-[#2563EB] to-[#1E3A8A]',
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: 'Gestão de Estoque',
    desc: 'Alertas automáticos de reposição, histórico de movimentações e controle por categoria.',
    accent: 'from-[#06B6D4] to-[#2563EB]',
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: 'Financeiro',
    desc: 'Controle de caixa, entradas, saídas e fluxo financeiro claro. Sem planilha.',
    accent: 'from-[#1E3A8A] to-[#2563EB]',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Pedidos Online',
    desc: 'Cardápio digital, pedidos pelo celular e integração direta com a cozinha.',
    accent: 'from-[#2563EB] to-[#06B6D4]',
  },
  {
    icon: <LayoutGrid className="w-6 h-6" />,
    title: 'Controle de Mesas',
    desc: 'Visualize o salão, abra comandas e feche contas com agilidade.',
    accent: 'from-[#06B6D4] to-[#1E3A8A]',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Relatórios',
    desc: 'Vendas por período, produtos mais lucrativos e indicadores que importam para crescer.',
    accent: 'from-[#1E3A8A] to-[#06B6D4]',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Clientes',
    desc: 'Histórico de pedidos, perfil do cliente e ferramentas para fidelizar quem compra.',
    accent: 'from-[#2563EB] to-[#1E3A8A]',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'IA Tivora',
    desc: 'Insights automáticos, previsão de demanda e sugestões de ação baseadas em dados reais.',
    accent: 'from-[#06B6D4] to-[#2563EB]',
    highlight: true,
  },
];

export function Modules() {
  return (
    <section id="modulos" className="py-20 sm:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn variant="fadeUp" className="text-center mb-14">
          <span className="inline-block bg-[#2563EB]/8 text-[#2563EB] text-sm font-semibold px-4 py-1.5 rounded-full mb-5 border border-[#2563EB]/15">
            Módulos da plataforma
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight mb-4">
            Tudo que sua operação precisa,
            <span className="text-[#2563EB]"> integrado</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Cada módulo foi desenvolvido para o ritmo real de pequenos negócios. Sem excesso, sem falta.
          </p>
        </AnimateIn>

        <AnimateIn variant="fadeUp" stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {modules.map((m, i) => (
            <AnimateItem key={i}>
              <motion.div
                whileHover={{ y: -5, boxShadow: '0 24px 48px rgba(37,99,235,0.12)' }}
                transition={{ duration: 0.2 }}
                className={`group relative bg-white border rounded-2xl p-6 cursor-default h-full flex flex-col transition-all duration-200 ${
                  m.highlight
                    ? 'border-[#2563EB]/30 bg-gradient-to-br from-[#F8FAFC] to-blue-50/50 shadow-md shadow-blue-100'
                    : 'border-slate-200 hover:border-[#2563EB]/25'
                }`}
              >
                {m.highlight && (
                  <div className="absolute -top-2.5 left-4 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Novo
                  </div>
                )}
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${m.accent} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                  {m.icon}
                </div>
                <h3 className="font-bold text-[#0F172A] text-sm mb-2">{m.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed flex-1">{m.desc}</p>
              </motion.div>
            </AnimateItem>
          ))}
        </AnimateIn>
      </div>
    </section>
  );
}
