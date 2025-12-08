import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MessageCircle,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Send,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // todo: remove mock functionality - implement real form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });

    setFormData({ name: "", phone: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section
      id="contato"
      className="py-20 lg:py-32 bg-card"
      data-testid="section-contact"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-4 mb-16">
          <p className="text-secondary font-medium tracking-wide uppercase text-sm">
            Fale Conosco
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground"
            data-testid="text-contact-title"
          >
            Contato e Agendamento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entre em contato para agendar sua avaliação
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome completo</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  required
                  data-testid="input-name"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(61) 99999-9999"
                    required
                    data-testid="input-phone"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                    data-testid="input-email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Como podemos ajudar?"
                  rows={4}
                  className="resize-none"
                  data-testid="input-message"
                />
              </div>

              <Button
                type="submit"
                className="w-full gap-2"
                disabled={isSubmitting}
                data-testid="button-submit-contact"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Informações de Contato
              </h3>

              <div className="space-y-4">
                <a
                  href="https://wa.me/5561982184800"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-md bg-primary/10 hover-elevate transition-colors"
                  data-testid="link-whatsapp-contact"
                >
                  <div className="w-12 h-12 rounded-md bg-primary flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">WhatsApp</p>
                    <p className="text-muted-foreground">(61) 98218-4800</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-md bg-muted">
                  <div className="w-12 h-12 rounded-md bg-secondary flex items-center justify-center">
                    <Phone className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Telefone</p>
                    <p className="text-muted-foreground">(61) 98218-4800</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-md bg-muted">
                  <div className="w-12 h-12 rounded-md bg-secondary flex items-center justify-center">
                    <Clock className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Horário</p>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 8h às 18h
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-md bg-muted">
                  <div className="w-12 h-12 rounded-md bg-secondary flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      Local de Atendimento
                    </p>
                    <p className="text-muted-foreground">
                      Orallis Unique - Brasília, DF
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Redes Sociais
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/draraquelsaraiva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-md bg-muted hover-elevate"
                  data-testid="link-instagram-dra"
                >
                  <Instagram className="w-5 h-5 text-foreground" />
                  <span className="text-sm text-foreground">
                    @draraquelsaraiva
                  </span>
                </a>
                <a
                  href="https://instagram.com/orallisunique"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-md bg-muted hover-elevate"
                  data-testid="link-instagram-orallis"
                >
                  <Instagram className="w-5 h-5 text-foreground" />
                  <span className="text-sm text-foreground">@orallisunique</span>
                </a>
              </div>
            </div>

            <div className="aspect-video rounded-md overflow-hidden bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.301076478721!2d-47.88!3d-15.79!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDQ3JzI0LjAiUyA0N8KwNTInNDguMCJX!5e0!3m2!1sen!2sbr!4v1600000000000!5m2!1sen!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Orallis Unique"
                data-testid="map-location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
