import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient opacity-85" />

      <div className="container relative z-10 mx-auto px-6 py-32">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center lg:text-left"
          >
            <p className="text-sky font-semibold tracking-wider uppercase text-sm mb-4">
              Yuri Antonov Silva da Paixão Aleixo
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Dados que geram decisões.{" "}
              <span className="text-gradient">Estratégia que gera resultado.</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Especialista em análise de dados, Business Intelligence e estruturação de pipelines, ajudando empresas a organizarem suas informações, aumentarem eficiência operacional e tomarem decisões estratégicas com segurança.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projetos"
                className="accent-gradient text-primary-foreground font-semibold px-8 py-3 rounded-lg shadow-button hover:opacity-90 transition-opacity text-center"
              >
                Ver Projetos
              </a>
              <a
                href="https://wa.me/5591992970982"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary-foreground/30 text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:border-sky hover:text-sky transition-colors text-center"
              >
                Agendar Conversa
              </a>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-sky/30 shadow-2xl">
              <img
                src={profilePhoto}
                alt="Yuri Antonov - Consultor em Dados"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          >
            <ArrowDown className="text-sky/60" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
