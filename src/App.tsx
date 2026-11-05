import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SensoryStrip } from './components/SensoryStrip';
import { AreasAtuacao } from './components/AreasAtuacao';
import { SobreClinica } from './components/SobreClinica';
import { QuizAcolhimento } from './components/QuizAcolhimento';
import { FaqSection } from './components/FaqSection';
import { ContatoSection } from './components/ContatoSection';
import { BookingModal } from './components/BookingModal';
import { FloatingWhatsapp } from './components/FloatingWhatsapp';
import { Footer } from './components/Footer';

export default function App() {
  const [modalBookingAberto, setModalBookingAberto] = useState<boolean>(false);
  const [areaSelecionada, setAreaSelecionada] = useState<string>('Ansiedade & Síndrome do Pânico');
  const [modalidadeSelecionada, setModalidadeSelecionada] = useState<'presencial' | 'online' | 'indiferente'>('online');

  const handleOpenBooking = (area?: string) => {
    if (area) {
      setAreaSelecionada(area);
    }
    setModalBookingAberto(true);
  };

  const handleSelectArea = (areaNome: string) => {
    setAreaSelecionada(areaNome);
    // Rolagem suave até a seção de contato
    const contatoElement = document.getElementById('contato');
    if (contatoElement) {
      contatoElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      setModalBookingAberto(true);
    }
  };

  const handleExploreAreas = () => {
    const areasElement = document.getElementById('areas');
    if (areasElement) {
      areasElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConcluirQuiz = (recomendacao: string, modalidade: 'presencial' | 'online') => {
    setAreaSelecionada(recomendacao);
    setModalidadeSelecionada(modalidade);
    const contatoElement = document.getElementById('contato');
    if (contatoElement) {
      contatoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#142921] selection:bg-[#10B981]/20 selection:text-[#064E3B] font-sans antialiased">
      {/* Barra de Navegação Fixa com Transparência e Blur */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* 1. Seção Início (Hero) */}
      <Hero
        onOpenBooking={() => handleOpenBooking()}
        onExploreAreas={handleExploreAreas}
      />

      {/* Faixa Intermediária: O Conceito Zensorial */}
      <SensoryStrip />

      {/* 2. Seção Áreas de Atuação */}
      <AreasAtuacao onSelectArea={handleSelectArea} />

      {/* 3. Seção Sobre a Clínica e Abordagem */}
      <SobreClinica onOpenBooking={() => handleOpenBooking()} />

      {/* Simulador Interativo de Necessidade Terapêutica */}
      <QuizAcolhimento onConcluir={handleConcluirQuiz} />

      {/* Seção de Perguntas Frequentes (FAQ) */}
      <FaqSection onOpenBooking={() => handleOpenBooking()} />

      {/* 4. Seção Contato & Agendamento */}
      <ContatoSection
        areaPreSelecionada={areaSelecionada}
        modalidadePreSelecionada={modalidadeSelecionada}
      />

      {/* Rodapé Institucional Completo */}
      <Footer />

      {/* Modal Interativo de Agendamento Online */}
      <BookingModal
        isOpen={modalBookingAberto}
        onClose={() => setModalBookingAberto(false)}
        areaInicial={areaSelecionada}
      />

      {/* Botão Flutuante do WhatsApp */}
      <FloatingWhatsapp onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}
