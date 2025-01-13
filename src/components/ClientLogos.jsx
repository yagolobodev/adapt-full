import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const ClientLogos = () => {
  const clients = [
    { name: 'Buysoft', logo: '/clients/Buysoft.png' },
    { name: 'Clean Pool', logo: '/clients/Clean-Pool.png' },
    { name: 'Art Plus', logo: '/clients/artplus.png' },
    { name: 'Central Soft', logo: '/clients/central-soft.png' },
    { name: 'Engepar', logo: '/clients/engepar.png' },
    { name: 'Fand', logo: '/clients/fand.png' },
    { name: 'Grupo Pakita', logo: '/clients/grupo-pakita.png' },
    { name: 'Hidroset', logo: '/clients/hidroset.png' },
    { name: 'Ingá Peças Agrícolas', logo: '/clients/inga-pecas-agricolas.png' },
    { name: 'Labinga', logo: '/clients/labinga.png' },
    { name: 'Marfel', logo: '/clients/marfel.png' },
    { name: 'Master Flores', logo: '/clients/master-flores.png' },
    { name: 'Master Toys', logo: '/clients/master-toys.png' },
    { name: 'Motopar', logo: '/clients/motopar.png' },
    { name: 'Naturally', logo: '/clients/naturally.png' },
    { name: 'Noma Motors', logo: '/clients/noma-motors.png' },
    { name: 'Ody Park', logo: '/clients/ody-park.png' },
    { name: 'Orthodontic', logo: '/clients/orthodontic.png' },
    { name: 'Print Press', logo: '/clients/print-press.png' },
    { name: 'Ramo Selvagem', logo: '/clients/ramo-selvagem.png' },
    { name: 'Remac', logo: '/clients/remac.png' },
    { name: 'Retífica Global', logo: '/clients/retifica-global.png' },
    { name: 'SG Sistemas', logo: '/clients/sg-sistemas.png' },
    { name: 'Tecnospeed', logo: '/clients/tecnospeed.png' },
    { name: 'Visolux', logo: '/clients/visolux.png' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#002060] mb-4">Empresas que já se Adaptaram</h2>
          <p className="text-gray-600">Empresas que confiam em nosso trabalho</p>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
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
            1280: {
              slidesPerView: 6,
            },
          }}
          className="client-logos-swiper"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center p-4 h-32">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-20 w-auto object-contain transition-all duration-300 hover:opacity-80"
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
