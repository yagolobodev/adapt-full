import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaQuoteRight, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Ricardo Silva',
    role: 'CEO, TechBrasil',
    company: 'TechBrasil',
    image: '/testimonials/client1.jpg',
    content:
      'A Adapt Full transformou completamente nossa abordagem estratégica. A consultoria resultou em um aumento de 40% na eficiência operacional e uma melhoria significativa na satisfação dos nossos clientes.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ana Martins',
    role: 'Diretora de Operações',
    company: 'Inovação S.A.',
    image: '/testimonials/client2.jpg',
    content:
      'O profissionalismo e expertise da equipe são impressionantes. Eles não apenas identificaram nossas necessidades, mas também implementaram soluções que superaram nossas expectativas.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Carlos Eduardo',
    role: 'Gerente de Projetos',
    company: 'Nexus Corp',
    image: '/testimonials/client3.jpg',
    content:
      'A metodologia da Adapt Full é única. Em apenas 6 meses, conseguimos otimizar nossos processos e aumentar nossa receita em 25%. Uma parceria que realmente agrega valor.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Descubra como temos ajudado empresas a alcançarem seus objetivos através de soluções personalizadas e estratégias inovadoras.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
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
                <div className="bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col relative">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 right-8">
                    <div className="bg-secondary text-white p-3 rounded-full">
                      <FaQuoteRight className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow mb-6">
                    <p className="text-gray-600 italic leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="mt-auto">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-gray-50"
                      />
                      <div>
                        <h4 className="font-semibold text-primary">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {testimonial.role}
                        </p>
                        <p className="text-sm font-medium text-secondary">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, index) => (
                        <FaStar
                          key={index}
                          className="text-yellow-400 w-5 h-5"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-primary-dark text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300">
            Ver Todos os Depoimentos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
