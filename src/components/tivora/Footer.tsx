const APP_URL = 'https://app.tivora.com.br';

const footerLinks = [
  {
    title: 'Produto',
    links: [
      { label: 'Módulos', href: '#modulos' },
      { label: 'IA Tivora', href: '#modulos' },
      { label: 'Como funciona', href: '#como-funciona' },
      { label: 'Planos', href: '#planos' },
    ],
  },
  {
    title: 'Negócios',
    links: [
      { label: 'Açaiterias', href: '#solucao' },
      { label: 'Lanchonetes', href: '#solucao' },
      { label: 'Pizzarias', href: '#solucao' },
      { label: 'Bares e Mercados', href: '#solucao' },
    ],
  },
  {
    title: 'Suporte',
    links: [
      { label: 'Central de ajuda', href: 'mailto:suporte@tivora.com.br' },
      { label: 'Contato', href: 'mailto:contato@tivora.com.br' },
      { label: 'Política de privacidade', href: '/privacidade' },
      { label: 'Termos de uso', href: '/termos' },
    ],
  },
];

function scrollTo(id: string) {
  if (id.startsWith('#')) {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}

export function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-white/8 text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a
              href="/"
              className="flex items-center no-underline mb-5 w-fit"
              aria-label="Tivora"
            >
              <img
              src="/logo_tivora_transparente.png"
              alt="Tivora"
              className="h-14 sm:h-16 w-auto object-contain transition-opacity duration-200 group-hover:opacity-90"
            />
          </a>

            <p className="text-slate-500 text-sm leading-relaxed max-w-[220px]">
              Plataforma de gestão inteligente para pequenos negócios.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <p className="text-slate-300 font-semibold text-sm mb-4">
                {group.title}
              </p>

              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('#') ? (
                      <button
                        type="button"
                        onClick={() => scrollTo(link.href)}
                        className="text-slate-500 hover:text-slate-200 text-sm transition-colors"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-slate-500 hover:text-slate-200 text-sm transition-colors no-underline"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-white/8">
          <p className="text-slate-600 text-sm">
            © 2026 Tivora. Todos os direitos reservados.
          </p>

          <div className="flex gap-5">
            <a
              href={`${APP_URL}/login`}
              className="text-slate-600 hover:text-slate-300 text-sm transition-colors no-underline"
            >
              Entrar
            </a>

            <a
              href={`${APP_URL}/register`}
              className="text-slate-600 hover:text-slate-300 text-sm transition-colors no-underline"
            >
              Criar conta
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
