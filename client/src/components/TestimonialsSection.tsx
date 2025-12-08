import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

// todo: remove mock functionality - replace with real testimonials
const mockTestimonials = [
  {
    id: 1,
    name: "Maria Clara S.",
    location: "Brasília, DF",
    text: "A Dra. Raquel é incrível! Ela me deixou super à vontade desde a primeira consulta. O resultado do meu preenchimento ficou muito natural, exatamente como eu queria.",
    initials: "MC",
  },
  {
    id: 2,
    name: "Ana Paula R.",
    location: "Brasília, DF",
    text: "Depois de anos com medo de fazer harmonização, encontrei na Dra. Raquel a profissional certa. Ela explicou tudo com paciência e o resultado superou minhas expectativas.",
    initials: "AP",
  },
  {
    id: 3,
    name: "Fernanda L.",
    location: "Brasília, DF",
    text: "O atendimento na Orallis Unique é impecável. A estrutura é linda e a Dra. Raquel tem um cuidado especial com cada detalhe. Recomendo de olhos fechados!",
    initials: "FL",
  },
  {
    id: 4,
    name: "Juliana M.",
    location: "Brasília, DF",
    text: "Fiz a reabilitação oral completa e estou muito feliz com o resultado. A Dra. Raquel é extremamente competente e atenciosa. Meu sorriso nunca esteve tão bonito!",
    initials: "JM",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation(0.1);

  const visibleCards = 3;
  const maxIndex = Math.max(0, mockTestimonials.length - visibleCards);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section
      id="depoimentos"
      ref={ref}
      className="py-20 lg:py-32 bg-card relative overflow-hidden"
      data-testid="section-testimonials"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center space-y-4 mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mx-auto">
            O que dizem sobre a Dra. Raquel
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground"
            data-testid="text-testimonials-title"
          >
            <span className="text-gradient">Depoimentos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de pacientes satisfeitas
          </p>
        </div>

        <div className={`relative ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards + 2)}%)`,
              }}
            >
              {mockTestimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] glass-card rounded-3xl p-6 space-y-4 hover-lift transition-all duration-300 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                  data-testid={`card-testimonial-${testimonial.id}`}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Quote className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <Avatar className="border-2 border-primary/20">
                      <AvatarFallback className="gradient-primary text-primary-foreground font-medium">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-foreground text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.location}
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
              disabled={currentIndex === 0}
              className="rounded-full hover-lift transition-all duration-300 disabled:opacity-50"
              data-testid="button-testimonials-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary scale-125" : "bg-muted hover:bg-muted-foreground/30"
                  }`}
                  data-testid={`button-testimonials-dot-${index}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className="rounded-full hover-lift transition-all duration-300 disabled:opacity-50"
              data-testid="button-testimonials-next"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
