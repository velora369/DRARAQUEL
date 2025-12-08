import { Home, Cpu, UserCheck, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const clinicHighlights = [
  {
    icon: Home,
    title: "Ambiente Acolhedor",
    description: "Espaço pensado para seu conforto",
  },
  {
    icon: Cpu,
    title: "Tecnologia Avançada",
    description: "Equipamentos de última geração",
  },
  {
    icon: UserCheck,
    title: "Atendimento Personalizado",
    description: "Cuidado individual para cada paciente",
  },
  {
    icon: Star,
    title: "Estrutura Premium",
    description: "Alto padrão em todos os detalhes",
  },
];

export default function OrallisSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="orallis"
      ref={ref}
      className="py-20 lg:py-32 bg-card relative overflow-hidden"
      data-testid="section-orallis"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={`space-y-8 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <div className="space-y-4">
              <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                Espaço de Atendimento
              </p>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground"
                data-testid="text-orallis-title"
              >
                A Dra. Raquel atende na <span className="text-gradient">Orallis Unique</span>
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Dra. Raquel realiza seus atendimentos na Orallis Unique, um
                espaço pensado para proporcionar conforto, acolhimento e
                tecnologia de ponta em estética oral e facial.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A Orallis é o ambiente onde a doutora pratica seu cuidado
                especializado — mas este site é dedicado exclusivamente ao
                trabalho da Dra. Raquel.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {clinicHighlights.map((item, index) => (
                <div
                  key={index}
                  className={`glass-card p-4 rounded-2xl flex items-center gap-4 hover-lift transition-all duration-300 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                  data-testid={`card-orallis-${index}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/10 flex items-center justify-center flex-shrink-0 icon-container">
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">
                      {item.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`grid grid-cols-2 gap-4 ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
            <div className="space-y-4">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted shadow-lg">
                <img
                  src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/12/whatsapp-image-2025-12-08-at-02.42.04.webp"
                  alt="Logo Orallis Unique"
                  className="w-full h-full object-contain bg-white p-6"
                  loading="lazy"
                  data-testid="img-orallis-logo"
                />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex flex-col items-center justify-center shadow-lg">
                <div className="text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-2">
                    <Home className="w-6 h-6 text-muted-foreground/50" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Foto do espaço
                  </p>
                  <p className="text-xs text-muted-foreground/70">Em breve</p>
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-secondary/10 to-primary/10 flex flex-col items-center justify-center shadow-lg">
                <div className="text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-2">
                    <Star className="w-6 h-6 text-muted-foreground/50" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Foto da recepção
                  </p>
                  <p className="text-xs text-muted-foreground/70">Em breve</p>
                </div>
              </div>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-accent/40 to-muted flex flex-col items-center justify-center shadow-lg">
                <div className="text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-2">
                    <Cpu className="w-6 h-6 text-muted-foreground/50" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Foto do consultório
                  </p>
                  <p className="text-xs text-muted-foreground/70">Em breve</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
