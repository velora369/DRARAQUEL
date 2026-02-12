import { useState } from "react";
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
];

export default function ResultsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(resultsSlides[0]);
  const { ref, isVisible } = useScrollAnimation(0.1);

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

  return (
    <>
      <Dialog open={isViewerOpen} onOpenChange={setIsViewerOpen}>
        <DialogContent className="max-w-4xl overflow-hidden border-none bg-background p-0 shadow-2xl sm:rounded-[32px]">
          <div className="relative bg-background">
            <img
              src={activeSlide.imageUrl}
              alt={`Transformação ${activeSlide.title} em alta resolução`}
              className="h-full max-h-[80vh] w-full object-contain bg-black/5"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/80 to-transparent p-6 sm:p-8">
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

          <div className={`relative ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {resultsSlides.map((result) => (
                  <div
                    key={result.id}
                    className="w-full flex-shrink-0 px-2 flex justify-center"
                    data-testid={`card-result-${result.id}`}
                  >
                    <div className="glass-card rounded-3xl overflow-hidden shadow-xl w-full max-w-3xl">
                      <div className="p-6 lg:p-8">
                        <div className="relative aspect-[4/3] lg:aspect-[3/2] xl:aspect-[5/3] rounded-3xl overflow-hidden shadow-lg max-h-[480px] mx-auto">
                          <img
                            src={result.imageUrl}
                            alt={`Transformação ${result.title}`}
                            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
                        </div>
                      </div>
                      <div className="p-6 pt-0 text-center">
                        <h3 className="font-semibold text-foreground text-lg">
                          {result.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{result.description}</p>
                        <button
                          type="button"
                          onClick={() => openViewer(result)}
                          className="inline-flex items-center justify-center text-xs font-medium text-primary underline-offset-4 hover:underline mt-4"
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
          </div>
        </div>
      </section>
    </>
  );
}
