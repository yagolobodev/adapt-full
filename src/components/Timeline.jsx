import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineClipboardList, HiOutlineChatAlt2, HiOutlinePresentationChartLine, HiOutlineLightBulb } from 'react-icons/hi';

const ProcessSection = () => {
  const steps = [
    {
      icon: <HiOutlineClipboardList className="w-8 h-8" />,
      title: "Primeiro Contato",
      description: "Preencha nosso formulário de contato com suas informações iniciais.",
      color: "bg-[#002060]/5 text-[#002060]"
    },
    {
      icon: <HiOutlineChatAlt2 className="w-8 h-8" />,
      title: "Diagnóstico",
      description: "Agendamos uma conversa para entender suas necessidades e avaliar como podemos ajudar seu negócio.",
      color: "bg-[#002060]/5 text-[#002060]"
    },
    {
      icon: <HiOutlinePresentationChartLine className="w-8 h-8" />,
      title: "Proposta",
      description: "Apresentamos detalhadamente nossa metodologia, investimento, prazo e retorno esperado.",
      color: "bg-[#002060]/5 text-[#002060]"
    },
    {
      icon: <HiOutlineLightBulb className="w-8 h-8" />,
      title: "Decisão",
      description: "Você decide se faz sentido para seu contexto atual, sem compromissos ou surpresas.",
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
            Como Contratar a Adapt
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Conheça os próximos passos para iniciar sua transformação empresarial
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
              className="group text-center h-full"
            >
              <div className="relative bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-lg border border-gray-100 h-full flex flex-col">
                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center">
                  <div className={`w-16 h-16 rounded-xl ${step.color} transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#002060]/10 flex items-center justify-center`}>
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold text-[#002060] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
