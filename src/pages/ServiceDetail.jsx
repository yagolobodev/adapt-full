import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Serviço não encontrado</h2>
          <Link to="/servicos" className="text-secondary hover:text-secondary/80">
            Voltar para serviços
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/servicos"
              className="inline-flex items-center text-sm text-gray-600 hover:text-primary mb-8"
            >
              ← Voltar para serviços
            </Link>

            <h1 className="text-4xl font-bold text-primary mb-4">{service.name}</h1>
            <div className="h-1 w-20 bg-secondary rounded mb-8"></div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">{service.description}</p>

              <h2 className="text-2xl font-bold text-primary mb-6">Características do Serviço</h2>
              <ul className="space-y-4 mb-12">
                {service.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-600">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-primary mb-6">Benefícios</h2>
              <ul className="space-y-4 mb-12">
                {service.benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <span className="text-secondary mr-2">✓</span>
                    <span className="text-gray-600">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="bg-primary/5 rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-primary mb-4">Metodologia</h2>
                <p className="text-gray-600">{service.methodology}</p>
              </div>

              <div className="text-center">
                <Link
                  to="/contato"
                  className="inline-block bg-secondary text-white px-8 py-4 rounded-lg hover:bg-secondary/90 transition-colors duration-300"
                >
                  Solicitar Proposta
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const services = [
  {
    id: 'consultoria',
    name: 'Consultoria',
    description: 'Nossa consultoria oferece atendimento 100% online, permitindo flexibilidade e eficiência no processo de transformação do seu negócio.',
    features: [
      'Atendimento personalizado',
      'Agendamento flexível',
      'Valor por hora de consultoria',
      'Suporte contínuo',
    ],
    benefits: [
      'Diagnóstico preciso das necessidades do seu negócio',
      'Soluções personalizadas para seus desafios',
      'Acompanhamento dos resultados em tempo real',
      'Flexibilidade de horários e economia de tempo',
    ],
    methodology: 'Nossa metodologia de consultoria é baseada em três pilares: diagnóstico aprofundado, planejamento estratégico e implementação assistida. Trabalhamos em estreita colaboração com sua equipe para garantir resultados efetivos e duradouros.',
  },
  {
    id: 'assessoria',
    name: 'Assessoria',
    description: 'Serviço de assessoria disponível nos formatos online e presencial, adaptando-se às necessidades específicas do seu negócio.',
    features: [
      'Versões online e presencial',
      '12 horas mensais (presencial)',
      '6 horas mensais (online)',
      'Atendimento personalizado',
    ],
    benefits: [
      'Acompanhamento contínuo do seu negócio',
      'Implementação assistida de melhorias',
      'Suporte na tomada de decisões estratégicas',
      'Otimização de processos e resultados',
    ],
    methodology: 'Nossa assessoria é um processo contínuo de acompanhamento, onde estabelecemos metas claras e mensuráveis, realizamos análises periódicas e ajustamos as estratégias conforme necessário para garantir o sucesso do seu negócio.',
  },
  {
    id: 'mentoria',
    name: 'Mentoria',
    description: 'Programa estruturado de mentoria com início, meio e fim, focado em resultados práticos e transformação real do seu negócio.',
    features: [
      '8 encontros de 1.5h',
      'Escopo definido e padronizado',
      'Material de apoio exclusivo',
      'Acompanhamento individual',
    ],
    benefits: [
      'Desenvolvimento acelerado de competências',
      'Aprendizado com casos práticos e reais',
      'Networking com outros empresários',
      'Transformação efetiva do seu negócio',
    ],
    methodology: 'Nossa mentoria segue uma metodologia estruturada em módulos progressivos, combinando teoria e prática. Cada encontro é cuidadosamente planejado para maximizar o aprendizado e garantir a aplicação prática dos conhecimentos.',
  },
  {
    id: 'academy',
    name: 'Academy',
    description: 'Programa de treinamentos especializados com temas atuais e relevantes para o mercado empresarial.',
    features: [
      'Temas variados ao longo do ano',
      'Vagas limitadas',
      'Certificado de conclusão',
      'Material didático exclusivo',
    ],
    benefits: [
      'Acesso a conhecimento atualizado e relevante',
      'Interação com especialistas do mercado',
      'Networking qualificado',
      'Aplicação prática dos conhecimentos',
    ],
    methodology: 'A Adapt Academy oferece treinamentos intensivos e práticos, com conteúdo atualizado e relevante para o mercado atual. Utilizamos metodologias ativas de aprendizagem e casos reais para garantir a absorção e aplicação do conhecimento.',
  },
];
