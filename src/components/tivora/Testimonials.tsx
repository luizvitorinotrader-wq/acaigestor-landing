import { Star, MapPin } from 'lucide-react';
import { AnimateIn, AnimateItem } from './AnimateIn';

const testimonials = [
  {
    name: 'Camila Souza',
    city: 'São Paulo, SP',
    role: 'Dona de açaiteria',
    text: 'Antes eu ficava no papel e no WhatsApp. Com o Tivora eu vejo em tempo real quantos pedidos estão abertos, o que está acabando no estoque e quanto entrou no caixa. Não consigo mais imaginar trabalhar sem isso.',
    result: 'Caixa organizado desde o dia 1',
    photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=160&h=160&dpr=2',
  },
  {
    name: 'Rafael Nunes',
    city: 'Belo Horizonte, MG',
    role: 'Dono de pizzaria',
    text: 'A parte de pedidos online e controle de mesas mudou completamente o ritmo do salão. A equipe aprendeu em menos de 15 minutos e o atendimento ficou muito mais ágil.',
    result: 'Equipe aprendeu em 15 minutos',
    photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=160&h=160&dpr=2',
  },
  {
    name: 'Tatiane Alves',
    city: 'Curitiba, PR',
    role: 'Proprietária de mercado',
    text: 'Eu não sabia quanto lucrava de verdade. Depois que comecei a usar os relatórios do Tivora, descobri que três produtos me davam prejuízo há meses. Isso mudou minha tomada de decisão.',
    result: 'Descobriu produtos no prejuízo',
    photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=160&h=160&dpr=2',
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 sm:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn variant="fadeUp" className="text-center mb-14">
          <div className="flex justify-center gap-0.5 mb-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-[#2563EB] fill-[#2563EB]" />
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4 leading-tight">
            Quem já usa, não volta atrás
          </h2>
          <p className="text-slate-500 text-lg">Resultados reais de donos de negócio como você.</p>
        </AnimateIn>

        <AnimateIn variant="fadeUp" stagger className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimateItem key={i}>
              <div className="flex flex-col bg-white border border-slate-200 hover:border-[#2563EB]/30 hover:shadow-xl hover:shadow-[#2563EB]/5 rounded-2xl p-7 transition-all duration-200 h-full">
                {/* Result badge */}
                <div className="inline-flex items-center gap-2 bg-[#1E3A8A]/6 border border-[#1E3A8A]/12 text-[#1E3A8A] text-xs font-bold px-3 py-1.5 rounded-full mb-5 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                  {t.result}
                </div>
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 text-[#2563EB] fill-[#2563EB]" />
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed text-base flex-1 mb-6">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-[#2563EB]/15 flex-shrink-0"
                  />
                  <div>
                    <p className="font-bold text-[#0F172A] text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs flex items-center gap-1">
                      <MapPin className="w-3 h-3" />{t.city} · {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateItem>
          ))}
        </AnimateIn>

        {/* Numbers strip */}
        <AnimateIn variant="fadeUp" delay={0.2} className="mt-12">
          <div className="grid grid-cols-3 gap-0 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] rounded-2xl overflow-hidden">
            {[
              { n: '500+', label: 'negócios ativos' },
              { n: '4,9', label: 'avaliação média' },
              { n: '5min', label: 'para configurar' },
            ].map((s, i) => (
              <div key={i} className={`text-center py-8 ${i < 2 ? 'border-r border-white/15' : ''}`}>
                <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">{s.n}</p>
                <p className="text-blue-200 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
