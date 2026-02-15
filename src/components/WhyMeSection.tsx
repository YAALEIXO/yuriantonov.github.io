import { motion } from "framer-motion";
import { Eye, Factory, Database, MessageSquare, Rocket } from "lucide-react";

const reasons = [
  { icon: Eye, text: "Visão estratégica de negócio" },
  { icon: Factory, text: "Experiência prática industrial e financeira" },
  { icon: Database, text: "Capacidade técnica em dados" },
  { icon: MessageSquare, text: "Comunicação clara com gestores" },
  { icon: Rocket, text: "Foco em resultado" },
];

const WhyMeSection = () => {
  return (
    <section className="py-24 bg-gray-section">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sky font-semibold uppercase tracking-wider text-sm mb-2">Diferencial</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Por que trabalhar comigo?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border text-center hover:shadow-card-hover hover:border-sky/30 transition-all"
            >
              <div className="w-12 h-12 mx-auto accent-gradient rounded-xl flex items-center justify-center mb-4">
                <r.icon className="text-primary-foreground" size={22} />
              </div>
              <p className="text-foreground font-medium text-sm">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;
