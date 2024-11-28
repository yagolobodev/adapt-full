import { motion } from 'framer-motion';

export default function About() {
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
            Sobre Nós
          </motion.h2>
          <motion.p
            className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            20 anos de experiência em gestão empresarial
          </motion.p>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Ajudamos empresários a combater o grande vilão de uma empresa que é a falta de gestão, 
            sempre valorizando construir uma organização redonda que gere dinheiro no caixa de forma eficaz.
          </motion.p>
        </div>

        <motion.div 
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-primary">
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div 
          className="mt-16 sm:mt-20 lg:mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="bg-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Nossa Missão</h3>
            <p className="text-gray-600">
              Nosso compromisso é com o resultado da sua empresa. Para isso, dedicamos todo nosso know-how 
              para fazer o plano dar certo, eliminando erros de gestão e fazendo sua empresa lucrar mais.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const features = [
  {
    name: 'Experiência Comprovada',
    description: 'Mais de duas décadas ajudando empresas a alcançarem seu potencial máximo através de gestão eficiente.',
  },
  {
    name: 'Metodologia Própria',
    description: 'Desenvolvemos uma abordagem única que combina análise profunda, planejamento estratégico e acompanhamento contínuo.',
  },
  {
    name: 'Resultados Mensuráveis',
    description: 'Focamos em métricas e indicadores claros para garantir que nossos clientes vejam resultados tangíveis.',
  },
];
