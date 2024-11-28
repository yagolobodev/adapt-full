import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaChartLine, FaUsers, FaLightbulb, FaCog } from 'react-icons/fa';
import Banner from '../components/Banner';
import Services from '../components/Services';
import Stats from '../components/Stats';
import WhyChooseUs from '../components/WhyChooseUs';
import TestimonialTwo from '../components/TestimonialTwo';
import CTA from '../components/CTA';
import ProcessSection from '../components/Timeline';

export default function Home() {
  return (
    <main className="relative">
      <Banner />
      <Stats />
      <Services />
      <WhyChooseUs />
      <ProcessSection />
      <TestimonialTwo />
      <CTA />
    </main>
  );
}

const stats = [
  {
    label: 'Anos de Experiência',
    value: '20+',
    icon: FaChartLine,
  },
  {
    label: 'Clientes Satisfeitos',
    value: '500+',
    icon: FaUsers,
  },
  {
    label: 'Projetos Realizados',
    value: '1000+',
    icon: FaLightbulb,
  },
  {
    label: 'Setores Atendidos',
    value: '30+',
    icon: FaCog,
  },
];

const services = [
  {
    id: 'consultoria',
    name: 'Consultoria',
    description: 'Consultoria especializada com atendimento 100% online para maior flexibilidade.',
    icon: FaChartLine,
  },
  {
    id: 'assessoria',
    name: 'Assessoria',
    description: 'Acompanhamento profissional disponível nos formatos online e presencial.',
    icon: FaUsers,
  },
  {
    id: 'mentoria',
    name: 'Mentoria',
    description: 'Programa estruturado com metodologia comprovada e resultados garantidos.',
    icon: FaLightbulb,
  },
  {
    id: 'academy',
    name: 'Academy',
    description: 'Treinamentos especializados com temas relevantes para o mercado atual.',
    icon: FaCog,
  },
];
