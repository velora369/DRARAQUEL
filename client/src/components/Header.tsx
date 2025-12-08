import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre a Dra.", href: "#sobre" },
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-background"
      }`}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button
            onClick={() => scrollToSection("#inicio")}
            className="flex items-center gap-2"
            data-testid="link-home"
          >
            <span className="font-serif text-xl lg:text-2xl font-semibold text-foreground">
              Dra. Raquel Saraiva
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="px-3 py-2 text-sm text-muted-foreground hover-elevate active-elevate-2 rounded-md transition-colors"
                data-testid={`link-nav-${item.href.replace("#", "")}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              onClick={() => window.open("https://wa.me/5561982184800", "_blank")}
              className="hidden sm:flex gap-2"
              data-testid="button-whatsapp-header"
            >
              <MessageCircle className="w-4 h-4" />
              Agendar Avaliação
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="lg:hidden bg-background border-t"
          data-testid="nav-mobile"
        >
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-3 text-left text-muted-foreground hover-elevate active-elevate-2 rounded-md transition-colors"
                data-testid={`link-nav-mobile-${item.href.replace("#", "")}`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => window.open("https://wa.me/5561982184800", "_blank")}
              className="mt-3 gap-2"
              data-testid="button-whatsapp-mobile"
            >
              <MessageCircle className="w-4 h-4" />
              Agendar Avaliação
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
