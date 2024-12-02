import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaUsers, FaLightbulb, FaGraduationCap, FaArrowRight, FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: 'consultoria',
      name: 'Consultoria',
      description: 'Soluções estratégicas personalizadas para impulsionar o crescimento do seu negócio.',
      icon: FaChartLine,
      color: 'from-[#002060] to-[#002060]/80',
      benefits: [
        'Análise detalhada do seu negócio',
        'Identificação de oportunidades de melhoria',
        'Plano de ação personalizado',
        'Acompanhamento de resultados',
        'Suporte contínuo'
      ]
    },
    {
      id: 'assessoria',
      name: 'Assessoria',
      description: 'Acompanhamento profissional para implementação de melhorias e otimização de processos.',
      icon: FaUsers,
      color: 'from-[rgb(207,0,15)] to-[rgba(207,0,15,0.8)]',
      benefits: [
        'Implementação de processos',
        'Otimização de recursos',
        'Gestão de equipes',
        'Indicadores de desempenho',
        'Melhoria contínua'
      ]
    },
    {
      id: 'mentoria',
      name: 'Mentoria',
      description: 'Desenvolvimento de lideranças e equipes com metodologia comprovada.',
      icon: FaLightbulb,
      color: 'from-[#002060] to-[#002060]/80',
      benefits: [
        'Desenvolvimento pessoal',
        'Liderança estratégica',
        'Gestão de conflitos',
        'Tomada de decisão',
        'Planejamento de carreira'
      ]
    },
    {
      id: 'academy',
      name: 'Academy',
      description: 'Programas de capacitação e treinamento para evolução profissional.',
      icon: FaGraduationCap,
      color: 'from-[rgb(207,0,15)] to-[rgba(207,0,15,0.8)]',
      benefits: [
        'Cursos especializados',
        'Workshops práticos',
        'Certificações',
        'Material didático exclusivo',
        'Networking'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80")',
              filter: 'brightness(0.3)'
            }}
          />
        </motion.div>

        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Nossos Serviços
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Soluções completas e personalizadas para impulsionar o crescimento do seu negócio
          </motion.p>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service) => {
        // Define specific images for each service
        const serviceImages = {
          consultoria: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
          assessoria: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80",
          mentoria: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
          academy: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
        };

        return (
          <section
            key={service.id}
            id={service.id}
            className="py-20 even:bg-gray-50"
          >
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900">
                    {service.name}
                  </h2>
                  <p className="text-xl text-gray-600">
                    {service.description}
                  </p>
                  <div className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[rgb(207,0,15)] flex items-center justify-center flex-shrink-0">
                          <FaCheck className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contato">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      className="mt-8 inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-[rgb(207,0,15)] to-[rgba(207,0,15,0.8)] text-white font-semibold hover:opacity-90 transition-opacity"
                    >
                      Solicitar {service.name}
                      <FaArrowRight className="ml-2" />
                    </motion.button>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative h-[500px] rounded-2xl overflow-hidden group"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url("${serviceImages[service.id]}")`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="py-20 bg-[#002060]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Pronto para
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(207,0,15)] to-[rgba(207,0,15,0.8)]"> Transformar</span>
              {" "}seu Negócio?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Entre em contato conosco e descubra como podemos ajudar sua empresa a alcançar novos patamares de sucesso.
            </p>
            <Link to="/contato">
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-[rgb(207,0,15)] to-[rgba(207,0,15,0.8)] text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Fale Conosco
                <FaArrowRight className="ml-2" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
