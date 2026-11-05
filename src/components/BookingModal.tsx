import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, CheckCircle2, Shield, ArrowRight, Sun } from 'lucide-react';
import { AREAS_ATUACAO } from '../data/terapias';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  areaInicial?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  areaInicial,
}) => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [modalidade, setModalidade] = useState<'online' | 'presencial'>('online');
  const [areaSelecionada, setAreaSelecionada] = useState(areaInicial || AREAS_ATUACAO[0].titulo);
  const [turno, setTurno] = useState<'manha' | 'tarde' | 'noite'>('tarde');
  const [diaSemana, setDiaSemana] = useState('Terça-feira');
  const [sucesso, setSucesso] = useState(false);
  const [carregando, setCarregando] = useState(false);

  // Sincroniza se areaInicial mudar
  React.useEffect(() => {
    if (areaInicial) {
      setAreaSelecionada(areaInicial);
    }
  }, [areaInicial]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome || !telefone || !email) return;

    setCarregando(true);
    setTimeout(() => {
      setCarregando(false);
      setSucesso(true);
    }, 700);
  };

  const handleReset = () => {
    setSucesso(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#064E3B]/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#E8E3DB] overflow-hidden z-10 text-left my-8"
          >
            {/* Header do Modal com Dourado e Esmeralda */}
            <div className="bg-[#064E3B] text-white px-6 py-5 flex items-center justify-between border-b border-[#D4AF37]/30">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#10B981]/20 border border-[#D4AF37]/50 flex items-center justify-center">
                  <Sun className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#FEF3C7] leading-none">
                    Agendamento de Acolhimento
                  </h3>
                  <span className="text-[11px] text-[#D1FAE5]/70 block mt-1">
                    Solar Zensorial • Espaçoterapias
                  </span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Fechar janela"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Corpo do Modal */}
            <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
              {sucesso ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#ECFDF5] border border-[#10B981]/30 text-[#10B981] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#142921]">
                    Solicitação Registrada!
                  </h4>
                  <p className="text-sm text-[#4E665C] leading-relaxed max-w-md mx-auto">
                    Obrigado, <strong>{nome}</strong>. Nós reservamos sua preferência para{' '}
                    <strong>{diaSemana}</strong> no período da <strong>{turno}</strong>. Nossa equipe
                    entrará em contato pelo WhatsApp <strong>{telefone}</strong> para confirmar seu horário.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#064E3B] hover:bg-[#047857] transition-all cursor-pointer"
                    >
                      Concluir
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <p className="text-xs text-[#5B7569] leading-relaxed">
                    Escolha a área e o melhor momento para sua sessão de acolhimento inicial.
                  </p>

                  {/* Modalidade */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#142921] mb-2">
                      1. Formato da Consulta
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setModalidade('online')}
                        className={`p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                          modalidade === 'online'
                            ? 'bg-[#064E3B] text-white border-[#064E3B] shadow-xs'
                            : 'bg-[#FAF8F5] text-[#4E665C] border-[#E8E3DB] hover:bg-white'
                        }`}
                      >
                        Psicoterapia Online
                      </button>
                      <button
                        type="button"
                        onClick={() => setModalidade('presencial')}
                        className={`p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                          modalidade === 'presencial'
                            ? 'bg-[#064E3B] text-white border-[#064E3B] shadow-xs'
                            : 'bg-[#FAF8F5] text-[#4E665C] border-[#E8E3DB] hover:bg-white'
                        }`}
                      >
                        Presencial (Consultório)
                      </button>
                    </div>
                  </div>

                  {/* Área */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#142921] mb-2">
                      2. Foco Principal de Cuidado
                    </label>
                    <select
                      value={areaSelecionada}
                      onChange={(e) => setAreaSelecionada(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8E3DB] bg-[#FAF8F5] text-sm text-[#142921] focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20 cursor-pointer"
                    >
                      {AREAS_ATUACAO.map((area) => (
                        <option key={area.id} value={area.titulo}>
                          {area.titulo}
                        </option>
                      ))}
                      <option value="Outro / Acolhimento Geral">Outro / Acolhimento Geral</option>
                    </select>
                  </div>

                  {/* Dia da Semana e Turno */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#142921] mb-2">
                        3. Dia de Preferência
                      </label>
                      <select
                        value={diaSemana}
                        onChange={(e) => setDiaSemana(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-[#E8E3DB] bg-[#FAF8F5] text-xs text-[#142921] focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20 cursor-pointer"
                      >
                        <option value="Segunda-feira">Segunda-feira</option>
                        <option value="Terça-feira">Terça-feira</option>
                        <option value="Quarta-feira">Quarta-feira</option>
                        <option value="Quinta-feira">Quinta-feira</option>
                        <option value="Sexta-feira">Sexta-feira</option>
                        <option value="Sábado (Manhã)">Sábado (Manhã)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#142921] mb-2">
                        4. Turno
                      </label>
                      <select
                        value={turno}
                        onChange={(e) => setTurno(e.target.value as any)}
                        className="w-full px-3 py-2.5 rounded-xl border border-[#E8E3DB] bg-[#FAF8F5] text-xs text-[#142921] focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20 cursor-pointer"
                      >
                        <option value="manha">Manhã</option>
                        <option value="tarde">Tarde</option>
                        <option value="noite">Noite</option>
                      </select>
                    </div>
                  </div>

                  {/* Dados Pessoais */}
                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#142921] mb-1">
                        Seu Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nome completo"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E8E3DB] bg-[#FAF8F5] text-sm text-[#142921] focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#142921] mb-1">
                          WhatsApp / Telefone *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="(DDD) 99999-9999"
                          value={telefone}
                          onChange={(e) => setTelefone(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-[#E8E3DB] bg-[#FAF8F5] text-sm text-[#142921] focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#142921] mb-1">
                          E-mail *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="seu@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-[#E8E3DB] bg-[#FAF8F5] text-sm text-[#142921] focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Botão de Ação: "Entrar em contato" */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={carregando}
                      className="w-full py-3.5 rounded-full text-sm font-bold text-white bg-[#064E3B] hover:bg-[#047857] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 border border-[#D4AF37]/50 cursor-pointer"
                    >
                      {carregando ? (
                        <span className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                      ) : (
                        <>
                          <span>Entrar em contato</span>
                          <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
