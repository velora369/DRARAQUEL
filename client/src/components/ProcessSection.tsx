import { ClipboardCheck, Palette, Wand2, Heart } from "lucide-react";

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
  return (
    <section
      className="py-20 lg:py-32 bg-background"
      data-testid="section-process"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-4 mb-16">
          <p className="text-secondary font-medium tracking-wide uppercase text-sm">
            Como Funciona
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground"
            data-testid="text-process-title"
          >
            Entenda o Atendimento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um processo cuidadoso e transparente do início ao fim
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative text-center space-y-4"
                data-testid={`card-step-${index}`}
              >
                <div className="relative inline-block">
                  <div className="w-20 h-20 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center mx-auto shadow-lg">
                    <step.icon className="w-8 h-8" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">
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
