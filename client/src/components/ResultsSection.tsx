import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const SWIPE_THRESHOLD = 50;

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
      "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2026/02/whatsapp-image-2026-02-20-at-15.17.30-1.webp",
  },
  {
    id: "botox-4",
    title: "Botox (Toxina Botulínica)",
    description: "Suavização de rugas e linhas de expressão",
    imageUrl:
      "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2026/02/whatsapp-image-2026-02-20-at-15.17.30.webp",
  },
];

export default function ResultsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(resultsSlides[0]);
  const [isPaused, setIsPaused] = useState(false);
  const { ref, isVisible } = useScrollAnimation(0.1);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef<number>(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % resultsSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + resultsSlides.length) % resultsSlides.length
    );
  }, []);

  const handleButtonClick = (e: React.MouseEvent, action: () => void) => {
    e.preventDefault();
    e.stopPropagation();
    action();
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
  }, [isPaused, currentIndex, nextSlide]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    isDragging.current = false;
  };

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > SWIPE_THRESHOLD) {
      if (deltaX < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
    setIsPaused(false);
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    setIsPaused(true);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const deltaX = e.clientX - dragStartX.current;
    if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
      if (deltaX < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  return (
    <>
      <Dialog open={isViewerOpen} onOpenChange={setIsViewerOpen}>
        <DialogContent className="max-w-2xl overflow-hidden border border-white/10 bg-black/90 backdrop-blur-xl p-0 shadow-2xl sm:rounded-[28px]">
          <div className="flex flex-col">
            <img
              src={activeSlide.imageUrl}
              alt={`Transformação ${activeSlide.title}`}
              className="w-full max-h-[70vh] object-contain"
            />
            <div className="px-6 py-4 border-t border-white/10 flex items-center justify-center">
              <DialogTitle className="text-sm font-light tracking-[0.25em] uppercase text-white/80">
                {activeSlide.title}
              </DialogTitle>
              <DialogDescription className="sr-only">
                {activeSlide.title}
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
          >
            <div 
              className="overflow-hidden rounded-3xl cursor-grab active:cursor-grabbing select-none"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
            >
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
                          className={`max-w-full h-auto block mx-auto ${index === 5 || index === 6 ? 'lg:max-h-[62vh]' : 'lg:max-h-[45vh]'}`}
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
                          className="inline-flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase text-primary/70 hover:text-primary transition-colors pt-1"
                        >
                          <span className="w-4 h-px bg-primary/50" />
                          Ver resultado completo
                          <span className="w-4 h-px bg-primary/50" />
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
                onClick={(e) => handleButtonClick(e, prevSlide)}
                className="rounded-full hover-lift transition-all duration-300"
                data-testid="button-results-prev"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex gap-2">
                {resultsSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => { e.preventDefault(); setCurrentIndex(index); }}
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
                onClick={(e) => handleButtonClick(e, nextSlide)}
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
