import { Card } from "@/components/ui/card";
import { Home, Cpu, UserCheck, Star } from "lucide-react";

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
  return (
    <section
      id="orallis"
      className="py-20 lg:py-32 bg-card"
      data-testid="section-orallis"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-secondary font-medium tracking-wide uppercase text-sm">
                Espaço de Atendimento
              </p>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground"
                data-testid="text-orallis-title"
              >
                A Dra. Raquel atende na Orallis Unique
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
                <Card
                  key={index}
                  className="p-4 flex items-center gap-4"
                  data-testid={`card-orallis-${index}`}
                >
                  <div className="w-10 h-10 rounded-md bg-secondary/20 flex items-center justify-center flex-shrink-0">
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
                </Card>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[4/5] rounded-md overflow-hidden bg-muted">
                <img
                  src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/12/whatsapp-image-2025-12-08-at-02.42.04.webp"
                  alt="Logo Orallis Unique"
                  className="w-full h-full object-contain bg-white p-4"
                  data-testid="img-orallis-logo"
                />
              </div>
              <div className="aspect-square rounded-md overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center p-4">
                  <p className="text-sm text-muted-foreground">
                    Foto do espaço
                  </p>
                  <p className="text-xs text-muted-foreground/70">Em breve</p>
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square rounded-md overflow-hidden bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                <div className="text-center p-4">
                  <p className="text-sm text-muted-foreground">
                    Foto da recepção
                  </p>
                  <p className="text-xs text-muted-foreground/70">Em breve</p>
                </div>
              </div>
              <div className="aspect-[4/5] rounded-md overflow-hidden bg-gradient-to-br from-accent/40 to-muted flex items-center justify-center">
                <div className="text-center p-4">
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
