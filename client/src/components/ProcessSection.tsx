import { ClipboardCheck, Palette, Wand2, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Avaliação Completa",
    description:
      "Análise detalhada das suas necessidades, expectativas e histórico para entender o melhor caminho.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Planejamento Personalizado",
    description:
      "Desenvolvimento de um plano de tratamento único, alinhado aos seus objetivos e características.",
  },
  {
    number: "03",
    icon: Wand2,
    title: "Procedimentos Avançados",
    description:
      "Execução dos tratamentos com técnicas modernas, precisão e máximo cuidado.",
  },
  {
    number: "04",
    icon: Heart,
    title: "Acompanhamento Pós-Tratamento",
    description:
      "Suporte contínuo para garantir resultados duradouros e sua total satisfação.",
  },
];

export default function ProcessSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      className="py-20 lg:py-32 bg-background relative overflow-hidden"
      data-testid="section-process"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center space-y-4 mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mx-auto">
            Como Funciona
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground"
            data-testid="text-process-title"
          >
            Entenda o <span className="text-gradient">Atendimento</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um processo cuidadoso e transparente do início ao fim
          </p>
        </div>

        <div className="relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative text-center space-y-4 group ${isVisible ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: `${200 + index * 150}ms` }}
                data-testid={`card-step-${index}`}
              >
                <div className="relative inline-block">
                  <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300 icon-container">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-background border-2 border-secondary text-secondary text-sm font-bold flex items-center justify-center shadow-lg">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-gradient transition-all duration-300">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
