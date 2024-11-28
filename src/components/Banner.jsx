import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { HiArrowRight } from 'react-icons/hi';

const Banner = () => {
  const slides = [
    {
      title: "Crescimento sustentável através de gestão estratégica",
      subtitle: "Consultoria Estratégica",
      description: "Potencialize o crescimento do seu negócio com estratégias inovadoras e resultados comprovados.",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80",
      cta: "Iniciar Jornada",
    },
    {
      title: "Resultados mensuráveis em vendas, lucro e caixa",
      subtitle: "Excelência em Gestão",
      description: "Maximize o potencial da sua empresa com soluções personalizadas e métricas tangíveis.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      cta: "Descobrir Mais",
    },
    {
      title: "Transformação estratégica com metodologia própria",
      subtitle: "Soluções Futuras",
      description: "Desenvolva uma cultura de excelência e inovação para crescimento contínuo.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
      cta: "Explorar Soluções",
    },
  ];

  return (
    <div className="relative h-screen">
      <div className="swiper-banner-main">
        <Swiper
          modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
          effect="fade"
          speed={700}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation
          className="h-screen"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="banner-slide relative h-screen">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    filter: 'brightness(0.6) saturate(1.2)',
                  }}
                />
                {/* Navy Blue Overlay */}
                <div className="absolute inset-0 bg-navy/50" style={{ backgroundColor: 'rgba(0, 32, 96, 0.5)' }} />
                {/* Content Container */}
                <div className="container mx-auto h-full relative">
                  <div className="flex items-center justify-center h-full pt-32">
                    <div className="banner-content text-center max-w-4xl mx-auto px-4">
                      <div className="wrapper space-y-6">
                        <span className="text-[#FF0100] text-lg md:text-xl font-semibold tracking-wider uppercase block">
                          {slide.subtitle}
                        </span>
                        
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                          {slide.title}
                        </h1>
                        
                        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto">
                          {slide.description}
                        </p>
                        
                        <div className="pt-4">
                          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white rounded-full transition-all duration-300 hover:bg-primary-600 hover:translate-x-1">
                            <span className="text-lg font-medium">
                              {slide.cta}
                            </span>
                            <HiArrowRight className="text-xl transition-transform duration-300 group-hover:translate-x-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53.3 600 46.7 720 43.3C840 40 960 40 1080 43.3C1200 46.7 1320 53.3 1380 56.7L1440 60V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default Banner;
