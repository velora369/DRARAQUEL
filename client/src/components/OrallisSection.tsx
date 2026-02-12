import { useState, useEffect } from "react";
import { Home, Cpu, UserCheck, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

const orallisImages = [
  {
    src: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/12/whatsapp-image-2025-12-08-at-02.42.04.webp",
    alt: "Logo Orallis Unique",
    title: "Orallis Unique",
    description: "Logo da clínica",
  },
  {
    src: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2026/01/imagem-oralis-2.webp",
    alt: "Sala de espera Orallis Unique",
    title: "Sala de Espera",
    description: "Ambiente acolhedor e confortável",
  },
  {
    src: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2026/01/recepcao-3.webp",
    alt: "Detalhes da recepção Orallis Unique",
    title: "Recepção",
    description: "Detalhes da recepção",
  },
];

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(orallisImages[0]);

  // Carrossel automático a cada 2 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % orallisImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const openViewer = (image: (typeof orallisImages)[number]) => {
    setActiveImage(image);
    setIsViewerOpen(true);
  };

  return (
    <>
      <Dialog open={isViewerOpen} onOpenChange={setIsViewerOpen}>
        <DialogContent className="max-w-4xl overflow-hidden border-none bg-background p-0 shadow-2xl sm:rounded-[32px]">
          <div className="relative bg-background">
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="h-full max-h-[80vh] w-full object-contain bg-black/5"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/80 to-transparent p-6 sm:p-8">
              <DialogTitle className="text-xl font-semibold text-foreground sm:text-2xl">
                {activeImage.title}
              </DialogTitle>
              <DialogDescription className="mt-1 text-sm text-muted-foreground sm:text-base">
                {activeImage.description}
              </DialogDescription>
            </div>
          </div>
        </DialogContent>
      </Dialog>

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

          <div
            className={`relative flex justify-center ${isVisible ? "animate-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "200ms" }}
          >
            <div className="absolute -top-10 -right-14 h-48 w-48 rounded-full bg-gradient-to-br from-secondary/20 via-primary/10 to-transparent blur-3xl sm:blur-[100px]" />
            <div className="absolute bottom-0 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/10 via-secondary/20 to-transparent blur-3xl sm:blur-[90px]" />

            <button
              onClick={() => openViewer(orallisImages[currentImageIndex])}
              className="relative w-auto h-auto rounded-[32px] overflow-hidden shadow-2xl group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl"
              data-testid="img-orallis-carousel"
            >
              <div className="relative">
                {orallisImages.map((image, index) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    className={`max-h-[600px] w-auto mx-auto rounded-[32px] transition-all duration-700 ${
                      index === currentImageIndex
                        ? "opacity-100 scale-100 block"
                        : "opacity-0 scale-95 absolute inset-0"
                    }`}
                    loading="lazy"
                  />
                ))}
              </div>
              
              {/* Indicadores do carrossel */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 pointer-events-none">
                {orallisImages.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "w-8 bg-secondary"
                        : "w-2 bg-secondary/30"
                    }`}
                  />
                ))}
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
