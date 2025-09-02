export function Footer() {
  const socialLinks = [
    { name: "Facebook", href: "#", icon: "📘" },
    { name: "Instagram", href: "#", icon: "📷" },
    { name: "LinkedIn", href: "#", icon: "💼" },
    { name: "YouTube", href: "#", icon: "📺" },
  ];

  const quickLinks = [
    { name: "Sobre Nós", href: "#about" },
    { name: "Programas", href: "#programs" },
    { name: "Transparência", href: "#transparency" },
    { name: "Notícias", href: "#news" },
    { name: "Contato", href: "#contact" },
  ];

  const supportLinks = [
    { name: "Como Doar", href: "#donate" },
    { name: "Voluntariado", href: "#volunteer" },
    { name: "Parcerias", href: "#partnerships" },
    { name: "FAQ", href: "#faq" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <div>
                <h3 className="text-xl font-bold">SEMA</h3>
                <p className="text-sm text-gray-400">
                  Sociedade de Apoio a<br />Crianças e Jovens
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transformando vidas através da educação, cultura e apoio social há mais de 15 anos.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Como Ajudar</h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start space-x-2">
                <span>📍</span>
                <div>
                  <p>Rua das Flores, 123</p>
                  <p>Vila Esperança - São Paulo/SP</p>
                  <p>CEP: 01234-567</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <p>(11) 3456-7890</p>
              </div>
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <p>contato@sema.org.br</p>
              </div>
              <div className="flex items-center space-x-2">
                <span>🕒</span>
                <div>
                  <p>Segunda a Sexta: 8h às 17h</p>
                  <p>Sábados: 8h às 12h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p>© 2024 SEMA - Sociedade de Apoio a Crianças e Jovens</p>
              <p>CNPJ: 12.345.678/0001-90 | Todos os direitos reservados</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Política de Privacidade
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Termos de Uso
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Transparência
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}