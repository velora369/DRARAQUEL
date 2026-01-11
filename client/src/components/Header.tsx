import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre a Dra", href: "#sobre" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Orallis Unique", href: "#orallis" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href);
      for (const section of sections.reverse()) {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "glass shadow-lg py-2"
          : "bg-transparent py-4"
        }`}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("#inicio")}
            className="flex items-center gap-2 group"
            data-testid="link-home"
          >
            <span className="font-serif text-lg lg:text-xl font-semibold text-foreground group-hover:text-gradient transition-all duration-300 whitespace-nowrap">
              Dra. Raquel Saraiva
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap ${activeSection === item.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
                data-testid={`link-nav-${item.href.replace("#", "")}`}
              >
                {item.label}
                {activeSection === item.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary animate-scale-in" />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              onClick={() => window.open("https://wa.me/5561982184800", "_blank")}
              size="sm"
              className="hidden sm:flex gap-2 rounded-full gradient-primary border-0 hover-glow transition-all duration-300"
              data-testid="button-whatsapp-header"
            >
              <FaWhatsapp className="w-4 h-4" />
              Agendar Avaliação
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              <div className="relative w-5 h-5">
                <X className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`} />
                <Menu className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"}`} />
              </div>
            </Button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        data-testid="nav-mobile"
      >
        <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1 glass-card mt-2 mx-4 rounded-2xl">
          {navItems.map((item, index) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`px-4 py-3 text-left rounded-xl transition-all duration-300 ${activeSection === item.href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted"
                }`}
              style={{ animationDelay: `${index * 50}ms` }}
              data-testid={`link-nav-mobile-${item.href.replace("#", "")}`}
            >
              {item.label}
            </button>
          ))}
          <Button
            onClick={() => window.open("https://wa.me/5561982184800", "_blank")}
            className="mt-3 gap-2 rounded-full gradient-primary"
            data-testid="button-whatsapp-mobile"
          >
            <FaWhatsapp className="w-4 h-4" />
            Agendar Avaliação
          </Button>
        </nav>
      </div>
    </header>
  );
}
