import { Button } from "@/components/ui/button";
import { ArrowDown, Check, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const bulletPoints = [
  "Reabilitação oral integrada",
  "Preenchimento labial natural",
  "Harmonização orofacial completa",
  "Atendimento acolhedor e individualizado",
];

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const scrollToTreatments = () => {
    const element = document.querySelector("#tratamentos");
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      ref={ref}
      className="min-h-screen pt-24 lg:pt-32 pb-16 lg:pb-24 flex items-center relative overflow-hidden"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 gradient-soft" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className={`space-y-8 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium tracking-wide">
                  Dra. Raquel Saraiva
                </span>
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground"
                data-testid="text-hero-title"
              >
                <span className="block leading-tight">Harmonização e estética facial</span>
                <span className="block leading-tight mt-2">para <span className="text-gradient">realçar sua beleza</span></span>
                <span className="block leading-tight mt-2">com naturalidade</span>
              </h1>
            </div>

            <p
              className="text-lg text-muted-foreground leading-relaxed max-w-xl"
              data-testid="text-hero-subtitle"
            >
              Com mais de 25 anos de experiência, a Dra. Raquel une odontologia,
              estética e técnicas avançadas de rejuvenescimento para suavizar
              marcas e valorizar a beleza natural de cada paciente.
            </p>

            <ul className="space-y-3">
              {bulletPoints.map((point, index) => (
                <li
                  key={index}
                  className={`flex items-center gap-3 text-foreground ${isVisible ? "animate-slide-up" : "opacity-0"}`}
                  style={{ animationDelay: `${200 + index * 100}ms` }}
                  data-testid={`text-bullet-${index}`}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 icon-container">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() =>
                  window.open("https://wa.me/5561982184800", "_blank")
                }
                className="gap-2 rounded-full gradient-primary border-0 hover-glow hover-scale transition-all duration-300 shadow-lg"
                data-testid="button-whatsapp-hero"
              >
                <FaWhatsapp className="w-5 h-5" />
                Agendar no WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToTreatments}
                className="gap-2 rounded-full hover-lift transition-all duration-300"
                data-testid="button-treatments-hero"
              >
                <ArrowDown className="w-5 h-5" />
                Ver Tratamentos
              </Button>
            </div>
          </div>

          <div className={`relative ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "300ms" }}>
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted shadow-2xl">
              <img
                src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/12/nao-e-a-aparencia-e-a-essencia.-nao-e-o-dinheiro-e-a-educacao.-nao-e-a-roupa-e-a-classe.-c.webp"
                alt="Dra. Raquel Saraiva - Especialista em Harmonização Orofacial"
                className="w-full h-full object-cover"
                loading="eager"
                data-testid="img-hero-dra"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl shadow-xl animate-float">
              <p className="text-4xl font-bold text-gradient">+25</p>
              <p className="text-sm text-muted-foreground">
                anos de experiência
              </p>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full gradient-primary opacity-20 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
