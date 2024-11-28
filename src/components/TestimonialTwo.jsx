import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Ricardo Silva',
    role: 'CEO',
    company: 'TechBrasil',
    avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80',
    content:
      'A Adapt Full transformou nossa abordagem estratégica, resultando em um aumento de 40% na eficiência operacional e melhor satisfação dos clientes.',
  },
  {
    id: 2,
    name: 'Ana Martins',
    role: 'Diretora de Operações',
    company: 'Inovação S.A.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
    logo: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?auto=format&fit=crop&q=80',
    content:
      'O profissionalismo e expertise da equipe são impressionantes. Implementaram soluções que superaram nossas expectativas.',
  },
  {
    id: 3,
    name: 'Carlos Eduardo',
    role: 'Gerente de Projetos',
    company: 'Nexus Corp',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    logo: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80',
    content:
      'A metodologia única da Adapt Full nos ajudou a otimizar processos e aumentar nossa receita em 25% em apenas 6 meses.',
  },
];

function TestimonialTwo() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <span className="text-[#FF0100] font-semibold text-lg block mb-2">Nossos Depoimentos</span>
            <h2 className="text-4xl font-bold text-[#002060]">O que nossos clientes dizem</h2>
          </div>
          <Link
            to="/depoimentos"
            className="text-[#002060] font-semibold hover:text-[#FF0100] transition-colors duration-300"
          >
            Ver Todos
          </Link>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Scrollbar, A11y, EffectFade, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col">
                  <div className="mb-6">
                    <img
                      src={testimonial.logo}
                      alt={testimonial.company}
                      className="h-12 w-auto object-contain opacity-80"
                    />
                  </div>

                  <div className="review-body flex-grow">
                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                      "{testimonial.content}"
                    </p>
                  </div>

                  <div className="flex items-center mt-6 pt-6 border-t border-gray-100">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-gray-100"
                    />
                    <div className="ml-4">
                      <h6 className="font-semibold text-[#002060] text-lg">
                        {testimonial.name}
                      </h6>
                      <span className="text-gray-500 block">{testimonial.role}</span>
                      <span className="text-[#FF0100] text-sm">{testimonial.company}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default TestimonialTwo;
