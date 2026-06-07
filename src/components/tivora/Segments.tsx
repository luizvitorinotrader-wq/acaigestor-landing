import { motion } from 'framer-motion';
import { Coffee, Pizza, Beer, ShoppingBag, Store, Sandwich } from 'lucide-react';
import { AnimateIn, AnimateItem } from './AnimateIn';

const segments = [
  { icon: <Coffee className="w-6 h-6" />, label: 'Açaiterias', desc: 'Pedidos rápidos, estoque de polpas e caixa sob controle.' },
  { icon: <Sandwich className="w-6 h-6" />, label: 'Lanchonetes', desc: 'Do balcão ao delivery, tudo em um só lugar.' },
  { icon: <Pizza className="w-6 h-6" />, label: 'Pizzarias', desc: 'Gestão de fornos, mesas e delivery integrados.' },
  { icon: <Beer className="w-6 h-6" />, label: 'Bares', desc: 'Controle de consumo, mesas e fechamento ágil.' },
  { icon: <ShoppingBag className="w-6 h-6" />, label: 'Mercados', desc: 'Estoque amplo, frente de caixa e relatórios detalhados.' },
  { icon: <Store className="w-6 h-6" />, label: 'Pequenos negócios', desc: 'Qualquer comércio que precisa de controle real.' },
];

export function Segments() {
  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn variant="fadeUp" className="text-center mb-14">
          <span className="inline-block bg-[#1E3A8A]/8 text-[#1E3A8A] text-sm font-semibold px-4 py-1.5 rounded-full mb-5 border border-[#1E3A8A]/15">
            Para quem é o Tivora
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight mb-4">
            Feito para o seu tipo de negócio
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Do açaí ao mercado, o Tivora se adapta à realidade de cada operação.
          </p>
        </AnimateIn>

        <AnimateIn variant="fadeUp" stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {segments.map((s, i) => (
            <AnimateItem key={i}>
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(37,99,235,0.1)' }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-slate-200 rounded-2xl p-7 cursor-default group"
              >
                <div className="w-12 h-12 bg-[#1E3A8A]/8 text-[#2563EB] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-200">
                  {s.icon}
                </div>
                <h3 className="font-bold text-[#0F172A] text-base mb-2">{s.label}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            </AnimateItem>
          ))}
        </AnimateIn>
      </div>
    </section>
  );
}
