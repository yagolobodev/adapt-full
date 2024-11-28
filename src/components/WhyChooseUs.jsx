import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { HiOutlineLightBulb, HiOutlineScale, HiOutlineChartBar, HiOutlineCube, HiOutlineUsers, HiOutlineCog } from 'react-icons/hi';

const features = [
  {
    icon: <HiOutlineLightBulb className="w-7 h-7" />,
    title: 'Inovação Constante',
    description: 'Implementamos soluções inovadoras que mantêm sua empresa à frente no mercado.',
  },
  {
    icon: <HiOutlineScale className="w-7 h-7" />,
    title: 'Abordagem Equilibrada',
    description: 'Estratégias que equilibram crescimento sustentável com resultados imediatos.',
  },
  {
    icon: <HiOutlineChartBar className="w-7 h-7" />,
    title: 'Resultados Mensuráveis',
    description: 'Foco em métricas e indicadores claros para acompanhar o progresso.',
  },
  {
    icon: <HiOutlineCube className="w-7 h-7" />,
    title: 'Soluções Integradas',
    description: 'Abordagem holística que considera todos os aspectos do seu negócio.',
  },
  {
    icon: <HiOutlineUsers className="w-7 h-7" />,
    title: 'Experiência Comprovada',
    description: 'Anos de experiência em transformação de negócios e resultados comprovados.',
  },
  {
    icon: <HiOutlineCog className="w-7 h-7" />,
    title: 'Processos Otimizados',
    description: 'Metodologias eficientes que maximizam produtividade e reduzem custos.',
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-[#002060] mb-4"
          >
            Por Que Nos Escolher
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Combinamos experiência e inovação para entregar resultados excepcionais
          </motion.p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              }
            }}
            className="pb-12"
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group h-full"
                >
                  <div className="relative overflow-hidden bg-[#002060] border border-[#002060] rounded-2xl p-8 transition-all duration-700 h-[280px] hover:shadow-2xl">
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>
                    
                    {/* Content wrapper with hover effect */}
                    <div className="relative z-10 transition-all duration-700 group-hover:translate-y-[-4px] flex flex-col h-full">
                      {/* Icon */}
                      <div className="mb-6">
                        <div className="text-white transform transition-all duration-700 ease-out scale-100 group-hover:scale-125">
                          {feature.icon}
                        </div>
                      </div>
                      {/* Content */}
                      <div className="flex flex-col flex-grow">
                        <h3 className="text-xl font-semibold mb-3 text-white transition-all duration-700">
                          {feature.title}
                        </h3>
                        <p className="text-white/80 transition-all duration-700">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
