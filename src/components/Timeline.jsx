import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineClipboardList, HiOutlineChatAlt2, HiOutlinePresentationChartLine, HiOutlineLightBulb } from 'react-icons/hi';

const ProcessSection = () => {
  const steps = [
    {
      icon: <HiOutlineClipboardList className="w-8 h-8" />,
      title: "Planejamento",
      description: "Análise detalhada e desenvolvimento de estratégias personalizadas.",
      color: "bg-[#002060]/5 text-[#002060]"
    },
    {
      icon: <HiOutlineChatAlt2 className="w-8 h-8" />,
      title: "Consultoria",
      description: "Orientação especializada para alcançar seus objetivos de negócio.",
      color: "bg-[#002060]/5 text-[#002060]"
    },
    {
      icon: <HiOutlinePresentationChartLine className="w-8 h-8" />,
      title: "Crescimento",
      description: "Implementação de soluções que impulsionam seu crescimento.",
      color: "bg-[#002060]/5 text-[#002060]"
    },
    {
      icon: <HiOutlineLightBulb className="w-8 h-8" />,
      title: "Sucesso",
      description: "Resultados mensuráveis e sucesso sustentável a longo prazo.",
      color: "bg-[#002060]/5 text-[#002060]"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-[#002060] mb-4"
          >
            Nosso Processo de Trabalho
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Uma abordagem estruturada para transformar seu negócio
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-lg border border-gray-100">
                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center">
                  <div className={`w-16 h-16 rounded-xl ${step.color} transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#002060]/10 flex items-center justify-center`}>
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-[#002060] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
