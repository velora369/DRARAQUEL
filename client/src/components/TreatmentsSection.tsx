import { Badge } from "@/components/ui/badge";
import { Heart, Sparkles, Crown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const mainTreatments = [
  {
    icon: Crown,
    title: "Reabilitação Oral",
    description:
      "Restauração completa da função e estética dental, devolvendo confiança ao seu sorriso com técnicas modernas e materiais de alta qualidade.",
    badge: "Principal",
  },
  {
    icon: Heart,
    title: "Preenchimento Labial Natural",
    description:
      "Valorização dos lábios com técnicas que respeitam a harmonia facial, proporcionando resultados naturais e elegantes.",
    badge: "Popular",
  },
  {
    icon: Sparkles,
    title: "Harmonização Orofacial Completa",
    description:
      "Tratamento integrado que equilibra proporções faciais, suaviza marcas de expressão e realça a beleza natural.",
    badge: "Destaque",
  },
];

const otherServices = [
  {
    title: "Dentística",
    description: "Restaurações estéticas e funcionais",
  },
  {
    title: "Prótese",
    description: "Próteses fixas e removíveis",
  },
  {
    title: "Endodontia",
    description: "Tratamento de canal especializado",
  },
  {
    title: "Ortodontia",
    description: "Alinhamento e correção dental",
  },
  {
    title: "Implantodontia",
    description: "Implantes dentários modernos",
  },
  {
    title: "Cirurgia Bucomaxilofacial",
    description: "Procedimentos cirúrgicos especializados",
  },
];

export default function TreatmentsSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="tratamentos"
      ref={ref}
      className="py-20 lg:py-32 bg-background relative overflow-hidden"
      data-testid="section-treatments"
    >
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center space-y-4 mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mx-auto">
            Tratamentos
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground"
            data-testid="text-treatments-title"
          >
            Nossos <span className="text-gradient">Tratamentos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Procedimentos personalizados com foco em resultados naturais e
            duradouros
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {mainTreatments.map((treatment, index) => (
            <div
              key={index}
              className={`glass-card rounded-3xl p-6 hover-lift hover-glow transition-all duration-300 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: `${200 + index * 100}ms` }}
              data-testid={`card-treatment-main-${index}`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center icon-container">
                    <treatment.icon className="w-7 h-7 text-primary" />
                  </div>
                  <Badge variant="secondary" className="rounded-full text-xs">
                    {treatment.badge}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-foreground">{treatment.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {treatment.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className={`text-2xl font-semibold text-foreground text-center mb-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            Outros Serviços
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherServices.map((service, index) => (
              <div
                key={index}
                className={`glass-card p-4 rounded-2xl hover-lift transition-all duration-300 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: `${400 + index * 50}ms` }}
                data-testid={`card-service-${index}`}
              >
                <p className="font-medium text-foreground">{service.title}</p>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
