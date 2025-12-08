import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Smile,
  Heart,
  Sparkles,
  Stethoscope,
  Crown,
  CircleDot,
  AlignVerticalSpaceAround,
  Syringe,
  Scissors,
} from "lucide-react";

const mainTreatments = [
  {
    icon: Crown,
    title: "Reabilitação Oral",
    description:
      "Restauração completa da função e estética dental, devolvendo confiança ao seu sorriso com técnicas modernas e materiais de alta qualidade.",
    badge: "Principal",
  },
  {
    icon: Heart,
    title: "Preenchimento Labial Natural",
    description:
      "Valorização dos lábios com técnicas que respeitam a harmonia facial, proporcionando resultados naturais e elegantes.",
    badge: "Popular",
  },
  {
    icon: Sparkles,
    title: "Harmonização Orofacial Completa",
    description:
      "Tratamento integrado que equilibra proporções faciais, suaviza marcas de expressão e realça a beleza natural.",
    badge: "Destaque",
  },
];

const otherServices = [
  {
    icon: Smile,
    title: "Dentística",
    description: "Restaurações estéticas e funcionais",
  },
  {
    icon: Stethoscope,
    title: "Prótese",
    description: "Próteses fixas e removíveis",
  },
  {
    icon: CircleDot,
    title: "Endodontia",
    description: "Tratamento de canal especializado",
  },
  {
    icon: AlignVerticalSpaceAround,
    title: "Ortodontia",
    description: "Alinhamento e correção dental",
  },
  {
    icon: Syringe,
    title: "Implantodontia",
    description: "Implantes dentários modernos",
  },
  {
    icon: Scissors,
    title: "Cirurgia Bucomaxilofacial",
    description: "Procedimentos cirúrgicos especializados",
  },
];

export default function TreatmentsSection() {
  return (
    <section
      id="tratamentos"
      className="py-20 lg:py-32 bg-background"
      data-testid="section-treatments"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-4 mb-16">
          <p className="text-secondary font-medium tracking-wide uppercase text-sm">
            Tratamentos
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground"
            data-testid="text-treatments-title"
          >
            Nossos Tratamentos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Procedimentos personalizados com foco em resultados naturais e
            duradouros
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {mainTreatments.map((treatment, index) => (
            <Card
              key={index}
              className="group hover-elevate transition-transform duration-300"
              data-testid={`card-treatment-main-${index}`}
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center">
                    <treatment.icon className="w-7 h-7 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {treatment.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{treatment.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {treatment.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Outros Serviços
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherServices.map((service, index) => (
              <Card
                key={index}
                className="p-4 flex items-center gap-4 hover-elevate"
                data-testid={`card-service-${index}`}
              >
                <div className="w-10 h-10 rounded-md bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{service.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
