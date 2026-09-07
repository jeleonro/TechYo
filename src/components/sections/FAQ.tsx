import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: '¿Cuánto tiempo tarda un proyecto?',
    answer:
      'Depende del alcance, pero una página web sencilla suele tomar entre 1 y 2 semanas. Las automatizaciones varían según la complejidad del proceso a automatizar. Te doy un tiempo estimado en la propuesta inicial.',
  },
  {
    question: '¿Qué necesito para empezar?',
    answer:
      'Solo agendar la llamada gratuita. Ahí conversamos sobre tu negocio, qué necesitas, y a partir de eso te armo una propuesta concreta.',
  },
  {
    question: '¿Cómo funciona el pago?',
    answer:
      'Trabajamos con un adelanto al iniciar el proyecto y el resto contra entrega. Los términos exactos se definen en la propuesta, sin sorpresas.',
  },
  {
    question: '¿Ofreces soporte después de la entrega?',
    answer:
      'Sí, incluyo un periodo de soporte post-entrega para ajustes y resolución de dudas. Si necesitas mantenimiento continuo, también puedo ofrecerlo aparte.',
  },
  {
    question: '¿Trabajas con negocios de cualquier tamaño?',
    answer:
      'Sí, desde emprendedores individuales hasta pequeñas empresas. Adapto la propuesta a lo que realmente necesitas, sin venderte más de lo necesario.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Preguntas frecuentes
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left font-medium hover:bg-gray-50 transition-colors"
              >
                {faq.question}
                <ChevronDown
                  size={18}
                  className={`shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;