import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

// todo: remove mock functionality - replace with real before/after images
const mockResults = [
  {
    id: 1,
    title: "Harmonização Orofacial",
    description: "Resultado sutil e natural",
  },
  {
    id: 2,
    title: "Preenchimento Labial",
    description: "Volume equilibrado e harmonioso",
  },
  {
    id: 3,
    title: "Reabilitação Oral",
    description: "Sorriso completamente renovado",
  },
  {
    id: 4,
    title: "Rejuvenescimento Facial",
    description: "Suavização de linhas de expressão",
  },
];

export default function ResultsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation(0.1);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % mockResults.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + mockResults.length) % mockResults.length
    );
  };

  return (
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
              {mockResults.map((result) => (
                <div
                  key={result.id}
                  className="w-full flex-shrink-0 px-2"
                  data-testid={`card-result-${result.id}`}
                >
                  <div className="glass-card rounded-3xl overflow-hidden shadow-xl">
                    <div className="grid md:grid-cols-2 gap-4 p-6 lg:p-8">
                      <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-muted to-card flex flex-col items-center justify-center gap-3 shadow-inner">
                        <div className="w-16 h-16 rounded-full bg-muted-foreground/10 flex items-center justify-center">
                          <ImageIcon className="w-8 h-8 text-muted-foreground/40" />
                        </div>
                        <p className="text-sm font-medium text-muted-foreground">Antes</p>
                        <p className="text-xs text-muted-foreground/70">
                          Em breve
                        </p>
                      </div>
                      <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex flex-col items-center justify-center gap-3 shadow-inner">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                          <ImageIcon className="w-8 h-8 text-primary/40" />
                        </div>
                        <p className="text-sm font-medium text-muted-foreground">Depois</p>
                        <p className="text-xs text-muted-foreground/70">
                          Em breve
                        </p>
                      </div>
                    </div>
                    <div className="p-6 pt-0 text-center">
                      <h3 className="font-semibold text-foreground text-lg">
                        {result.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {result.description}
                      </p>
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
              {mockResults.map((_, index) => (
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
  );
}
