import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  {
    id: 1,
    value: 200,
    label: 'Clientes Satisfeitos',
  },
  {
    id: 2,
    value: 40,
    label: 'Projetos Concluídos',
  },
  {
    id: 3,
    value: 15,
    label: 'Anos de Experiência',
  },
  {
    id: 4,
    value: 100,
    label: 'Projetos Globais',
  }
];

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="relative -mt-24 z-10">
      <div className="container mx-auto px-4">
        <div className="backdrop-blur-xl bg-[#FF0100]/90 rounded-[100px] shadow-2xl py-12 md:py-14 px-8 transform hover:translate-y-[-5px] transition-transform duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="group relative flex flex-col items-center p-4 rounded-xl transition-all duration-300"
              >
                {/* Counter */}
                <div ref={ref} className="text-center transform transition-all duration-500 group-hover:scale-105">
                  {inView && (
                    <div className="relative mb-2">
                      <div className="flex items-center justify-center">
                        <CountUp
                          start={0}
                          end={stat.value}
                          delay={0}
                          duration={2.5}
                          separator=","
                          className="text-4xl md:text-5xl font-bold text-white"
                        />
                        <span className="text-4xl md:text-5xl font-bold text-white ml-1">+</span>
                      </div>
                      {/* Animated underline */}
                      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/30 transition-all duration-500 group-hover:w-full" />
                    </div>
                  )}
                  <p className="text-white/90 font-medium tracking-wide mt-2">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-[200%] h-full bg-gradient-to-b from-navy/90 to-transparent rotate-2" />
        <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-[200%] h-full bg-gradient-to-b from-navy/90 to-transparent -rotate-2" />
      </div>
    </div>
  );
};

export default Stats;
