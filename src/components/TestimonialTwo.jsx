import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
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
  {
    id: 4,
    name: 'Mariana Costa',
    role: 'Diretora Financeira',
    company: 'GrupoMax',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80',
    content:
      'Com a consultoria da Adapt Full, conseguimos reduzir custos em 30% e aumentar nossa margem de lucro significativamente.',
  },
  {
    id: 5,
    name: 'Pedro Almeida',
    role: 'Diretor Comercial',
    company: 'VendaMais',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80',
    logo: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&q=80',
    content:
      'A mentoria oferecida transformou nossa equipe de vendas. Batemos recordes de faturamento nos últimos três trimestres.',
  },
  {
    id: 6,
    name: 'Isabela Santos',
    role: 'CEO',
    company: 'FuturoTech',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80',
    logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80',
    content:
      'O programa de desenvolvimento de lideranças da Adapt Full foi fundamental para o crescimento sustentável da nossa empresa.',
  }
];

function TestimonialTwo() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#FF0100] font-semibold text-lg block mb-2">Nossos Depoimentos</span>
          <h2 className="text-4xl font-bold text-[#002060]">O que nossos clientes dizem</h2>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Scrollbar, A11y, EffectFade, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-testimonial',
              prevEl: '.swiper-button-prev-testimonial',
            }}
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
            className="testimonials-swiper px-12"
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
          
          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev-testimonial absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer z-10 hover:bg-gray-50 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#002060" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </div>
          <div className="swiper-button-next-testimonial absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer z-10 hover:bg-gray-50 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#002060" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialTwo;
