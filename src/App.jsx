import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import BeConsultant from './pages/BeConsultant';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/servico/:id" element={<ServiceDetail />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/seja-um-consultor" element={<BeConsultant />} />
          </Routes>
        </div>
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
