import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Code2,
  Gauge,
  Globe2,
  Menu,
  ArrowDown,
  SearchCheck,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  X,
} from "lucide-react";
import Whatsapp from "./assets/whatsapp-icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/ui/accordion";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";

const whatsappUrl =
  "https://wa.me/5513996287708?text=Oi%2C%20Weslley!%20Quero%20um%20or%C3%A7amento%20para%20um%20site.";
const emailUrl = "mailto:weslleyvitorbatista@gmail.com";

const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "FAQ", href: "#faq" },
];

const heroSignals = [
  {
    icon: Gauge,
    label: "Carrega rápido",
    value: "Menos espera para quem acessa pelo celular",
  },
  {
    icon: Target,
    label: "Foco em conversão",
    value: "Estrutura pensada para gerar contatos e vendas",
  },
  {
    icon: ShieldCheck,
    label: "Vai para o ar",
    value: "Domínio, SSL e publicação configurados",
  },
];

const valuePoints = [
  "Transformo informações soltas do seu negócio em uma página clara, objetiva e fácil de entender.",
  "Organizo a oferta para o visitante saber o que você faz, por que escolher você e como entrar em contato.",
  "Crio uma experiência rápida no celular, porque é onde muitos clientes vão abrir seu site primeiro.",
  "Entrego o site publicado e pronto para você usar em WhatsApp, Instagram, Google e propostas comerciais.",
];

const services = [
  {
    badge: "Página única",
    title: "Landing page",
    price: "A partir de R$ 600",
    time: "5 a 10 dias",
    description: "Para divulgar um serviço, captar contatos ou apresentar uma oferta específica com clareza.",
    items: ["Estrutura da oferta", "Design responsivo", "Preparação para Google", "Publicação inclusa"],
  },
  {
    badge: "Presença completa",
    title: "Site institucional",
    price: "A partir de R$ 1.000",
    time: "7 a 15 dias",
    description:
      "Para empresas que precisam explicar serviços, transmitir profissionalismo e centralizar canais de atendimento.",
    items: ["Até 5 seções/páginas", "Textos organizados", "Performance otimizada", "WhatsApp integrado"],
    featured: true,
  },
  {
    badge: "Cuidado contínuo",
    title: "Hospedagem gerenciada",
    price: "A partir de R$ 80/mês",
    time: "Mensal",
    description: "Para manter seu site no ar e atualizado sem você precisar lidar com configurações técnicas.",
    items: ["SSL e domínio configurados", "Monitoramento básico", "Pequenos ajustes", "Suporte prioritário"],
  },
];

const hostingItems = [
  "Configuração do domínio e certificado de segurança",
  "Publicação em ambiente preparado para sites rápidos",
  "Monitoramento básico para identificar problemas no ar",
  "Pequenos ajustes de texto, links e informações do site",
  "Um ponto de contato técnico quando precisar alterar algo",
];

const techStack = [
  {
    icon: Code2,
    title: "Código sob medida",
    description: "Nada de página pesada montada em construtor genérico quando o projeto pede velocidade e acabamento.",
  },
  {
    icon: SearchCheck,
    title: "Base para Google",
    description: "Título, descrição, estrutura semântica e conteúdo organizados para facilitar indexação.",
  },
  {
    icon: Gauge,
    title: "Performance real",
    description: "Build otimizado, interface leve e cuidado com a experiência de quem acessa pelo celular.",
  },
  {
    icon: ServerCog,
    title: "Publicação assistida",
    description: "Domínio, SSL e hospedagem configurados para você começar a divulgar sem travar na parte técnica.",
  },
];

const projects = [
  {
    title: "Simulify",
    challenge:
      "Estudantes enfrentam dificuldades para encontrar materiais de qualidade, simular condições reais de prova e identificar lacunas específicas no aprendizado.",
    result:
      "Uma plataforma SaaS que utiliza IA para gerar simulados personalizados, cronômetros de pressão real e métricas de evolução, otimizando o fluxo de estudos.",
    link: "https://simulify.wesbats.dev/",
    linkType: "Site",
    img: "simulify.webp",
  },
  {
    title: "Gestor de demandas internas (Carrefour)",
    challenge: "Acompanhamento de tarefas sem visibilidade clara de responsáveis e andamento.",
    result: "Base de gestão com autenticação e organização de demandas para reduzir confusão operacional.",
    link: "https://github.com/acelera-dev-c4/todo-list-backend",
    linkType: "GitHub",
  },
];

