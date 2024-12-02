import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaRocket, FaLightbulb, FaChartLine } from 'react-icons/fa';

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
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#002060] via-[#001850] to-[#001040]">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#002060]/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white lg:sticky lg:top-24"
          >
            {/* Benefits Section */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400/20 to-cyan-400/20 flex items-center justify-center">
                  <FaRocket className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-lg text-white/90">Acelere seu crescimento</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400/20 to-cyan-400/20 flex items-center justify-center">
                  <FaLightbulb className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-lg text-white/90">Soluções personalizadas</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400/20 to-cyan-400/20 flex items-center justify-center">
                  <FaChartLine className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-lg text-white/90">Resultados comprovados</span>
              </div>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Pronto para
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Transformar seu Negócio?
              </span>
            </h2>
            
            <p className="text-white/80 text-lg mb-8 max-w-xl leading-relaxed">
              Junte-se a centenas de empresários que já transformaram seus negócios com nossa consultoria.
              Dê o primeiro passo para o crescimento exponencial da sua empresa.
            </p>

            <div className="p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
              <p className="text-white/90 italic">
                "A consultoria da Adapt foi um divisor de águas para nossa empresa. Em apenas 6 meses, 
                aumentamos nosso faturamento em 150%."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20"></div>
                <div>
                  <p className="text-white font-medium">João Silva</p>
                  <p className="text-white/60 text-sm">CEO, TechSolutions</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-xl backdrop-blur-lg border border-white/20"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Inicie sua Transformação</h3>
              <p className="text-gray-600">Preencha o formulário abaixo e receba uma análise personalizada do seu negócio.</p>
            </div>

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
                className="w-full bg-gradient-to-r from-[#002060] to-[#001040] text-white py-4 px-6 rounded-xl font-medium hover:from-[#001040] hover:to-[#002060] transition-all duration-300 flex items-center justify-center gap-2 group transform hover:scale-[1.02]"
              >
                Quero transformar meu negócio
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
