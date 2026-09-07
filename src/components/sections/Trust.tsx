import { motion } from 'framer-motion';
import { ShieldCheck, Clock, DollarSign } from 'lucide-react';

const guarantees = [
  {
    icon: ShieldCheck,
    title: 'Sin compromiso inicial',
    description: 'La primera conversación es gratuita, sin letra chica.',
  },
  {
    icon: DollarSign,
    title: 'Precios claros',
    description: 'Sabes el costo total antes de empezar. Sin cobros ocultos.',
  },
  {
    icon: Clock,
    title: 'Comunicación constante',
    description: 'Te mantengo al tanto del avance en cada etapa del proyecto.',
  },
];

const techStack = [
  'React',
  'TypeScript',
  'Python',
  'Supabase',
  'n8n',
  'FastAPI',
];

function Trust() {
  return (
    <section className="py-24 px-6 md:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por qué trabajar conmigo
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            No prometo magia. Prometo trabajo serio, comunicación honesta y
            resultados que funcionan.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {guarantees.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm text-gray-500 mb-5 uppercase tracking-wide">
            Tecnologías que domino
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Trust;