const processSteps = [
  {
    title: "Diagnóstico rápido",
    description: "Entendo seu serviço, público e objetivo para definir a direção do projeto.",
  },
  {
    title: "Estrutura e mensagem",
    description: "Estruturo a página, a comunicação e os elementos que ajudam na conversão.",
  },
  {
    title: "Design e desenvolvimento",
    description: "Desenvolvo a interface, otimizo para celular e foco em performance.",
  },
  {
    title: "Publicação e ajustes",
    description: "Publico o projeto, realizo os ajustes finais e deixo tudo funcionando corretamente.",
  },
];

const faqs = [
  {
    question: "Quanto custa para criar um site?",
    answer:
      "Depende do tamanho e objetivo do projeto. Landing pages começam a partir de R$ 400 e sites institucionais a partir de R$ 700. Depois da conversa inicial, envio uma proposta com escopo, prazo e valor fechados.",
  },
  {
    question: "Você cuida de domínio e hospedagem?",
    answer:
      "Sim. Posso configurar domínio, SSL, publicação e hospedagem gerenciada. Se você já tiver domínio ou hospedagem, também posso avaliar o que faz mais sentido aproveitar.",
  },
  {
    question: "Meu site pode aparecer no Google?",
    answer:
      "Sim. O projeto já sai com uma base técnica de SEO: título, descrição, estrutura semântica e conteúdo organizado. Resultados de busca dependem também de concorrência, conteúdo e tempo de indexação.",
  },
  {
    question: "Preciso enviar todos os textos prontos?",
    answer:
      "Não precisa chegar com tudo escrito. Eu ajudo a organizar a mensagem, mas preciso das informações reais do seu negócio para deixar a página precisa e confiável.",
  },
  {
    question: "Você faz algo além de sites e landing pages?",
    answer:
      "Posso avaliar demandas específicas caso a caso. Para projetos com sistemas, integrações ou áreas administrativas, o escopo precisa ser analisado com mais cuidado antes de qualquer orçamento.",
  },
];

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} data-visible={isVisible} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title, copy, className = "", showEyebrow = true }) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {showEyebrow ? (
        <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      ) : null}
      <h2
        className={
          showEyebrow
            ? "mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] text-foreground sm:text-5xl"
            : "text-3xl font-semibold leading-tight tracking-[-0.045em] text-foreground sm:text-5xl"
        }
      >
        {title}
      </h2>
      {copy ? <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">{copy}</p> : null}
    </div>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/82 backdrop-blur-2xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
        aria-label="Navegação principal"
      >
        <a
          href="#inicio"
          className="font-mono text-xl font-extrabold tracking-[-0.05em] text-foreground transition-colors hover:text-primary"
          aria-label="WesBats início"
        >
          &lt;WesBats/&gt;
        </a>
        <div className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          {navItems.map((item) => (
            <a className="transition-colors hover:text-primary line-animate" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="border border-border/60 bg-transparent hover:border-primary/50 hover:bg-transparent hover:text-foreground"
          >
            <a href={whatsappUrl} className="flex items-center">
              <Whatsapp />
              Fale comigo
            </a>
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-foreground md:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>
      {isOpen ? (
        <div className="border-t border-border bg-background/96 px-5 py-4 shadow-2xl backdrop-blur-2xl md:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                className="rounded-lg px-3 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="mt-2 w-full">
              <a href={whatsappUrl} onClick={() => setIsOpen(false)} className="flex items-center">
                <Whatsapp />
                Fale comigo
              </a>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen flex-col overflow-hidden px-5 pt-24 sm:px-8 lg:pt-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border)/0.45)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.45)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black_40%,transparent_85%)]" />
      <div className="absolute left-1/2 top-16 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

      {/* Main content */}
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center py-8 lg:py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          {/* Left Content */}
          <div className="flex flex-col items-start">
            <Reveal className="w-full max-w-2xl">
              <Badge className="px-3 py-1 text-xs uppercase tracking-wider">Especialista em Pequenos Negócios</Badge>

              <h1 className="mt-6 max-w-xl text-balance text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
                O site que sua empresa precisa para <span className="text-primary">crescer.</span>
              </h1>

              <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Criamos presença digital profissional para pequenos negócios. Sem complicações, apenas resultados.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="h-12 px-8 text-base">
                  <a href={whatsappUrl} className="flex items-center">
                    <Whatsapp />
                    Solicitar Orçamento Gratuito
                  </a>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="h-12 px-8 text-base border border-border/60 bg-transparent hover:border-primary/50 hover:bg-transparent hover:text-foreground"
                >
                  <a href="#projetos">Ver projetos na prática</a>
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Visual Mockup */}
          <Reveal delay={200} className="hidden lg:block">
            <div className="relative w-full max-w-md ml-auto">
              <div className="absolute -right-8 -top-8 h-56 w-56 rounded-full bg-primary/25 blur-[80px]" />
              <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/80 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center gap-2 border-b border-border/50 bg-secondary/50 px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="mx-auto h-5 w-1/2 rounded-md bg-background/50" />
                </div>
                <div className="grid min-h-[300px] place-items-center bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.18),transparent_40%),linear-gradient(135deg,hsl(var(--secondary)),hsl(var(--background)))] p-6">
                  <div className="w-full max-w-sm space-y-4 rounded-xl border border-border bg-card/60 p-5 backdrop-blur-md">
                    <div className="h-4 w-1/3 rounded-full bg-primary/40" />
                    <div className="h-20 w-full rounded-lg border border-border bg-secondary/50 p-3">
                      <div className="mb-2 h-2 w-3/4 rounded bg-foreground/10" />
                      <div className="h-2 w-full rounded bg-foreground/10" />
                    </div>
                    <div className="flex gap-3">
                      <div className="h-16 flex-1 rounded-lg border border-border bg-secondary/70" />
                      <div className="h-16 flex-1 rounded-lg border border-border bg-primary/20" />
                    </div>
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      <div className="h-10 rounded-md bg-secondary/40" />
                      <div className="h-10 rounded-md bg-secondary/40" />
                      <div className="h-10 rounded-md bg-secondary/40" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Card 1 */}
              <div className="absolute -bottom-6 -left-6 z-10 rounded-xl border border-border bg-card/90 px-4 py-3 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Target className="h-5 w-5 text-primary" />
                  <span>Foco em conversão</span>
                </div>
              </div>
              {/* Floating Card 2 */}
              <div className="absolute -right-4 top-16 z-10 rounded-xl border border-border bg-card/90 px-4 py-3 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Smartphone className="h-5 w-5 text-emerald-400" />
                  <span>100% responsivo</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Signals Grid */}
          <div className="mt-4 grid w-full items-stretch gap-5 md:grid-cols-3 lg:col-span-2">
            {heroSignals.map((signal, index) => {
              const Icon = signal.icon;
              return (
                <Reveal delay={300 + index * 80} key={signal.label}>
                  <Card className="group relative flex h-full flex-col justify-center overflow-hidden bg-card/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card hover:shadow-lg hover:shadow-primary/5">
                    <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl" />
                    <div className="flex items-center gap-4 sm:flex-row">
                      <div className="flex-shrink-0 rounded-xl border border-border bg-secondary p-3 text-primary shadow-[0_0_28px_rgb(94_106_210/0.14)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-foreground">{signal.label}</p>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{signal.value}</p>
                      </div>
                    </div>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center pb-8 pt-4">
        <a
          href="#servicos"
          className="group flex flex-col items-center gap-2 text-muted-foreground/60 transition-all duration-300 hover:text-primary"
          aria-label="Role para baixo"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] group-hover:translate-y-0.5 transition-transform">
            Explorar serviços
          </span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}

function ValueSection() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <SectionHeading
            showEyebrow={false}
            title="Seu site precisa facilitar a decisão de quem ainda não conhece você."
            copy="Uma pequena empresa perde oportunidades quando o visitante não entende rápido o que ela faz, onde atende ou como pedir orçamento. A página é construída para reduzir essa dúvida."
          />
        </Reveal>
        <Reveal delay={120}>
          <Card className="overflow-hidden">
            {valuePoints.map((point, index) => (
              <div
                className="grid gap-4 border-b border-border p-5 last:border-b-0 sm:grid-cols-[3rem_1fr] sm:p-6"
                key={point}
              >
                <span className="font-mono text-sm font-bold text-primary">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-base leading-7 text-foreground">{point}</p>
              </div>
            ))}
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="border-y border-border bg-card/40 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl lg:px-4 xl:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={false}
            title="Serviços e preços"
            copy="Valores de entrada para projetos claros. Escopos maiores, urgência, páginas extras e integrações mudam o orçamento."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal delay={index * 90} key={service.title}>
              <Card
                className={`relative h-full overflow-hidden ${service.featured ? "border-primary/70 shadow-[0_0_44px_rgb(94_106_210/0.18)]" : ""}`}
              >
                {service.featured ? (
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-emerald-400" />
                ) : null}
                <CardHeader>
                  <div className="flex items-center justify-between gap-4">
                    <Badge>{service.badge}</Badge>
                    <span className="text-xs font-semibold text-muted-foreground">{service.time}</span>
                  </div>
                  <CardTitle className="mt-8 text-2xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-bold tracking-[-0.02em] text-foreground">{service.price}</p>
                  <ul className="mt-6 grid gap-3 text-sm text-muted-foreground">
                    {service.items.map((item) => (
                      <li className="flex items-center gap-2" key={item}>
                        <Check className="h-4 w-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant={service.featured ? "default" : "secondary"} className="mt-8 w-full">
                    <a href={whatsappUrl}>Pedir orçamento</a>
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Hosting() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Hospedagem gerenciada"
            title="Seu site no ar sem você precisar mexer na parte técnica."
            copy="Além de desenvolver, posso cuidar da publicação e manutenção básica para você ter um ponto de apoio quando precisar atualizar links, textos ou configurações."
          />
        </Reveal>
        <Reveal delay={120}>
          <Card className="overflow-hidden bg-card/80">
            <CardHeader className="border-b border-border">
              <div className="flex items-center gap-3">
                <div className="rounded-xl border border-border bg-secondary p-2 text-primary">
                  <Globe2 className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle>O que fica sob cuidado</CardTitle>
                  <CardDescription>Itens simples que evitam dor de cabeça depois da entrega.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {hostingItems.map((item) => (
                <div
                  className="grid grid-cols-[2.8rem_1fr] items-center border-b border-border px-5 py-4 last:border-b-0 sm:px-6"
                  key={item}
                >
                  <span className="font-mono font-bold text-primary">/</span>
                  <p className="text-sm font-medium leading-6 text-foreground">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projetos" className="border-y border-border bg-card/40 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <SectionHeading
              showEyebrow={false}
              title="Projetos que mostram organização, fluxo e solução prática."
              copy="Alguns trabalhos ainda estão em evolução visual, mas já mostram a forma como estruturo problemas: entender o cenário, organizar informação e entregar uma solução funcional."
            />
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal delay={index * 120} key={project.title}>
              <Card className="overflow-hidden">
                <div className="border-b border-border bg-secondary/40 p-3">
                  <div className="overflow-hidden rounded-xl border border-border bg-background shadow-2xl">
                    <div className="flex items-center gap-2 border-b border-border bg-card px-4 py-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                      <span className="ml-3 h-5 flex-1 rounded-md border border-border bg-secondary" />
                    </div>
                    {project.img ? (
                      <img alt={project.title} className="w-full h-auto object-contain" src={project.img} />
                    ) : (
                      <div className="grid min-h-56 place-items-center bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.18),transparent_30%),linear-gradient(135deg,hsl(var(--secondary)),hsl(var(--background)))] p-6">
                        <div className="w-full max-w-sm rounded-xl border border-border bg-card/80 p-4 backdrop-blur">
                          <div className="mb-4 h-3 w-28 rounded-full bg-primary/40" />
                          <div className="space-y-2">
                            <div className="h-3 rounded-full bg-foreground/14" />
                            <div className="h-3 w-4/5 rounded-full bg-foreground/10" />
                            <div className="h-3 w-2/3 rounded-full bg-foreground/10" />
                          </div>
                          <div className="mt-5 grid grid-cols-3 gap-2">
                            <div className="h-14 rounded-lg border border-border bg-secondary/70" />
                            <div className="h-14 rounded-lg border border-border bg-secondary/70" />
                            <div className="h-14 rounded-lg border border-border bg-secondary/70" />
                          </div>
                          <p className="mt-5 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                            {project.title}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-primary">Desafio</p>
                  <p className="mt-2 leading-7 text-muted-foreground">{project.challenge}</p>
                  <p className="mt-6 font-mono text-xs font-bold uppercase tracking-[0.14em] text-primary">Resultado</p>
                  <p className="mt-2 leading-7 text-muted-foreground">{project.result}</p>
                  <a
                    className="mt-6 inline-flex items-center gap-1 font-semibold text-foreground underline decoration-primary underline-offset-4 transition-colors hover:text-primary"
                    href={project.link}
                    target="_blank"
                  >
                    Acessar {project.linkType} <ArrowUpRight className="h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <SectionHeading eyebrow="Como funciona" title="Um processo direto para publicar sem confusão." />
        </Reveal>
        <Reveal delay={120}>
          <Card className="overflow-hidden">
            {processSteps.map((step, index) => (
              <div
                className="grid gap-4 border-b border-border p-5 last:border-b-0 sm:grid-cols-[3rem_1fr] sm:p-6"
                key={step.title}
              >
                <span className="font-mono text-sm font-bold text-primary">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 leading-7 text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="border-y border-border bg-card/40 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              showEyebrow={false}
              title="Estrutura técnica para um site leve, seguro e fácil de manter."
              copy="Por trás do visual, o projeto precisa ter uma base confiável: código organizado, SEO inicial, publicação bem configurada e uma estrutura que permita ajustes futuros."
            />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {techStack.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal delay={index * 80} key={item.title}>
                  <Card className="h-full bg-background/55 p-5 transition-colors hover:border-primary/40">
                    <div className="mb-5 inline-flex rounded-xl border border-border bg-secondary p-2.5 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold tracking-[-0.02em] text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading
            showEyebrow={false}
            title="Dúvidas comuns antes de contratar."
            copy="Respostas diretas sobre preço, prazo, hospedagem, Google e conteúdo."
            className="text-center"
          />
        </Reveal>
        <Reveal delay={120}>
          <Card className="mt-10 px-5 sm:px-6">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={faq.question}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="px-5 pb-10 sm:px-8">
      <Reveal>
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-border bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.24),transparent_28rem),hsl(var(--card))] p-6 text-center sm:p-12 lg:p-16">
          <Badge>
            <Sparkles className="mr-1 h-3.5 w-3.5" />
            Vamos começar
          </Badge>
          <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.05em] text-foreground sm:text-6xl">
            Vamos tirar seu projeto do papel?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Estou pronto para ajudar você a colocar seu negócio no digital
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={whatsappUrl}>
                <Whatsapp />
                Chamar no WhatsApp
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href={emailUrl}>Enviar e-mail</a>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>©2026 WesBats - Criação de sites, landing pages e hospedagem gerenciada.</p>
        <div className="flex gap-5">
          <a className="transition-colors hover:text-primary" href={emailUrl}>
            E-mail
          </a>
          <a className="transition-colors hover:text-primary" href={whatsappUrl}>
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueSection />
        <Services />
        <Hosting />
        <Projects />
        <Process />
        <TrustSection />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
