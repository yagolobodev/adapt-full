import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaChartLine, FaHandshake, FaLightbulb, FaRocket } from 'react-icons/fa';
import { sendEmail } from '../utils/emailService';

const consultants = [
  {
    name: 'Ely Guimarães Neto',
    role: 'Consultor / CEO Adapt',
    region: 'Nacional',
    image: '/consultores/ely-ceo-adapt.jpg',
    specialties: ['Lucratividade', 'Tributação', 'Gestão estratégica de custos']
  },
  {
    name: 'Davi Guimarães',
    role: 'Consultor de Negócios',
    region: 'Maringá e Região',
    image: '/consultores/davi-guimaraes.png',
    specialties: ['Inteligência de negócios', 'Planejamento estratégico']
  },
  {
    name: 'Rivelino Bugica',
    role: 'Consultor de Negócios',
    region: 'Maringá e Região',
    image: '/consultores/Rivelino.png',
    specialties: ['Direito Trabalhista', 'Recursos humanos']
  },
  {
    name: 'Lucinéia Freitas',
    role: 'Consultor de Negócios',
    region: 'Maringá e Região',
    image: '/consultores/Lucinéia.png',
    specialties: ['Inteligência de negócios', 'Planejamento estratégico']
  },
  {
    name: 'Bruno Felipe',
    role: 'Consultor de Negócios',
    region: 'Maringá e Região',
    image: '/consultores/Bruno.png',
    specialties: ['Gestão de Processos']
  },
  {
    name: 'Barbara Durrer',
    role: 'Consultor de Negócios',
    region: 'São Paulo – Região Metropolitana',
    image: '/consultores/barbara-durrer.png',
    specialties: ['Gestão de Processos']
  },
  {
    name: 'Amauri Crozariori',
    role: 'Consultor de Negócios',
    region: 'Maringá e Região',
    image: '/consultores/amauri-crozariori.png',
    specialties: ['Planejamento Estratégico em vendas']
  },
  {
    name: 'Valéria Souza',
    role: 'Consultor de Negócios',
    region: 'Maringá e Região',
    image: '/consultores/valeria-souza.png',
    specialties: ['Inteligência de negócios', 'Planejamento estratégico']
  }
];

const benefits = [
  {
    icon: <FaRocket className="w-8 h-8 text-[#002060]" />,
    title: 'Crescimento Acelerado',
    description: 'Desenvolva sua carreira rapidamente com projetos desafiadores e oportunidades de aprendizado contínuo.'
  },
  {
    icon: <FaHandshake className="w-8 h-8 text-[#002060]" />,
    title: 'Networking Estratégico',
    description: 'Conecte-se com profissionais experientes e amplie sua rede de contatos no mercado.'
  },
  {
    icon: <FaLightbulb className="w-8 h-8 text-[#002060]" />,
    title: 'Autonomia e Flexibilidade',
    description: 'Gerencie seus projetos e horários com liberdade, mantendo o equilíbrio entre vida pessoal e profissional.'
  },
  {
    icon: <FaChartLine className="w-8 h-8 text-[#002060]" />,
    title: 'Alta Rentabilidade',
    description: 'Potencialize seus ganhos com projetos de alto valor agregado e participação nos resultados.'
  }
];

const stats = [
  { number: '150+', label: 'Projetos Realizados' },
  { number: '50+', label: 'Clientes Atendidos' },
  { number: '95%', label: 'Taxa de Satisfação' },
  { number: '10+', label: 'Anos de Mercado' }
];

