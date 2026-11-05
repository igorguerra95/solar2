import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { PERGUNTAS_FREQUENTES } from '../data/terapias';

interface FaqSectionProps {
  onOpenBooking: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking }) => {
  const [categoriaAtiva, setCategoriaAtiva] = useState<string>('todas');
  const [abertoId, setAbertoId] = useState<string | null>('faq-1');

  const faqsFiltradas = PERGUNTAS_FREQUENTES.filter((f) => {
    if (categoriaAtiva === 'todas') return true;
    return f.categoria === categoriaAtiva;
  });

  const toggleAccordion = (id: string) => {
    setAbertoId(abertoId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECFDF5] border border-[#10B981]/30 text-xs uppercase tracking-wider font-bold text-[#065F46] mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Esclarecimentos Clínicos</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#142921] tracking-tight">
            Perguntas Frequentes &amp; Transparência
          </h2>
          <p className="text-base text-[#4E665C] mt-3">
            Tire suas dúvidas sobre modalidades, sigilo profissional, reembolso e o acolhimento inicial.
          </p>

          {/* Filtros em Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {[
              { id: 'todas', label: 'Todas as dúvidas' },
              { id: 'geral', label: 'Início & Duração' },
              { id: 'consultas', label: 'Online vs Presencial' },
              { id: 'sigilo', label: 'Sigilo & Ética' },
              { id: 'valores', label: 'Reembolso & Convênio' },
            ].map((c) => (
              <button
                key={c.id}
                onClick={() => setCategoriaAtiva(c.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  categoriaAtiva === c.id
                    ? 'bg-[#064E3B] text-white shadow-xs border border-[#D4AF37]/50'
                    : 'bg-white text-[#4E665C] border border-[#E8E3DB] hover:bg-[#F3EFE9]'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Lista Accordion */}
        <div className="space-y-4 text-left">
          {faqsFiltradas.map((faq) => {
            const isOpen = abertoId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white border border-[#E8E3DB] overflow-hidden transition-all duration-200 shadow-2xs hover:border-[#D4AF37]/40"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl font-bold text-[#142921]">
                    {faq.pergunta}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-[#064E3B] text-[#D4AF37]' : 'bg-[#FAF8F5] text-[#4E665C]'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                      <div className="px-6 pb-6 pt-2 text-[#4E665C] text-sm sm:text-base leading-relaxed border-t border-[#E8E3DB]/60">
                        {faq.resposta}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Caixa de Apoio Final da Seção */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F0FDF4] border border-[#10B981]/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div>
            <h4 className="font-serif text-lg font-bold text-[#065F46]">
              Ainda tem alguma pergunta específica?
            </h4>
            <p className="text-xs sm:text-sm text-[#4E665C] mt-0.5">
              Nossa equipe responde com carinho, discrição e sem qualquer compromisso.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#064E3B] hover:bg-[#047857] transition-all cursor-pointer"
          >
            <span>Entrar em contato</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
          </button>
        </div>

      </div>
    </section>
  );
};
