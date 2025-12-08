import { Award, GraduationCap, RefreshCw, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const highlights = [
  {
    icon: Award,
    title: "+25 anos",
    description: "de experiência",
  },
  {
    icon: GraduationCap,
    title: "Diversas",
    description: "especializações",
  },
  {
    icon: RefreshCw,
    title: "Atualizações",
    description: "constantes",
  },
  {
    icon: Sparkles,
    title: "Foco em",
    description: "naturalidade",
  },
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="sobre"
      ref={ref}
      className="py-20 lg:py-32 bg-card relative overflow-hidden"
      data-testid="section-about"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={`relative order-2 lg:order-1 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-muted shadow-2xl">
              <img
                src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/12/sua-melhor-versao-nao-e-quando-vc-esta-com-sua-melhor-roupa-ou-maquiageme280a6-e-assim-quando-vc-se-.webp"
                alt="Dra. Raquel Saraiva"
                className="w-full h-full object-cover"
                loading="lazy"
                data-testid="img-about-dra"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full gradient-primary opacity-20 blur-xl" />
          </div>

          <div className={`space-y-8 order-1 lg:order-2 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <div className="space-y-4">
              <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                Quem sou eu
              </p>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground"
                data-testid="text-about-title"
              >
                Sobre a <span className="text-gradient">Dra. Raquel Saraiva</span>
              </h2>
            </div>

            <p
              className="text-lg text-muted-foreground leading-relaxed"
              data-testid="text-about-description"
            >
              Cirurgiã-dentista formada há mais de 25 anos, com especialização
              em prótese, endodontia, implantodontia e harmonização orofacial.
              Realiza atualizações constantes com os melhores profissionais do
              Brasil e do mundo. Atua com um olhar detalhado, buscando
              resultados sutis, seguros e totalmente alinhados à beleza natural
              de cada paciente.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`glass-card p-4 rounded-2xl flex items-center gap-4 hover-lift transition-all duration-300 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                  data-testid={`card-highlight-${index}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 icon-container">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
