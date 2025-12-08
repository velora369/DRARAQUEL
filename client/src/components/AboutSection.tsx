import { Card } from "@/components/ui/card";
import { Award, GraduationCap, RefreshCw, Sparkles } from "lucide-react";

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
  return (
    <section
      id="sobre"
      className="py-20 lg:py-32 bg-card"
      data-testid="section-about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[3/4] rounded-md overflow-hidden bg-muted">
              <img
                src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/12/sua-melhor-versao-nao-e-quando-vc-esta-com-sua-melhor-roupa-ou-maquiageme280a6-e-assim-quando-vc-se-.webp"
                alt="Dra. Raquel Saraiva"
                className="w-full h-full object-cover"
                data-testid="img-about-dra"
              />
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <p className="text-secondary font-medium tracking-wide uppercase text-sm">
                Quem sou eu
              </p>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground"
                data-testid="text-about-title"
              >
                Sobre a Dra. Raquel Saraiva
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
                <Card
                  key={index}
                  className="p-4 flex items-center gap-4"
                  data-testid={`card-highlight-${index}`}
                >
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
