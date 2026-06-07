const APP_URL = 'https://app.tivora.com.br';

const footerLinks = [
  {
    title: 'Produto',
    links: [
      { label: 'Módulos', href: '#modulos' },
      { label: 'IA Tivora', href: '#' },
      { label: 'Como funciona', href: '#como-funciona' },
      { label: 'Planos', href: '#planos' },
    ],
  },
  {
    title: 'Negócios',
    links: [
      { label: 'Açaiterias', href: '#' },
      { label: 'Lanchonetes', href: '#' },
      { label: 'Pizzarias', href: '#' },
      { label: 'Bares e Mercados', href: '#' },
    ],
  },
  {
    title: 'Suporte',
    links: [
      { label: 'Central de ajuda', href: '#' },
      { label: 'Contato', href: '#' },
      { label: 'Política de privacidade', href: '#' },
      { label: 'Termos de uso', href: '#' },
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
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-2.5 no-underline mb-5 w-fit" aria-label="Tivora">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center shadow-lg shadow-blue-600/25">
                <span className="text-white font-black text-sm leading-none">T</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">Tivora</span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">
              Plataforma de gestão inteligente para pequenos negócios.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map(group => (
            <div key={group.title}>
              <p className="text-slate-300 font-semibold text-sm mb-4">{group.title}</p>
              <ul className="space-y-2.5">
                {group.links.map(link => (
                  <li key={link.label}>
                    {link.href.startsWith('#') ? (
                      <button
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
          <p className="text-slate-600 text-sm">© 2025 Tivora. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <a href={`${APP_URL}/login`} className="text-slate-600 hover:text-slate-300 text-sm transition-colors no-underline">
              Entrar
            </a>
            <a href={`${APP_URL}/register`} className="text-slate-600 hover:text-slate-300 text-sm transition-colors no-underline">
              Criar conta
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
