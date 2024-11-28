import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaBuilding, FaChartLine, FaUsers } from 'react-icons/fa';

const CTA = () => {
  const revenueOptions = [
    "Até R$ 10.000",
    "R$ 10.000 a R$ 50.000",
    "R$ 50.000 a R$ 100.000",
    "R$ 100.000 a R$ 500.000",
    "Acima de R$ 500.000"
  ];

  const stageOptions = [
    "Iniciando o negócio",
    "Em crescimento",
    "Consolidado no mercado",
    "Buscando expansão",
    "Enfrentando desafios"
  ];

  const segmentOptions = [
    "Comércio",
    "Serviços",
    "Indústria",
    "Tecnologia",
    "Outro"
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#002060] to-[#001040]">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/10 to-transparent"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white lg:sticky lg:top-24"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-white/20 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center"
                  >
                    {i === 0 && <FaBuilding className="w-5 h-5 text-white/80" />}
                    {i === 1 && <FaChartLine className="w-5 h-5 text-white/80" />}
                    {i === 2 && <FaUsers className="w-5 h-5 text-white/80" />}
                  </div>
                ))}
              </div>
              <span className="text-white/80">+2000 clientes satisfeitos</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transforme seu
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Negócio Hoje
              </span>
            </h2>
            
            <p className="text-white/80 text-lg mb-8 max-w-xl leading-relaxed">
              Nossa consultoria especializada está pronta para impulsionar seus resultados
              com soluções personalizadas e estratégias inovadoras.
            </p>

            {/* Social Proof */}
            <div className="grid grid-cols-3 gap-6 p-6 bg-[#FF0000]/10 rounded-2xl backdrop-blur-sm mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">94%</div>
                <div className="text-sm text-white/60">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">+500</div>
                <div className="text-sm text-white/60">Projetos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">12</div>
                <div className="text-sm text-white/60">Anos</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome da sua empresa
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 focus:border-[#002060] focus:ring-[#002060] transition-colors"
                  placeholder="Digite o nome da empresa"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Qual o segmento da sua empresa?
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 focus:border-[#002060] focus:ring-[#002060] transition-colors">
                  <option value="">Selecione o segmento</option>
                  {segmentOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Qual o faturamento mensal da sua empresa?
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 focus:border-[#002060] focus:ring-[#002060] transition-colors">
                  <option value="">Selecione o faturamento</option>
                  {revenueOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Qual o seu nome?
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 focus:border-[#002060] focus:ring-[#002060] transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Número de telefone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 focus:border-[#002060] focus:ring-[#002060] transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail corporativo
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 focus:border-[#002060] focus:ring-[#002060] transition-colors"
                  placeholder="seu@email.com.br"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Em qual estágio você está?
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 focus:border-[#002060] focus:ring-[#002060] transition-colors">
                  <option value="">Selecione o estágio</option>
                  {stageOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Qual seu principal desafio?
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 focus:border-[#002060] focus:ring-[#002060] transition-colors"
                  rows="3"
                  placeholder="Descreva seu principal desafio"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#002060] text-white py-4 px-6 rounded-xl font-medium hover:bg-[#002060]/90 transition-colors flex items-center justify-center gap-2 group"
              >
                Receber uma proposta
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-sm text-gray-500 text-center">
                Ao enviar, você concorda com nossa{' '}
                <a href="#" className="text-[#002060] hover:underline">
                  Política de Privacidade
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
