import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Diagnóstico gratuito',
    description:
      'Conversamos sobre tu negocio y lo que necesitas. Sin compromiso, solo para entender el problema.',
  },
  {
    number: '02',
    title: 'Propuesta clara',
    description:
      'Te envío una propuesta con alcance, tiempos y precio definidos. Sin sorpresas ni letra chica.',
  },
  {
    number: '03',
    title: 'Desarrollo',
    description:
      'Construyo tu página o automatización, manteniéndote al tanto del avance en cada etapa.',
  },
  {
    number: '04',
    title: 'Entrega y soporte',
    description:
      'Recibes tu proyecto funcionando, con acompañamiento para ajustes o dudas después de la entrega.',
  },
];

function HowItWorks() {
  return (
    <section className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cómo Trabajamos
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Un proceso simple y transparente, para que sepas qué esperar en
            cada paso.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <span className="text-5xl font-bold text-blue-100 mb-4 block">
                {step.number}
              </span>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;