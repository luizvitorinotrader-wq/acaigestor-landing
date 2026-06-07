import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimateIn } from './AnimateIn';

const faqs = [
  {
    q: 'Preciso instalar alguma coisa?',
    a: 'Não. O Tivora funciona 100% no navegador — celular, tablet ou computador. Crie a conta e comece a usar na hora, sem download.',
  },
  {
    q: 'Minha equipe vai conseguir usar?',
    a: 'Sim. A plataforma foi desenvolvida para ser intuitiva. A maioria dos usuários aprende o fluxo principal em menos de 15 minutos. E você pode criar perfis de acesso diferentes para cada colaborador.',
  },
  {
    q: 'Funciona para delivery e pedidos online?',
    a: 'Sim. O Tivora inclui módulo de pedidos online com cardápio digital. Seus clientes acessam pelo celular e os pedidos chegam direto ao sistema.',
  },
  {
    q: 'Posso cancelar quando quiser?',
    a: 'Sim. Sem contrato, sem multa de cancelamento. Você cancela pelo próprio painel em menos de 1 minuto.',
  },
  {
    q: 'Os meus dados ficam seguros?',
    a: 'Sim. Todos os dados são armazenados com criptografia, backup automático e infraestrutura segura. Você nunca perde o histórico do seu negócio.',
  },
  {
    q: 'Os preços já foram definidos?',
    a: 'Ainda estamos definindo os valores finais dos planos para oferecer o melhor custo-benefício. Em breve anunciamos. Você pode se cadastrar agora e aproveitar o período de teste gratuito.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <AnimateIn variant="fadeUp" className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-3">
              Perguntas frequentes
            </h2>
            <p className="text-slate-500 text-lg">Tudo que você precisa saber antes de começar.</p>
          </AnimateIn>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimateIn key={i} variant="fadeUp" delay={i * 0.04}>
                <div className="border border-slate-200 hover:border-[#2563EB]/30 rounded-2xl overflow-hidden transition-colors duration-200 bg-white">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                  >
                    <span className="font-semibold text-[#0F172A] text-base">{faq.q}</span>
                    <motion.div
                      animate={{ rotate: open === i ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-slate-600 leading-relaxed text-base border-t border-slate-100 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
