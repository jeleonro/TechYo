import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium text-blue-600 mb-3 uppercase tracking-wide"
        >
          Desarrollo web & automatizaciones
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold leading-tight mb-6"
        >
          Ayudamos a negocios a tener presencia web
          <br className="hidden md:block" />y automatizar tareas repetitivas
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto"
        >
          Diseñamos páginas web claras y funcionales, y automatizo procesos que te
          hacen perder tiempo. Sin promesas vacías, con comunicación directa
          desde el primer contacto.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#cta"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Agenda una llamada gratuita
            <ArrowRight size={18} />
          </a>

          <a
            href="#servicios"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border border-gray-300 hover:bg-gray-100 transition-colors"
          >
            Ver servicios
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
