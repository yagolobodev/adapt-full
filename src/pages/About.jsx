import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  FaChartLine,
  FaLightbulb,
  FaCogs,
  FaCheckCircle,
  FaUsers,
  FaTrophy,
  FaHeadset,
  FaRocket,
  FaChevronDown,
  FaArrowLeft,
  FaArrowRight
} from 'react-icons/fa';
import { useState, useRef } from 'react';
// Import Swiper and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function About() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const [activeAccordion, setActiveAccordion] = useState('mission');

  return (
    <div className="bg-white">
      {/* Hero Section with Parallax */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ scale }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80")',
              filter: 'brightness(0.3)'
            }}
          />
        </motion.div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Transformando
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[rgb(207,0,15)] to-[rgba(207,0,15,0.8)] mt-2">
                o Futuro dos Negócios
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Integrando estratégia, transformando resultados há mais de 20 anos
            </p>
          </motion.div>
        </div>

        {/* Animated scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Title and Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Nossa Essência
              </h2>
              <div className="space-y-6">
                <p className="text-xl text-gray-600">
                  Na Adapt Full, nossa essência é fundamentada em três pilares fundamentais que norteiam todas as nossas ações e decisões. Nossa missão nos impulsiona, nossa visão nos guia e nossos valores nos mantêm fiéis aos nossos princípios.
                </p>
                <p className="text-xl text-gray-600">
                  Cada elemento de nossa essência foi cuidadosamente desenvolvido para garantir que possamos oferecer o melhor serviço e valor aos nossos clientes, sempre mantendo o compromisso com a excelência e a inovação.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Accordion */}
            <div className="space-y-4">
              {/* Missão Accordion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden border border-gray-200"
              >
                <button
                  onClick={() => setActiveAccordion(activeAccordion === 'mission' ? '' : 'mission')}
                  className="w-full p-6 flex items-center justify-between bg-white hover:bg-gray-50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-[rgb(207,0,15)] to-[rgba(207,0,15,0.8)] w-12 h-12 rounded-lg flex items-center justify-center">
                      <FaRocket className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Nossa Missão</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: activeAccordion === 'mission' ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="w-6 h-6 text-gray-500" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeAccordion === 'mission' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gray-50"
                    >
                      <div className="p-6 text-gray-700">
                        Transformar negócios através de gestão estratégica integrada, garantindo crescimento sustentável e resultados mensuráveis.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Visão Accordion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-xl overflow-hidden border border-gray-200"
              >
                <button
                  onClick={() => setActiveAccordion(activeAccordion === 'vision' ? '' : 'vision')}
                  className="w-full p-6 flex items-center justify-between bg-white hover:bg-gray-50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-[rgb(207,0,15)] to-[rgba(207,0,15,0.8)] w-12 h-12 rounded-lg flex items-center justify-center">
                      <FaLightbulb className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Nossa Visão</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: activeAccordion === 'vision' ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="w-6 h-6 text-gray-500" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeAccordion === 'vision' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gray-50"
                    >
                      <div className="p-6 text-gray-700">
                        Ser reconhecida como a principal referência em transformação de negócios através de gestão estratégica holística no Brasil.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Valores Accordion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-xl overflow-hidden border border-gray-200"
              >
                <button
                  onClick={() => setActiveAccordion(activeAccordion === 'values' ? '' : 'values')}
                  className="w-full p-6 flex items-center justify-between bg-white hover:bg-gray-50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-[rgb(207,0,15)] to-[rgba(207,0,15,0.8)] w-12 h-12 rounded-lg flex items-center justify-center">
                      <FaCogs className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Nossos Valores</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: activeAccordion === 'values' ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="w-6 h-6 text-gray-500" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeAccordion === 'values' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gray-50"
                    >
                      <div className="p-6">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <motion.li 
                            className="flex items-center gap-3 text-gray-700"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                          >
                            <FaCheckCircle className="text-[rgb(207,0,15)]" />
                            <span>Planejamento</span>
                          </motion.li>
                          <motion.li 
                            className="flex items-center gap-3 text-gray-700"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            <FaCheckCircle className="text-[rgb(207,0,15)]" />
                            <span>Sustentabilidade</span>
                          </motion.li>
                          <motion.li 
                            className="flex items-center gap-3 text-gray-700"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            <FaCheckCircle className="text-[rgb(207,0,15)]" />
                            <span>Resultados</span>
                          </motion.li>
                          <motion.li 
                            className="flex items-center gap-3 text-gray-700"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                          >
                            <FaCheckCircle className="text-[rgb(207,0,15)]" />
                            <span>Visão Holística</span>
                          </motion.li>
                          <motion.li 
                            className="flex items-center gap-3 text-gray-700"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                          >
                            <FaCheckCircle className="text-[rgb(207,0,15)]" />
                            <span>Integração</span>
                          </motion.li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars Section */}
      <section className="py-20 bg-gray-100 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
          >
            Pilares Estratégicos
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pilar 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group bg-[#002060] rounded-2xl p-8 shadow-xl transform transition-all duration-300 hover:shadow-2xl"
            >
              <div className="bg-gradient-to-br from-[rgb(207,0,15)] to-[rgba(207,0,15,0.8)] w-16 h-16 rounded-xl flex items-center justify-center mb-6 transform transition-transform group-hover:scale-110">
                <FaChartLine className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Vendas</h3>
              <ul className="space-y-3">
                <motion.li 
                  className="flex items-center gap-2 text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <FaCheckCircle className="text-[rgb(207,0,15)] flex-shrink-0" />
                  <span>Estratégias de crescimento</span>
                </motion.li>
                <motion.li 
                  className="flex items-center gap-2 text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <FaCheckCircle className="text-[rgb(207,0,15)] flex-shrink-0" />
                  <span>Processos comerciais</span>
                </motion.li>
                <motion.li 
                  className="flex items-center gap-2 text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <FaCheckCircle className="text-[rgb(207,0,15)] flex-shrink-0" />
                  <span>Gestão de relacionamento</span>
                </motion.li>
              </ul>
            </motion.div>

            {/* Pilar 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="group bg-[#002060] rounded-2xl p-8 shadow-xl transform transition-all duration-300 hover:shadow-2xl"
            >
              <div className="bg-gradient-to-br from-[rgb(207,0,15)] to-[rgba(207,0,15,0.8)] w-16 h-16 rounded-xl flex items-center justify-center mb-6 transform transition-transform group-hover:scale-110">
                <FaLightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Lucratividade</h3>
              <ul className="space-y-3">
                <motion.li 
                  className="flex items-center gap-2 text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <FaCheckCircle className="text-[rgb(207,0,15)] flex-shrink-0" />
                  <span>Otimização de margens</span>
                </motion.li>
                <motion.li 
                  className="flex items-center gap-2 text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <FaCheckCircle className="text-[rgb(207,0,15)] flex-shrink-0" />
                  <span>Eficiência operacional</span>
                </motion.li>
                <motion.li 
                  className="flex items-center gap-2 text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <FaCheckCircle className="text-[rgb(207,0,15)] flex-shrink-0" />
                  <span>Gestão de custos</span>
                </motion.li>
              </ul>
            </motion.div>

            {/* Pilar 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="group bg-[#002060] rounded-2xl p-8 shadow-xl transform transition-all duration-300 hover:shadow-2xl lg:col-span-1 md:col-span-2 lg:col-span-1"
            >
              <div className="bg-gradient-to-br from-[rgb(207,0,15)] to-[rgba(207,0,15,0.8)] w-16 h-16 rounded-xl flex items-center justify-center mb-6 transform transition-transform group-hover:scale-110">
                <FaCogs className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Caixa</h3>
              <ul className="space-y-3">
                <motion.li 
                  className="flex items-center gap-2 text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <FaCheckCircle className="text-[rgb(207,0,15)] flex-shrink-0" />
                  <span>Fluxo de caixa sustentável</span>
                </motion.li>
                <motion.li 
                  className="flex items-center gap-2 text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <FaCheckCircle className="text-[rgb(207,0,15)] flex-shrink-0" />
                  <span>Gestão financeira</span>
                </motion.li>
                <motion.li 
                  className="flex items-center gap-2 text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <FaCheckCircle className="text-[rgb(207,0,15)] flex-shrink-0" />
                  <span>Planejamento financeiro</span>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
          >
            Nossa Metodologia
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-r from-[rgb(207,0,15)] to-[rgba(207,0,15,0.8)]" />

            <div className="space-y-24">
              {[
                {
                  title: "Diagnóstico",
                  description: "Análise profunda da situação atual da empresa, identificando pontos fortes, fracos e oportunidades de melhoria."
                },
                {
                  title: "Planejamento",
                  description: "Desenvolvimento de estratégias e planos de ação personalizados para atingir os objetivos estabelecidos."
                },
                {
                  title: "Implementação",
                  description: "Execução das ações planejadas com acompanhamento constante e ajustes necessários para garantir resultados."
                },
                {
                  title: "Monitoramento",
                  description: "Avaliação contínua dos resultados e indicadores para garantir o sucesso das estratégias implementadas."
                }
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex-1">
                    <div className={`bg-[#002060] p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300`}>
                      <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>

                  {/* Timeline point */}
                  <div className="relative flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[rgb(207,0,15)] to-[rgba(207,0,15,0.8)] rounded-full flex items-center justify-center text-2xl font-bold text-white">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 bg-gray-100 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
          >
            Nossos Diferenciais
          </motion.h2>

          <div className="relative px-12">
            {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev after:content-none">
              <FaArrowLeft className="text-[rgb(207,0,15)] w-5 h-5" />
            </div>
            <div className="swiper-button-next after:content-none">
              <FaArrowRight className="text-[rgb(207,0,15)] w-5 h-5" />
            </div>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={32}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              pagination={{
                clickable: true,
                bulletActiveClass: 'bg-[rgb(207,0,15)] !opacity-100',
                bulletClass: 'inline-block w-3 h-3 rounded-full bg-gray-300 mx-2 cursor-pointer transition-all duration-300'
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="diferenciais-swiper !pb-16"
            >
              {[
                {
                  title: "Experiência Comprovada",
                  description: "Anos de experiência transformando empresas e gerando resultados mensuráveis.",
                  icon: <FaTrophy className="w-8 h-8 text-white" />,
                  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                },
                {
                  title: "Metodologia Própria",
                  description: "Abordagem única e personalizada para cada cliente e segmento de mercado.",
                  icon: <FaLightbulb className="w-8 h-8 text-white" />,
                  image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80"
                },
                {
                  title: "Equipe Especializada",
                  description: "Profissionais altamente qualificados e dedicados ao sucesso do seu negócio.",
                  icon: <FaUsers className="w-8 h-8 text-white" />,
                  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                },
                {
                  title: "Resultados Mensuráveis",
                  description: "Foco em métricas e indicadores claros para acompanhamento do progresso.",
                  icon: <FaChartLine className="w-8 h-8 text-white" />,
                  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                },
                {
                  title: "Suporte Contínuo",
                  description: "Acompanhamento próximo e suporte constante durante toda a jornada.",
                  icon: <FaHeadset className="w-8 h-8 text-white" />,
                  image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80"
                },
                {
                  title: "Inovação Constante",
                  description: "Sempre atualizados com as melhores práticas e tendências do mercado.",
                  icon: <FaRocket className="w-8 h-8 text-white" />,
                  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
                }
              ].map((differential, index) => (
                <SwiperSlide key={differential.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative h-[400px] overflow-hidden rounded-2xl"
                  >
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{
                        backgroundImage: `url('${differential.image}')`
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#002060]/80 to-[#002060]/95 transition-opacity duration-300 group-hover:opacity-90" />

                    {/* Content */}
                    <div className="relative h-full p-8 flex flex-col">
                      <div className="bg-gradient-to-br from-[rgb(207,0,15)] to-[rgba(207,0,15,0.8)] w-16 h-16 rounded-xl flex items-center justify-center mb-6 transform transition-transform group-hover:scale-110 shadow-lg">
                        {differential.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors">
                        {differential.title}
                      </h3>
                      <p className="text-gray-300 group-hover:text-white transition-colors">
                        {differential.description}
                      </p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#00174E] to-gray-900">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-5"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80")',
              filter: 'brightness(0.3)'
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Quer ser um{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(207,0,15)] to-[rgba(207,0,15,0.8)]">
                Parceiro de Negócio
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Agende uma consultoria gratuita e descubra como podemos transformar sua empresa através de uma gestão estratégica eficiente.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a
                href="/contato"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgb(207,0,15)] to-[rgba(207,0,15,0.8)] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-[rgb(207,0,15)] hover:to-[rgba(207,0,15,0.8)] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[rgb(207,0,15)]/25"
              >
                Agendar Consultoria Gratuita
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaChevronDown className="w-5 h-5 transform rotate-[-90deg]" />
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
