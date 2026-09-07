import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

function CTA() {
  return (
    <section id="cta" className="py-24 px-6 md:px-16 bg-blue-600">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          ¿Listo para dar el siguiente paso?
        </h2>
        <p className="text-blue-100 mb-10 text-lg">
          Agenda una llamada gratuita de 15 minutos. Sin compromiso, solo para
          conversar sobre lo que necesitas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:tu@email.com"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            <Mail size={18} />
            Escríbeme
          </a>

          <a
            href="https://wa.me/51908556397"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
          >
            WhatsApp
            <ArrowRight size={18} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default CTA;
