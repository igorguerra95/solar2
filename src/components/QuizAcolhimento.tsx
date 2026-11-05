import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, CheckCircle2, ArrowRight, RotateCcw, Heart, Shield, Calendar } from 'lucide-react';

interface QuizAcolhimentoProps {
  onConcluir: (recomendacao: string, modalidade: 'presencial' | 'online') => void;
}

export const QuizAcolhimento: React.FC<QuizAcolhimentoProps> = ({ onConcluir }) => {
  const [etapa, setEtapa] = useState<number>(1);
  const [queixa, setQueixa] = useState<string>('');
  const [formato, setFormato] = useState<'presencial' | 'online'>('online');
  const [urgencia, setUrgencia] = useState<string>('');

  const opcoesQueixa = [
    {
      id: 'ansiedade',
      titulo: 'Mente acelerada e angústia no peito',
      detalhe: 'Dificuldade para relaxar, insônia, preocupações contínuas e crises repentinas.',
      recomendacao: 'Ansiedade & Síndrome do Pânico',
    },
    {
      id: 'esgotamento',
      titulo: 'Cansaço crônico e perda de sentido',
      detalhe: 'Sobrecarga profissional, desânimo prolongado e sensação de vazio emocional.',
      recomendacao: 'Depressão & Esgotamento (Burnout)',
    },
    {
      id: 'relacionamento',
      titulo: 'Conflitos afetivos e mágoas no casal',
      detalhe: 'Dificuldade de comunicação, distanciamento e crises na relação amorosa.',
      recomendacao: 'Terapia de Casal & Relações',
    },
    {
      id: 'autoconhecimento',
      titulo: 'Desejo de autoconhecimento e limites',
      detalhe: 'Aprender a dizer não, fortalecer autoestima e clarear objetivos de vida.',
      recomendacao: 'Autoconhecimento & Regulação Emocional',
    },
  ];

  const handleReiniciar = () => {
    setEtapa(1);
    setQueixa('');
    setFormato('online');
    setUrgencia('');
  };

  const recomendacaoAtual = opcoesQueixa.find((o) => o.id === queixa)?.recomendacao || 'Acolhimento Geral Integrativo';

  return (
    <section id="simulador" className="py-20 bg-[#FAF8F5] relative overflow-hidden subtle-grain">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#10B981]/30 text-xs uppercase tracking-wider font-bold text-[#065F46] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Simulador de Orientação Clínica</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#142921]">
            Não sabe por onde começar? Nós ajudamos você.
          </h2>
          <p className="text-sm sm:text-base text-[#4E665C] mt-2">
            Responda 3 perguntas breves e receba uma orientação inicial acolhedora para seu momento.
          </p>
        </div>

        {/* Card do Simulador */}
        <div className="rounded-3xl bg-white border border-[#E8E3DB] p-6 sm:p-10 shadow-xl relative">
          
          {/* Barra de Progresso Suave */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E8E3DB]">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#064E3B] text-white text-xs font-bold flex items-center justify-center">
                {etapa}
              </span>
              <span className="text-xs font-semibold text-[#142921] uppercase tracking-wider">
                {etapa === 1 && 'Passo 1 de 3: O que você mais sente hoje?'}
                {etapa === 2 && 'Passo 2 de 3: Qual modalidade prefere?'}
                {etapa === 3 && 'Passo 3 de 3: Qual seu tempo de início?'}
                {etapa === 4 && '✦ Seu Perfil de Acolhimento Recomendado'}
              </span>
            </div>

            {etapa < 4 && (
              <div className="flex gap-1.5">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`w-6 h-1.5 rounded-full transition-all ${
                      step <= etapa ? 'bg-[#064E3B]' : 'bg-[#E8E3DB]'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Etapa 1: Queixa Principal */}
          {etapa === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h3 className="font-serif text-2xl font-bold text-[#142921] text-left">
                Qual destas sensações melhor descreve seu peito nos últimos dias?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {opcoesQueixa.map((op) => (
                  <button
                    key={op.id}
                    onClick={() => {
                      setQueixa(op.id);
                      setEtapa(2);
                    }}
                    className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                      queixa === op.id
                        ? 'border-[#064E3B] bg-[#ECFDF5] shadow-md'
                        : 'border-[#E8E3DB] hover:border-[#D4AF37] hover:bg-[#FAF8F5]'
                    }`}
                  >
                    <h4 className="font-serif text-lg font-bold text-[#142921] mb-1">
                      {op.titulo}
                    </h4>
                    <p className="text-xs text-[#4E665C] leading-relaxed">
                      {op.detalhe}
                    </p>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Etapa 2: Formato */}
          {etapa === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6 text-left"
            >
              <h3 className="font-serif text-2xl font-bold text-[#142921]">
                Como você se sentiria mais confortável para conversar?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => {
                    setFormato('online');
                    setEtapa(3);
                  }}
                  className="p-6 rounded-2xl border border-[#E8E3DB] hover:border-[#064E3B] hover:bg-[#ECFDF5] transition-all text-left cursor-pointer"
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-[#064E3B] text-white text-[10px] font-bold uppercase tracking-wider mb-2">
                    Mais Prático
                  </span>
                  <h4 className="font-serif text-xl font-bold text-[#142921] mb-1">
                    Psicoterapia Online
                  </h4>
                  <p className="text-xs text-[#4E665C] leading-relaxed">
                    No aconchego e privacidade da sua casa, sem estresse de trânsito, por sala criptografada.
                  </p>
                </button>

                <button
                  onClick={() => {
                    setFormato('presencial');
                    setEtapa(3);
                  }}
                  className="p-6 rounded-2xl border border-[#E8E3DB] hover:border-[#064E3B] hover:bg-[#ECFDF5] transition-all text-left cursor-pointer"
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-[#D4AF37] text-[#142921] text-[10px] font-bold uppercase tracking-wider mb-2">
                    Imersão Sensorial
                  </span>
                  <h4 className="font-serif text-xl font-bold text-[#142921] mb-1">
                    Atendimento Presencial
                  </h4>
                  <p className="text-xs text-[#4E665C] leading-relaxed">
                    Vivenciando o consultório sensorial com acústica calma, aromaterapia e silêncio terapêutico.
                  </p>
                </button>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setEtapa(1)}
                  className="text-xs text-[#6C8278] hover:text-[#142921] underline"
                >
                  ← Voltar à pergunta anterior
                </button>
              </div>
            </motion.div>
          )}

          {/* Etapa 3: Momento */}
          {etapa === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6 text-left"
            >
              <h3 className="font-serif text-2xl font-bold text-[#142921]">
                Qual o seu momento ideal para dar esse primeiro passo?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    id: 'urgente',
                    label: 'Gostaria de iniciar ainda esta semana',
                    sub: 'Preciso de um acolhimento com prioridade na agenda.',
                  },
                  {
                    id: 'planejando',
                    label: 'Estou me planejando para os próximos 15 dias',
                    sub: 'Quero conhecer a proposta e alinhar meus horários.',
                  },
                ].map((u) => (
                  <button
                    key={u.id}
                    onClick={() => {
                      setUrgencia(u.id);
                      setEtapa(4);
                    }}
                    className="p-5 rounded-2xl border border-[#E8E3DB] hover:border-[#064E3B] hover:bg-[#ECFDF5] transition-all text-left cursor-pointer"
                  >
                    <h4 className="font-serif text-lg font-bold text-[#142921] mb-1">
                      {u.label}
                    </h4>
                    <p className="text-xs text-[#4E665C]">
                      {u.sub}
                    </p>
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setEtapa(2)}
                  className="text-xs text-[#6C8278] hover:text-[#142921] underline"
                >
                  ← Voltar à pergunta anterior
                </button>
              </div>
            </motion.div>
          )}

          {/* Etapa 4: Resultado / Recomendação Acolhedora */}
          {etapa === 4 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6 text-left"
            >
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#ECFDF5] to-[#F3EFE9] border border-[#10B981]/30">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#065F46] mb-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  <span>Recomendação Personalizada Gerada</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#142921]">
                  Foco indicado: <span className="text-[#064E3B]">{recomendacaoAtual}</span>
                </h3>

                <p className="text-sm text-[#334B41] mt-2 leading-relaxed">
                  Com base no que você compartilhou, o formato mais benéfico para o seu ritmo
                  é a modalidade <strong>{formato === 'online' ? 'Online' : 'Presencial'}</strong>.
                  Nós preparamos uma sessão de acolhimento sob medida, sem roteiros pré-moldados.
                </p>

                <div className="mt-4 pt-4 border-t border-[#10B981]/20 flex flex-wrap gap-4 text-xs text-[#4E665C]">
                  <span className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-[#064E3B]" /> Sigilo ético total
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-[#D4AF37]" /> Escuta compreensiva
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onConcluir(recomendacaoAtual, formato)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white bg-[#064E3B] hover:bg-[#047857] shadow-lg shadow-[#064E3B]/20 transition-all border border-[#D4AF37]/40 cursor-pointer"
                >
                  <span>Entrar em contato</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </button>

                <button
                  onClick={handleReiniciar}
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-full text-xs font-medium text-[#4E665C] hover:text-[#142921] hover:bg-[#FAF8F5] transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Refazer perguntas</span>
                </button>
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
};
