import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaChevronDown, FaChevronUp, FaQuoteRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Fabiana Castro',
    role: 'Gerente Financeira',
    company: 'Grupo Pakita',
    website: 'https://loja.grupopakita.com.br/',
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
    website: 'https://useramo.com.br/',
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
    website: 'https://www.motopar.com.br/',
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
    website: 'https://www.naturalone.com.br/',
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#FF0100] font-semibold text-lg block mb-3">Nossos Depoimentos</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#002060] mb-4">Não sou eu quem está falando</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">São CEO’S e Diretores de Empresas Reconhecidas no Mercado</p>
        </div>

        <div className="relative px-4">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-testimonial',
              prevEl: '.swiper-button-prev-testimonial',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              bulletActiveClass: 'swiper-pagination-bullet-active',
              bulletClass: 'swiper-pagination-bullet',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={800}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className="testimonials-swiper !pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto">
                <div className="bg-white rounded-2xl p-8 h-full flex flex-col relative group transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#002060] to-[#FF0100] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-2xl"></div>
                  
                  <div className="flex items-center justify-between mb-8">
                    <a 
                      href={testimonial.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <img
                        src={testimonial.logo}
                        alt={testimonial.company}
                        className="h-10 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </a>
                    <FaQuoteRight className="text-2xl text-[#FF0100]/20 group-hover:text-[#FF0100]/40 transition-colors duration-300" />
                  </div>

                  <div className={`flex-grow ${testimonial.content.length > 200 ? (!expandedCards[testimonial.id] ? 'relative' : '') : ''}`}>
                    <p className="text-gray-600 leading-relaxed">
                      {testimonial.content}
                    </p>
                    {testimonial.content.length > 200 && !expandedCards[testimonial.id] && (
                      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
                    )}
                  </div>

                  {testimonial.content.length > 200 && (
                    <button
                      onClick={() => toggleCard(testimonial.id)}
                      className="text-[#002060] hover:text-[#FF0100] transition-all duration-300 mt-4 flex items-center gap-2 text-sm font-medium"
                    >
                      {expandedCards[testimonial.id] ? (
                        <>
                          Ler menos <FaChevronUp className="text-xs transition-transform group-hover:translate-y-[-2px]" />
                        </>
                      ) : (
                        <>
                          Ler mais <FaChevronDown className="text-xs transition-transform group-hover:translate-y-[2px]" />
                        </>
                      )}
                    </button>
                  )}

                  <div className="flex items-center gap-4 pt-6 mt-6 border-t border-gray-100">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100 group-hover:ring-[#002060]/20 transition-all duration-300"
                    />
                    <div>
                      <h6 className="font-semibold text-[#002060] group-hover:text-[#002060]/80 transition-colors duration-300">
                        {testimonial.name}
                      </h6>
                      <span className="text-gray-500 text-sm block">{testimonial.role}</span>
                      <a 
                        href={testimonial.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FF0100] text-sm hover:text-[#002060] transition-colors duration-300"
                      >
                        {testimonial.company}
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-prev-testimonial absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg z-10 flex items-center justify-center text-[#002060] hover:text-[#FF0100] transition-all duration-300 hover:scale-110 border border-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="swiper-button-next-testimonial absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg z-10 flex items-center justify-center text-[#002060] hover:text-[#FF0100] transition-all duration-300 hover:scale-110 border border-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .testimonials-swiper {
          padding: 20px 0;
        }
        .swiper-slide {
          height: auto;
        }
        .swiper-pagination {
          bottom: 0 !important;
        }
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #002060;
          opacity: 0.3;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 24px;
          border-radius: 4px;
          background: #FF0100;
        }
      `}</style>
    </section>
  );
}

export default TestimonialTwo;
