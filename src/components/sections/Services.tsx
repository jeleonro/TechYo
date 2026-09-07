import { motion } from 'framer-motion';
import { Globe, Zap, Wrench } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Páginas web',
    description:
      'Sitios web claros, rápidos y responsivos para que tu negocio tenga presencia profesional en internet.',
  },
  {
    icon: Zap,
    title: 'Automatizaciones',
    description:
      '¿Pierdes tiempo respondiendo los mismos mensajes o repitiendo tareas manuales? Automatizo esos procesos.',
  },
  {
    icon: Wrench,
    title: 'Soporte y mantenimiento',
    description:
      'Acompañamiento después de la entrega: ajustes, mejoras y resolución de problemas cuando los necesites.',
  },
];

function Services() {
  return (
    <section id="servicios" className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿En qué puedo ayudarte?
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Servicios pensados para negocios que quieren crecer sin
            complicarse con la parte técnica.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-5">
                  <Icon size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;