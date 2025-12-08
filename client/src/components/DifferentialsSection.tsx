import {
  Target,
  Leaf,
  BookOpen,
  HeartHandshake,
  Shield,
  Clock,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

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
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="diferenciais"
      ref={ref}
      className="py-20 lg:py-32 relative overflow-hidden"
      data-testid="section-differentials"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-accent/30 to-accent/20" />
      <div className="absolute top-20 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center space-y-4 mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mx-auto">
            Por que escolher a Dra. Raquel
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground"
            data-testid="text-differentials-title"
          >
            <span className="text-gradient">Diferenciais</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compromisso com excelência e resultados que transformam vidas
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <div
              key={index}
              className={`text-center space-y-4 group ${isVisible ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: `${200 + index * 100}ms` }}
              data-testid={`card-differential-${index}`}
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 via-primary/20 to-secondary/10 flex items-center justify-center mx-auto icon-container group-hover:shadow-lg transition-all duration-300">
                <item.icon className="w-9 h-9 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-gradient transition-all duration-300">
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
