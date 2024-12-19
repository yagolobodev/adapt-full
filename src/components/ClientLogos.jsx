import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const clients = [
  {
    id: 1,
    logo: '/clients/Clean-Pool.png',
    name: 'Clean Pool'
  },
  {
    id: 2,
    logo: '/clients/central-soft.png',
    name: 'Central Soft'
  },
  {
    id: 3,
    logo: '/clients/grupo-pakita.png',
    name: 'Grupo Pakita'
  },
  {
    id: 4,
    logo: '/clients/labinga.png',
    name: 'Labinga'
  },
  {
    id: 5,
    logo: '/clients/motopar.png',
    name: 'Motopar'
  },
  {
    id: 6,
    logo: '/clients/print-press.png',
    name: 'Print Press'
  },
  {
    id: 7,
    logo: '/clients/ramo-selvagem.png',
    name: 'Ramo Selvagem'
  },
  {
    id: 8,
    logo: '/clients/remac.png',
    name: 'Remac'
  },
  {
    id: 9,
    logo: '/clients/sg-sistemas.png',
    name: 'SG Sistemas'
  },
  {
    id: 10,
    logo: '/clients/tecnospeed.png',
    name: 'Tecnospeed'
  },
  {
    id: 11,
    logo: '/clients/visolux.png',
    name: 'Visolux'
  }
];

const ClientLogos = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nossos Clientes
          </h2>
          <p className="text-gray-600">
            Empresas que confiam em nosso trabalho
          </p>
        </div>
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className="clients-slider"
        >
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-16 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientLogos;
