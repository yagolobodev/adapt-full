import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

export default function Contact() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: '',
    });
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&q=80")',
              filter: 'brightness(0.3)'
            }}
          />
        </motion.div>

        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Entre em Contato
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300"
          >
            Estamos aqui para ajudar sua empresa a crescer
          </motion.p>
        </div>
      </section>

      {/* Contact Info and Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Vamos Conversar Sobre o
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(207,0,15)] to-[rgba(207,0,15,0.8)]"> Seu Negócio</span>
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  Nossa equipe está pronta para entender suas necessidades e oferecer as melhores soluções para o seu negócio.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[rgb(207,0,15)]/20 to-[rgba(207,0,15,0.8)]/20 flex items-center justify-center">
                    <FaPhone className="w-6 h-6 text-[rgb(207,0,15)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Telefone</h3>
                    <p className="text-gray-600">(11) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[rgb(207,0,15)]/20 to-[rgba(207,0,15,0.8)]/20 flex items-center justify-center">
                    <FaEnvelope className="w-6 h-6 text-[rgb(207,0,15)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">E-mail</h3>
                    <p className="text-gray-600">contato@adapt.com.br</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[rgb(207,0,15)]/20 to-[rgba(207,0,15,0.8)]/20 flex items-center justify-center">
                    <FaMapMarkerAlt className="w-6 h-6 text-[rgb(207,0,15)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Endereço</h3>
                    <p className="text-gray-600">São Paulo, SP</p>
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
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Inicie sua Transformação</h3>
                <p className="text-gray-600">Preencha o formulário abaixo e receba uma análise personalizada do seu negócio.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome da sua empresa
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 focus:border-[#002060] focus:ring-[#002060] transition-colors"
                    placeholder="Digite o nome da empresa"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Qual o segmento da sua empresa?
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 focus:border-[#002060] focus:ring-[#002060] transition-colors"
                  >
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
                  <select
                    name="revenue"
                    value={formData.revenue}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 focus:border-[#002060] focus:ring-[#002060] transition-colors"
                  >
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
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
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
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 focus:border-[#002060] focus:ring-[#002060] transition-colors"
                    placeholder="seu@email.com.br"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Em qual estágio você está?
                  </label>
                  <select
                    name="stage"
                    value={formData.stage}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 focus:border-[#002060] focus:ring-[#002060] transition-colors"
                  >
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
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 focus:border-[#002060] focus:ring-[#002060] transition-colors"
                    rows="3"
                    placeholder="Descreva seu principal desafio"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[rgb(207,0,15)] to-[rgba(207,0,15,0.8)] text-white py-4 px-6 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
                >
                  Enviar Formulário
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
