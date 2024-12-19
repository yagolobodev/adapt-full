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
    name: 'Fabiana Castro',
    role: 'Gerente Financeira',
    company: 'Grupo Pakita',
    avatar: '/depoimentos/Fabiana Castro.jpeg',
    logo: '/depoimentos/grupopakita.png',
    content:
      'A competência e o profissionalismo demonstrados em todas as etapas do processo tributário foram fundamentais para otimizar nossos processos e garantir tomadas certas de decisões. A consultoria vai além das nossas expectativas, oferece soluções personalizadas e esclarece todas as nossas dúvidas de forma clara e eficiente. Sem dúvida, a parceria com a Adapt tem sido de grande valor para o nosso crescimento e sucesso.',
  },
  {
    id: 2,
    name: 'Paulo Henrique',
    role: 'Administrador',
    company: 'Ramo Selvagem / Di Luck',
    avatar: '/depoimentos/depoimento-paulo-henrique.png',
    logo: '/depoimentos/ramo-selvagem.png',
    content:
      'A Adapt Consultoria está com nossa empresa a quase 5 anos, profissional competente e comprometido. Ao buscar consultorias hoje esperamos profissionais sérios, que nos guie e abram nossa mente para vermos mais claramente os cenários, fazendo assim, tornam nossas tomadas de decisão mais assertivas.',
  },
  {
    id: 3,
    name: 'Primo Raffagnato',
    role: 'Administrador Motopar',
    company: 'Motopar',
    avatar: '/depoimentos/depimento-primo-raffagnato.png',
    logo: '/depoimentos/motopar.png',
    content:
      'A Adapt Consultoria nos ajuda a controlar nossos impostos mensais, nos permite pagar apenas o que é correto segunda a legislação tributária. Nos orienta sobre a lucratividade da nossa empresa e nos acompanhamentos dos serviços de contabilidade que são terceirizados.',
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
