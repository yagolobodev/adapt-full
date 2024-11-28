import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ricardo Silva',
      role: 'CEO',
      company: 'TechBrasil',
      avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80',
      companyLogo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80',
      quote: 'A Adapt Full transformou nossa abordagem estratégica, resultando em um aumento de 40% na eficiência operacional e melhor satisfação dos clientes.'
    },
    {
      name: 'Ana Martins',
      role: 'Diretora de Operações',
      company: 'Inovação S.A.',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
      companyLogo: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?auto=format&fit=crop&q=80',
      quote: 'O profissionalismo e expertise da equipe são impressionantes. Implementaram soluções que superaram nossas expectativas.'
    },
    {
      name: 'Carlos Eduardo',
      role: 'Gerente de Projetos',
      company: 'Nexus Corp',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      companyLogo: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80',
      quote: 'A metodologia única da Adapt Full nos ajudou a otimizar processos e aumentar nossa receita em 25% em apenas 6 meses.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#FF0100] font-semibold text-lg block mb-2"
            >
              Nossos Depoimentos
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-[#002060]"
            >
              O que nossos clientes dizem
            </motion.h2>
          </div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#002060] font-semibold hover:text-[#FF0100] transition-colors duration-300"
          >
            Ver Todos
          </motion.button>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="testimonials-slider !pb-16"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="mb-6">
                  <img
                    src={testimonial.companyLogo}
                    alt={testimonial.company}
                    className="h-12 w-auto object-contain opacity-80"
                  />
                </div>

                <p className="text-gray-600 mb-8 text-lg">"{testimonial.quote}"</p>

                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-gray-100"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-[#002060] text-lg">{testimonial.name}</h4>
                    <p className="text-gray-500">{testimonial.role}</p>
                    <p className="text-[#FF0100] text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
