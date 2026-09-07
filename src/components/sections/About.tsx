import { motion } from 'framer-motion';
import { Code2, GraduationCap, MessageCircle } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    text: 'Formación técnica sólida en desarrollo de software',
  },
  {
    icon: Code2,
    text: 'Experiencia trabajando con React, Python y herramientas de automatización',
  },
  {
    icon: MessageCircle,
    text: 'Comunicación directa: trato personal, sin intermediarios',
  },
];

function About() {
  return (
    <section id="sobre-nosotros" className="py-24 px-6 md:px-16 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Sobre Nosotros
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed text-center max-w-2xl mx-auto mb-12">
            En TechYo nos especializamos en desarrollar soluciones web y automatizaciones para negocios que quieren simplificar su día a día. Como un emprendimiento emergente, nos diferenciamos por ofrecer un trato cercano, personalizado y 100% dedicado a cada proyecto, garantizando que tu empresa reciba la atención directa que necesita para optimizar sus tiempos y escalar sin complicaciones.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center gap-3 p-4"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <Icon size={20} className="text-blue-600" />
                  </div>
                  <p className="text-sm text-gray-700">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;