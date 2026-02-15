import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, DollarSign, Building2, ShoppingCart, Bot, Database, GraduationCap } from "lucide-react";

const projects = [
  {
    icon: DollarSign,
    title: "BI Financeiro para Consultorias",
    tags: ["DRE", "Balanço Patrimonial", "Fluxo de Caixa"],
  },
  {
    icon: Building2,
    title: "Inteligência para Incorporadoras",
    tags: ["Acompanhamento de Obras", "Metas e Indicadores", "Gestão Financeira"],
  },
  {
    icon: ShoppingCart,
    title: "BI Comercial",
    tags: ["Análise de Performance", "Indicadores de Marketing", "Análise de Conversão"],
  },
  {
    icon: Bot,
    title: "Automação de Processos",
    tags: ["Robôs para captura de relatórios", "Integração entre sistemas"],
  },
  {
    icon: Database,
    title: "Engenharia de Dados",
    tags: ["Pipelines", "Integração de múltiplas fontes", "Modelagem de dados", "Data Warehouse"],
  },
  {
    icon: GraduationCap,
    title: "Treinamentos e Capacitação",
    tags: ["Cultura Data-Driven", "BI na prática", "Gestão orientada por indicadores"],
  },
];

const ProjectsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" });
    setTimeout(checkScroll, 400);
  };

  return (
    <section id="projetos" className="py-24 bg-navy relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sky font-semibold uppercase tracking-wider text-sm mb-2">Portfólio</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground">
            Projetos
          </h2>
        </motion.div>

        {/* Carousel controls */}
        <div className="flex justify-end gap-2 mb-6">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-sky hover:border-sky transition-colors disabled:opacity-30"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-sky hover:border-sky transition-colors disabled:opacity-30"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[300px] sm:min-w-[320px] snap-start bg-navy-light rounded-2xl p-8 border border-primary-foreground/10 hover:border-sky/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl accent-gradient flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <p.icon className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-display text-lg font-bold text-primary-foreground mb-4">{p.title}</h3>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-sky/10 text-sky border border-sky/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
