import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const faqs = [
  {
    question: "Os resultados ficam naturais?",
    answer:
      "Sim! A Dra. Raquel prioriza resultados naturais e harmônicos. Cada procedimento é planejado considerando as proporções faciais únicas de cada paciente, evitando exageros e mantendo a naturalidade.",
  },
  {
    question: "Os procedimentos doem?",
    answer:
      "A maioria dos procedimentos é realizada com anestesia local ou tópica, minimizando qualquer desconforto. A Dra. Raquel utiliza técnicas avançadas e produtos de alta qualidade para garantir o máximo conforto durante o tratamento.",
  },
  {
    question: "Quanto tempo dura o efeito dos tratamentos?",
    answer:
      "A duração varia conforme o procedimento realizado. Preenchimentos com ácido hialurônico, por exemplo, costumam durar entre 12 a 18 meses. Durante a consulta, a Dra. Raquel explica detalhadamente a expectativa de duração para cada caso.",
  },
  {
    question: "Quando aparecem os resultados?",
    answer:
      "Para a maioria dos procedimentos de harmonização e preenchimento, os resultados são visíveis imediatamente após a aplicação. O resultado final, após a acomodação do produto e redução de qualquer inchaço, é observado em cerca de 15 a 30 dias.",
  },
  {
    question: "Como é a recuperação após os procedimentos?",
    answer:
      "A recuperação geralmente é rápida e tranquila. Podem ocorrer leves inchaços ou hematomas, que desaparecem em poucos dias. A Dra. Raquel fornece todas as orientações de cuidados pós-procedimento para garantir uma recuperação confortável.",
  },
  {
    question: "É necessário fazer manutenção?",
    answer:
      "Sim, para manter os resultados em longo prazo, são recomendadas sessões de manutenção. A frequência varia de acordo com o procedimento e as características individuais de cada paciente. A Dra. Raquel acompanha cada caso e orienta sobre o momento ideal para retoques.",
  },
];

export default function FAQSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-background relative overflow-hidden" data-testid="section-faq">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/30 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center space-y-4 mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mx-auto">
            Tire suas dúvidas
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground"
            data-testid="text-faq-title"
          >
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          className="space-y-4"
          data-testid="accordion-faq"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className={`glass-card rounded-2xl px-6 border-0 overflow-hidden hover-lift transition-all duration-300 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: `${200 + index * 80}ms` }}
              data-testid={`accordion-item-${index}`}
            >
              <AccordionTrigger className="text-left hover:no-underline py-5 gap-4">
                <span className="font-medium text-foreground">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
