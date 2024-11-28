import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            className="text-base font-semibold leading-7 text-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Nossos Serviços
          </motion.h2>
          <motion.p
            className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Soluções completas para sua empresa
          </motion.p>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Oferecemos uma variedade de serviços personalizados para atender às necessidades específicas do seu negócio.
          </motion.p>
        </div>

        <motion.div
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-primary mb-2">{service.name}</h3>
                    <div className="h-1 w-20 bg-secondary rounded"></div>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/servicos/${service.id}`}
                    className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300"
                  >
                    Saiba mais
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const services = [
  {
    id: 'consultoria',
    name: 'Consultoria',
    description: 'Consultoria especializada com atendimento 100% online para maior flexibilidade.',
    features: [
      'Atendimento personalizado',
      'Agendamento flexível',
      'Valor por hora de consultoria',
      'Suporte contínuo',
    ],
  },
  {
    id: 'assessoria',
    name: 'Assessoria',
    description: 'Acompanhamento profissional disponível nos formatos online e presencial.',
    features: [
      'Versões online e presencial',
      '12 horas mensais (presencial)',
      '6 horas mensais (online)',
      'Atendimento personalizado',
    ],
  },
  {
    id: 'mentoria',
    name: 'Mentoria',
    description: 'Programa estruturado com metodologia comprovada e resultados garantidos.',
    features: [
      '8 encontros de 1.5h',
      'Escopo definido e padronizado',
      'Material de apoio exclusivo',
      'Acompanhamento individual',
    ],
  },
  {
    id: 'academy',
    name: 'Academy',
    description: 'Treinamentos especializados com temas relevantes para o mercado atual.',
    features: [
      'Temas variados ao longo do ano',
      'Vagas limitadas',
      'Certificado de conclusão',
      'Material didático exclusivo',
    ],
  },
];
