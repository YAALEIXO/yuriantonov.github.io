import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Stats / Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="text-sky font-semibold uppercase tracking-wider text-sm mb-2">Trajetória</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
                Sobre Mim
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Briefcase, value: "+8", label: "Anos de experiência" },
                { icon: GraduationCap, value: "2x", label: "Graduações" },
                { icon: Target, value: "FP&A", label: "Atuação atual" },
              ].map((s) => (
                <div key={s.label} className="bg-card rounded-xl p-5 shadow-card border border-border text-center">
                  <s.icon className="text-sky mx-auto mb-2" size={24} />
                  <p className="font-display text-2xl font-bold text-foreground">{s.value}</p>
                  <p className="text-muted-foreground text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5 text-muted-foreground leading-relaxed"
          >
            <p>
              Sou Tecnólogo em Gestão de Sistemas de Informação pela UNIP e Pós-graduado em Gestão de Tecnologia da Informação pela Faculdade Ideal (FACI). Também possuo formação técnica pelo SENAI/PA como Eletricista Industrial, especialização em Análise de Dados e Analista de Dados pela Comunidade DS.
            </p>
            <p>
              Ao longo da minha trajetória, atuei por mais de 8 anos no setor industrial, passando por logística na JBS, consultoria pelo Sebrae/PA e atualmente atuando na área de FP&A como Analista de Controladoria, desenvolvendo soluções estratégicas em BI para o setor de incorporação imobiliária.
            </p>
            <p className="text-foreground font-medium">
              Minha experiência une visão operacional, estratégia empresarial e engenharia de dados — combinação essencial para transformar números em decisões que geram crescimento sustentável.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
