import { motion } from "framer-motion";
import { Linkedin, Instagram, Mail, Phone, FileDown } from "lucide-react";

const links = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/yuriaaleixo" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/a9data" },
  { icon: Mail, label: "E-mail", href: "mailto:yuriantonov@yahoo.com.br" },
  { icon: Phone, label: "WhatsApp", href: "https://wa.me/5591992970982" },
];

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-navy relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Pronto para estruturar seus dados e evoluir sua gestão?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-10 leading-relaxed">
            Vamos transformar informação em estratégia e estratégia em resultado.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary-foreground/10 hover:bg-sky/20 border border-primary-foreground/20 hover:border-sky text-primary-foreground px-5 py-3 rounded-lg transition-all text-sm font-medium"
              >
                <l.icon size={18} />
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 accent-gradient text-primary-foreground font-semibold px-8 py-3 rounded-lg shadow-button hover:opacity-90 transition-opacity"
          >
            <FileDown size={18} />
            Baixar Currículo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
