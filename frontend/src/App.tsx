import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Gallery from './sections/Gallery';
import About from './sections/About';
import Contact from './sections/Contact';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', message: '' });

  const showSuccessModal = (title: string, message: string) => {
    setModalContent({ title, message });
    setModalOpen(true);
  };

  const handleQuoteSuccess = () => {
    showSuccessModal('Quote Requested!', 'Thank you for your request. We\'ll get back to you soon with a free quote.');
  };

  const handleContactSuccess = () => {
    showSuccessModal('Message Sent!', 'Thank you for reaching out. We\'ll get back to you soon.');
  };

  return (
    <>
      <Header />
      <main>
        <Hero onFormSuccess={handleQuoteSuccess} />
        <Services />
        <Gallery />
        <About />
        <Contact onFormSuccess={handleContactSuccess} />
      </main>
      <Footer />
      <Modal
        isOpen={modalOpen}
        title={modalContent.title}
        message={modalContent.message}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}

export default App;
