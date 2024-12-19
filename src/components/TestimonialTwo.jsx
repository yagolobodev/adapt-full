import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

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
  },
  {
    id: 4,
    name: 'Roni',
    role: 'CEO',
    company: 'Natural One',
    avatar: '/depoimentos/Roni-Natural-One.png',
    logo: '/depoimentos/logotipo-natural-one.png',
    content:
      'A Adapt vem sendo muito importante para as definições de nosso futuro, são essenciais no planejamento. Com eles, as decisões são mais acertivas.',
  }
];

function TestimonialTwo() {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#FF0100] font-semibold text-lg block mb-2">Nossos Depoimentos</span>
          <h2 className="text-4xl font-bold text-[#002060]">O que nossos clientes dizem</h2>
        </div>

        <div className="relative">
          <div className="px-12">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next-testimonial',
                prevEl: '.swiper-button-prev-testimonial',
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              speed={500}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
              className="testimonials-swiper"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col min-h-[450px]">
                    <div className="mb-6">
                      <img
                        src={testimonial.logo}
                        alt={testimonial.company}
                        className="h-12 w-auto object-contain opacity-80"
                      />
                    </div>

                    <div className={`relative flex-grow ${testimonial.content.length > 200 ? (!expandedCards[testimonial.id] ? 'min-h-[180px] max-h-[180px] overflow-hidden' : 'min-h-[180px]') : 'min-h-[180px]'}`}>
                      <p className="text-gray-600 leading-relaxed text-lg mb-6">
                        "{testimonial.content}"
                      </p>
                      {testimonial.content.length > 200 && !expandedCards[testimonial.id] && (
                        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
                      )}
                    </div>

                    {testimonial.content.length > 200 && (
                      <button
                        onClick={() => toggleCard(testimonial.id)}
                        className="text-primary hover:text-primary-dark transition-colors mb-4 flex items-center justify-center gap-2 w-full"
                      >
                        {expandedCards[testimonial.id] ? (
                          <>
                            Ler menos <FaChevronUp className="text-sm" />
                          </>
                        ) : (
                          <>
                            Ler mais <FaChevronDown className="text-sm" />
                          </>
                        )}
                      </button>
                    )}
                    <div className="flex items-center pt-6 border-t border-gray-100">
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

          <button className="swiper-button-prev-testimonial absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg z-10 flex items-center justify-center text-primary hover:text-primary-dark transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="swiper-button-next-testimonial absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg z-10 flex items-center justify-center text-primary hover:text-primary-dark transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default TestimonialTwo;