export default function BeConsultant() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    experience: '',
    expertise: '',
    linkedin: '',
    motivation: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: '', type: '' });

    try {
      const templateParams = {
        to_email: 'contato@adaptconsultoria.com.br',
        from_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        state: formData.state,
        experience: formData.experience,
        expertise: formData.expertise,
        linkedin: formData.linkedin,
        motivation: formData.motivation
      };

      const result = await sendEmail(templateParams);
      
      if (result.success) {
        setMessage({
          text: 'Formulário enviado com sucesso! Entraremos em contato em breve.',
          type: 'success'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          city: '',
          state: '',
          experience: '',
          expertise: '',
          linkedin: '',
          motivation: ''
        });
      } else {
        setMessage({
          text: 'Erro ao enviar formulário. Por favor, tente novamente.',
          type: 'error'
        });
      }
    } catch (error) {
      setMessage({
        text: 'Erro ao enviar formulário. Por favor, tente novamente.',
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#002060] to-[#001040] text-white min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transforme sua Experiência em{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                Resultados Extraordinários
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-300">
              Junte-se à Adapt Consultoria e faça parte de uma equipe que está revolucionando 
              o mercado de consultoria empresarial no Brasil.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-blue-200 text-transparent bg-clip-text">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Por que se tornar um Consultor Adapt?
            </h2>
            <p className="text-xl text-gray-600">
              Oferecemos uma plataforma única para consultores ambiciosos que desejam 
              alcançar o próximo nível em suas carreiras.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-[#002060]">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultores Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Nossa Equipe de Sucesso</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça alguns dos consultores que estão transformando negócios e 
              alcançando resultados extraordinários com a Adapt.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {consultants.map((consultant, index) => (
              <motion.div
                key={consultant.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={consultant.image}
                    alt={consultant.name}
                    className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold mb-2">{consultant.name}</h3>
                  <p className="text-gray-600 mb-2">{consultant.role}</p>
                  <p className="text-gray-600 mb-4">{consultant.region}</p>
                  <div className="flex flex-wrap gap-2">
                    {consultant.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#002060] to-[#001040] p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Comece Sua Jornada de Sucesso
              </h2>
              <p className="text-gray-300">
                Preencha o formulário abaixo e dê o primeiro passo para se tornar um consultor Adapt.
              </p>
            </div>

            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border-gray-200 focus:border-[#002060] focus:ring-[#002060]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border-gray-200 focus:border-[#002060] focus:ring-[#002060]"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border-gray-200 focus:border-[#002060] focus:ring-[#002060]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      LinkedIn
                    </label>
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border-gray-200 focus:border-[#002060] focus:ring-[#002060]"
                      placeholder="https://linkedin.com/in/seu-perfil"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cidade
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border-gray-200 focus:border-[#002060] focus:ring-[#002060]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Estado
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border-gray-200 focus:border-[#002060] focus:ring-[#002060]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Anos de experiência em consultoria
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border-gray-200 focus:border-[#002060] focus:ring-[#002060]"
                    required
                  >
                    <option value="">Selecione...</option>
                    <option value="0-2">0-2 anos</option>
                    <option value="3-5">3-5 anos</option>
                    <option value="6-10">6-10 anos</option>
                    <option value="10+">Mais de 10 anos</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Áreas de expertise
                  </label>
                  <textarea
                    name="expertise"
                    value={formData.expertise}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border-gray-200 focus:border-[#002060] focus:ring-[#002060]"
                    rows="3"
                    placeholder="Descreva suas principais áreas de atuação e especialidades"
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Por que deseja se tornar um consultor Adapt?
                  </label>
                  <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border-gray-200 focus:border-[#002060] focus:ring-[#002060]"
                    rows="4"
                    placeholder="Conte-nos sua motivação para se juntar à nossa equipe"
                    required
                  ></textarea>
                </div>

                {message.text && (
                  <div
                    className={`p-4 rounded-lg ${
                      message.type === 'success'
                        ? 'bg-green-50 text-green-800'
                        : 'bg-red-50 text-red-800'
                    }`}
                  >
                    {message.text}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#002060] to-[#001040] text-white py-4 px-6 rounded-xl font-medium hover:from-[#001040] hover:to-[#002060] transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    'Enviando...'
                  ) : (
                    <>
                      Enviar candidatura
                      <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
