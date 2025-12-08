import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";

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
      className="py-20 lg:py-32 bg-accent/30"
      data-testid="section-results"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-4 mb-16">
          <p className="text-secondary font-medium tracking-wide uppercase text-sm">
            Transformações
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground"
            data-testid="text-results-title"
          >
            Resultados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja algumas das transformações realizadas pela Dra. Raquel
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {mockResults.map((result) => (
                <div
                  key={result.id}
                  className="w-full flex-shrink-0 px-2"
                  data-testid={`card-result-${result.id}`}
                >
                  <Card className="overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-4 p-6">
                      <div className="aspect-[4/3] rounded-md bg-gradient-to-br from-muted to-card flex flex-col items-center justify-center gap-2">
                        <ImageIcon className="w-12 h-12 text-muted-foreground/50" />
                        <p className="text-sm text-muted-foreground">Antes</p>
                        <p className="text-xs text-muted-foreground/70">
                          Em breve
                        </p>
                      </div>
                      <div className="aspect-[4/3] rounded-md bg-gradient-to-br from-primary/10 to-secondary/10 flex flex-col items-center justify-center gap-2">
                        <ImageIcon className="w-12 h-12 text-muted-foreground/50" />
                        <p className="text-sm text-muted-foreground">Depois</p>
                        <p className="text-xs text-muted-foreground/70">
                          Em breve
                        </p>
                      </div>
                    </div>
                    <div className="p-6 pt-0 text-center">
                      <h3 className="font-semibold text-foreground">
                        {result.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {result.description}
                      </p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              data-testid="button-results-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {mockResults.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted"
                  }`}
                  data-testid={`button-results-dot-${index}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
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
