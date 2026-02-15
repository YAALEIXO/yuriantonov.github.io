import { motion } from "framer-motion";
import { BarChart3, Layers, Cog } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Consultoria em Dados",
    items: [
      "Estruturação de indicadores estratégicos (KPIs e OKRs)",
      "Diagnóstico de maturidade analítica",
      "Organização de bases de dados",
      "Suporte à tomada de decisão executiva",
    ],
  },
  {
    icon: Layers,
    title: "Business Intelligence",
    items: [
      "Construção de dashboards executivos",
      "Painéis financeiros (Fluxo de Caixa, DRE, Balanço)",
      "Indicadores operacionais e comerciais",
      "Centralização de informações",
    ],
  },
  {
    icon: Cog,
    title: "Engenharia e Automação",
    items: [
      "Criação de pipelines de dados",
      "Integração entre sistemas",
      "Conexão com APIs",
      "Construção de Data Warehouse",
      "Automação de tarefas repetitivas",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="text-sky font-semibold uppercase tracking-wider text-sm mb-2">Soluções</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            O que eu faço
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Atuo como consultor em dados, apoiando empresas na estruturação de informações, criação de indicadores estratégicos e automação de processos. Transformo dados dispersos em inteligência aplicada ao negócio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-sky/30"
            >
              <div className="w-14 h-14 accent-gradient rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <s.icon className="text-primary-foreground" size={28} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">{s.title}</h3>
              <ul className="space-y-3">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
