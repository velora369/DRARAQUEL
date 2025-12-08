import {
  Target,
  Leaf,
  BookOpen,
  HeartHandshake,
  Shield,
  Clock,
} from "lucide-react";

const differentials = [
  {
    icon: Target,
    title: "Planejamento Estético Personalizado",
    description:
      "Cada tratamento é planejado de forma única, considerando as características e desejos de cada paciente.",
  },
  {
    icon: Leaf,
    title: "Resultados Naturais",
    description:
      "Foco em realçar a beleza natural, evitando exageros e mantendo a harmonia facial.",
  },
  {
    icon: BookOpen,
    title: "Multiespecialização",
    description:
      "Formação em diversas áreas da odontologia e estética para oferecer tratamentos integrados.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento Acolhedor",
    description:
      "Ambiente confortável e atendimento humanizado, priorizando o bem-estar de cada paciente.",
  },
  {
    icon: Shield,
    title: "Técnicas Modernas e Seguras",
    description:
      "Utilização das técnicas mais avançadas e seguras do mercado, com produtos de alta qualidade.",
  },
  {
    icon: Clock,
    title: "+25 Anos de Experiência",
    description:
      "Décadas de prática e aprendizado contínuo garantem resultados excepcionais.",
  },
];

export default function DifferentialsSection() {
  return (
    <section
      id="diferenciais"
      className="py-20 lg:py-32 bg-accent/30"
      data-testid="section-differentials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-4 mb-16">
          <p className="text-secondary font-medium tracking-wide uppercase text-sm">
            Por que escolher a Dra. Raquel
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground"
            data-testid="text-differentials-title"
          >
            Diferenciais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compromisso com excelência e resultados que transformam vidas
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="text-center space-y-4"
              data-testid={`card-differential-${index}`}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
