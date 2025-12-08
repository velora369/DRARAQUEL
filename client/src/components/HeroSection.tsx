import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowDown, CheckCircle2 } from "lucide-react";

const bulletPoints = [
  "Reabilitação oral integrada",
  "Preenchimento labial natural",
  "Harmonização orofacial completa",
  "Atendimento acolhedor e individualizado",
];

export default function HeroSection() {
  const scrollToTreatments = () => {
    const element = document.querySelector("#tratamentos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="min-h-screen pt-20 lg:pt-24 pb-16 lg:pb-24 flex items-center bg-gradient-to-br from-background via-background to-accent/30"
      data-testid="section-hero"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-secondary font-medium tracking-wide uppercase text-sm">
                Dra. Raquel Saraiva
              </p>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight"
                data-testid="text-hero-title"
              >
                Harmonização e estética facial para{" "}
                <span className="text-primary">realçar sua beleza</span> com
                naturalidade
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
                  className="flex items-center gap-3 text-foreground"
                  data-testid={`text-bullet-${index}`}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
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
                className="gap-2"
                data-testid="button-whatsapp-hero"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar no WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToTreatments}
                className="gap-2"
                data-testid="button-treatments-hero"
              >
                <ArrowDown className="w-5 h-5" />
                Ver Tratamentos
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-md overflow-hidden bg-muted">
              <img
                src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/12/nao-e-a-aparencia-e-a-essencia.-nao-e-o-dinheiro-e-a-educacao.-nao-e-a-roupa-e-a-classe.-c.webp"
                alt="Dra. Raquel Saraiva - Especialista em Harmonização Orofacial"
                className="w-full h-full object-cover"
                data-testid="img-hero-dra"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-md shadow-lg border border-card-border">
              <p className="text-4xl font-bold text-primary">+25</p>
              <p className="text-sm text-muted-foreground">
                anos de experiência
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
