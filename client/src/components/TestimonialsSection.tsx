import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

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
      className="py-20 lg:py-32 bg-card"
      data-testid="section-testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-4 mb-16">
          <p className="text-secondary font-medium tracking-wide uppercase text-sm">
            O que dizem sobre a Dra. Raquel
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground"
            data-testid="text-testimonials-title"
          >
            Depoimentos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de pacientes satisfeitas
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards + 2)}%)`,
              }}
            >
              {mockTestimonials.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] p-6 space-y-4"
                  data-testid={`card-testimonial-${testimonial.id}`}
                >
                  <Quote className="w-8 h-8 text-primary/30" />
                  <p className="text-muted-foreground leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <Avatar>
                      <AvatarFallback className="bg-secondary text-secondary-foreground">
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
                </Card>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              data-testid="button-testimonials-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted"
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
