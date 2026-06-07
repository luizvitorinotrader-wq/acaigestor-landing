import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const APP_URL = 'https://app.tivora.com.br';

const links = [
  { label: 'Solução', href: '#solucao' },
  { label: 'Módulos', href: '#modulos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Planos', href: '#planos' },
];

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0F172A]/95 backdrop-blur-xl border-b border-white/8 shadow-2xl shadow-black/30'
          : 'bg-[#0F172A]/90 backdrop-blur-xl'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a
            href="/"
            className="flex items-center no-underline group"
            aria-label="Tivora"
          >
            <div className="flex items-center gap-3">
              <img
                src="/logo_tivora_transparente.png"
                alt="Tivora"
                className="h-11 w-11 sm:h-12 sm:w-12 object-contain"
              />

              </a>

          <div className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={`${APP_URL}/login`}
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors no-underline"
            >
              Entrar
            </a>

            <a
              href={`${APP_URL}/register`}
              className="bg-[#2563EB] hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 no-underline shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-px"
            >
              Começar grátis
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-slate-300 hover:text-white transition-colors p-1"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0F172A]/98 border-t border-white/8 overflow-hidden"
          >
            <div className="px-4 py-5 flex flex-col gap-1">
              {links.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    scrollTo(link.href);
                    setMenuOpen(false);
                  }}
                  className="text-slate-300 hover:text-white text-base font-medium py-3 text-left transition-colors"
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-3 flex flex-col gap-2 border-t border-white/8 mt-2">
                <a
                  href={`${APP_URL}/login`}
                  className="text-center text-slate-300 border border-white/15 py-3 rounded-lg font-medium no-underline"
                >
                  Entrar
                </a>

                <a
                  href={`${APP_URL}/register`}
                  className="text-center bg-[#2563EB] text-white py-3 rounded-lg font-semibold no-underline"
                >
                  Começar grátis
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
