import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const resultsSlides = [
  {
    id: "botox-1",
    title: "Botox (Toxina Botulínica)",
    description: "Suavização de linhas de expressão e elevação do olhar",
    imageUrl:
      "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2026/02/whatsapp-image-2026-02-10-at-22.06.09-1.webp",
  },
  {
    id: "botox-2",
    title: "Botox (Toxina Botulínica)",
    description: "Resultado natural com enfoque em rugas dinâmicas",
    imageUrl:
      "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2026/02/whatsapp-image-2026-02-10-at-22.06.09.webp",
  },
  {
    id: "preenchimento-1",
    title: "Preenchimento Labial",
    description: "Volume definido mantendo proporções harmônicas",
    imageUrl:
      "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2026/02/whatsapp-image-2026-02-10-at-22.06.10-1.webp",
  },
  {
    id: "preenchimento-2",
    title: "Preenchimento Labial",
    description: "Contorno labial refinado e hidratação profunda",
    imageUrl:
      "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2026/02/whatsapp-image-2026-02-10-at-22.06.10.webp",
  },
  {
    id: "preenchimento-3",
    title: "Preenchimento Labial",
    description: "Volume natural e proporções equilibradas",
    imageUrl:
      "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2026/02/whatsapp-image-2026-02-13-at-15.34.25-1.webp",
  },
  {
    id: "botox-3",
    title: "Botox (Toxina Botulínica)",
    description: "Rejuvenescimento facial com resultado natural",
    imageUrl:
      "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2026/02/whatsapp-image-2026-02-13-at-15.34.26-1.webp",
  },
  {
    id: "botox-4",
    title: "Botox (Toxina Botulínica)",
    description: "Suavização de rugas e linhas de expressão",
    imageUrl:
      "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2026/02/whatsapp-image-2026-02-13-at-15.34.26.webp",
  },
];

export default function ResultsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(resultsSlides[0]);
  const [isPaused, setIsPaused] = useState(false);
  const { ref, isVisible } = useScrollAnimation(0.1);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % resultsSlides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + resultsSlides.length) % resultsSlides.length
    );
  };

  const openViewer = (slide: (typeof resultsSlides)[number]) => {
    setActiveSlide(slide);
    setIsViewerOpen(true);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 2000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPaused, currentIndex]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <>
      <Dialog open={isViewerOpen} onOpenChange={setIsViewerOpen}>
        <DialogContent className="max-w-4xl overflow-hidden border-none bg-background p-0 shadow-2xl sm:rounded-[32px]">
          <div className="bg-background">
            <img
              src={activeSlide.imageUrl}
              alt={`Transformação ${activeSlide.title} em alta resolução`}
              className="h-full max-h-[80vh] w-full object-contain"
            />
            <div className="p-6 sm:p-8">
              <DialogTitle className="text-xl font-semibold text-foreground sm:text-2xl">
                {activeSlide.title}
              </DialogTitle>
              <DialogDescription className="mt-1 text-sm text-muted-foreground sm:text-base">
                {activeSlide.description}
              </DialogDescription>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <section
        id="resultados"
        ref={ref}
        className="py-20 lg:py-32 relative overflow-hidden"
        data-testid="section-results"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-accent/30 to-accent/20" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className={`text-center space-y-4 mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mx-auto">
              Transformações
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground"
              data-testid="text-results-title"
            >
              <span className="text-gradient">Resultados</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Veja algumas das transformações realizadas pela Dra. Raquel
            </p>
          </div>

          <div 
            className={`relative ${isVisible ? "animate-fade-in" : "opacity-0"}`} 
            style={{ animationDelay: "200ms" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleMouseEnter}
            onTouchEnd={handleMouseLeave}
          >
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {resultsSlides.map((result, index) => (
                  <div
                    key={result.id}
                    className="w-full flex-shrink-0 px-4 flex justify-center"
                    data-testid={`card-result-${result.id}`}
                  >
                    <div className="inline-flex flex-col glass-card rounded-3xl">
                      <div className={`pb-0 ${index === 2 ? 'pt-12 px-6' : 'p-6'}`}>
                        <img
                          src={result.imageUrl}
                          alt={`Transformação ${result.title}`}
                          style={{
                            clipPath: 'inset(0 round 24px)',
                            WebkitClipPath: 'inset(0 round 24px)',
                          }}
                          className="max-w-full h-auto block mx-auto lg:max-h-[45vh]"
                          loading="lazy"
                        />
                      </div>
                      <div className={`px-6 text-center space-y-3 ${index === 2 ? 'py-20' : 'py-8'}`}>
                        <h3 className="font-semibold text-foreground text-xl">
                          {result.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {result.description}
                        </p>
                        <button
                          type="button"
                          onClick={() => openViewer(result)}
                          className="inline-flex items-center justify-center text-xs font-medium text-primary underline-offset-4 hover:underline pt-2"
                        >
                          Ver imagem em alta resolução
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full hover-lift transition-all duration-300"
                data-testid="button-results-prev"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex gap-2">
                {resultsSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-primary scale-125" : "bg-muted hover:bg-muted-foreground/30"
                    }`}
                    data-testid={`button-results-dot-${index}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full hover-lift transition-all duration-300"
                data-testid="button-results-next"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            <div className="mt-8 flex justify-center">
              <div className="glass-card rounded-2xl px-6 py-4 max-w-md text-center">
                <p className="text-sm text-muted-foreground">
                  Imagens autorizadas pelos pacientes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
