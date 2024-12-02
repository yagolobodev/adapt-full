import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const services = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80',
    title: 'Consultoria',
    description: 'Atendimento online personalizado com hora marcada para resolver suas demandas específicas.',
    link: '/servicos',
    icon: <FaArrowRight />,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
    title: 'Assessoria',
    description: 'Acompanhamento contínuo do seu negócio, disponível nas modalidades online ou presencial.',
    link: '/servicos',
    icon: <FaArrowRight />,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80',
    title: 'Mentoria',
    description: 'Programa estruturado com 8 encontros para desenvolver habilidades específicas.',
    link: '/servicos',
    icon: <FaArrowRight />,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80',
    title: 'Academy',
    description: 'Treinamentos exclusivos com temas variados e vagas limitadas ao longo do ano.',
    link: '/servicos',
    icon: <FaArrowRight />,
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gray-500 font-medium text-lg mb-4 block"
          >
            Nossos Serviços
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#002060] mb-6"
          >
            Soluções para Cada Necessidade
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Escolha o serviço ideal para impulsionar seu negócio ao próximo nível
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <Link to={service.link} className="block">
                <div className="relative overflow-hidden rounded-2xl bg-gray-100 min-h-[420px]">
                  {/* Image */}
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110 filter grayscale hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:opacity-0" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                    <h3 className="text-2xl font-bold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-200 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center text-white/80 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      <span className="mr-2">Saiba mais</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      >
                        <FaArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            to="/servicos"
            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors duration-300 group"
          >
            <span className="mr-2">Ver todos os serviços</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <FaArrowRight className="w-4 h-4" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
