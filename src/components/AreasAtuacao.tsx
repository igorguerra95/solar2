import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Wind,
  SunDim,
  HeartHandshake,
  Feather,
  Sparkles,
  MonitorSmartphone,
  ArrowRight,
  Clock,
  Check,
  HelpCircle,
  LucideIcon
} from 'lucide-react';
import { AREAS_ATUACAO } from '../data/terapias';
import { AreaAtuacao } from '../types';

interface AreasAtuacaoProps {
  onSelectArea: (areaNome: string) => void;
}

export const AreasAtuacao: React.FC<AreasAtuacaoProps> = ({ onSelectArea }) => {
  const [filtroAtivo, setFiltroAtivo] = useState<string>('todas');
  const [areaExpandida, setAreaExpandida] = useState<string | null>(null);

  const getIcon = (iconName: string): LucideIcon => {
    switch (iconName) {
      case 'Wind': return Wind;
      case 'SunDim': return SunDim;
      case 'HeartHandshake': return HeartHandshake;
      case 'Feather': return Feather;
      case 'Sparkles': return Sparkles;
      case 'MonitorSmartphone': return MonitorSmartphone;
      default: return Sparkles;
    }
  };

  const areasFiltradas = AREAS_ATUACAO.filter((area) => {
    if (filtroAtivo === 'todas') return true;
    if (filtroAtivo === 'humor' && (area.id === 'ansiedade' || area.id === 'depressao-burnout')) return true;
    if (filtroAtivo === 'relacoes' && (area.id === 'casal-relacoes' || area.id === 'luto-transicoes')) return true;
    if (filtroAtivo === 'desenvolvimento' && (area.id === 'autoconhecimento' || area.id === 'terapia-online')) return true;
    return true;
  });

  return (
    <section id="areas" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção com Hierarquia Dramática */}
        <div className="max-w-3xl text-left mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECFDF5] border border-[#10B981]/30 text-xs uppercase tracking-wider font-bold text-[#065F46] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Abordagens Clínicas de Cuidado</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#142921] tracking-tight leading-tight">
            Caminhos terapêuticos desenhados para a sua singularidade
          </h2>
          
          <p className="text-base sm:text-lg text-[#4A5F56] mt-4 font-normal leading-relaxed">
            Cada sofrimento psíquico expressa uma necessidade não atendida. Combinamos protocolos
            baseados em evidências científicas à sensibilidade de uma presença empática e acolhedora.
          </p>

          {/* Filtros em Chips / Pill Labels */}
          <div className="flex flex-wrap gap-2.5 pt-8">
            {[
              { id: 'todas', label: 'Todas as Áreas' },
              { id: 'humor', label: 'Ansiedade & Esgotamento' },
              { id: 'relacoes', label: 'Casal & Relações' },
              { id: 'desenvolvimento', label: 'Autoconhecimento & Online' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFiltroAtivo(f.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  filtroAtivo === f.id
                    ? 'bg-[#064E3B] text-white shadow-md shadow-[#064E3B]/15 border border-[#D4AF37]/50'
                    : 'bg-white text-[#4A5F56] border border-[#E8E3DB] hover:bg-[#F3EFE9] hover:text-[#142921]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Cards das Áreas (12 colunas) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areasFiltradas.map((area, index) => {
            const Icon = getIcon(area.icone);
            const isExpanded = areaExpandida === area.id;

            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="rounded-3xl bg-white border border-[#E8E3DB] p-7 flex flex-col justify-between card-hover-effect relative overflow-hidden group shadow-sm text-left"
              >
                {/* Destaque sutil no topo do card se for prioritário */}
                {area.destaque && (
                  <div className="absolute top-0 right-0">
                    <span className="inline-block bg-[#064E3B] text-[#FEF3C7] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-bl-xl border-b border-l border-[#D4AF37]/40">
                      Alta Procura
                    </span>
                  </div>
                )}

                <div>
                  {/* Ícone com toque esmeralda e dourado */}
                  <div className="w-13 h-13 rounded-2xl bg-[#F0FDF4] border border-[#10B981]/25 flex items-center justify-center text-[#064E3B] mb-6 group-hover:bg-[#064E3B] group-hover:text-[#D4AF37] transition-all duration-300">
                    <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                  </div>

                  {/* Títulos e Subtítulos */}
                  <h3 className="font-serif text-2xl font-bold text-[#142921] leading-snug group-hover:text-[#064E3B] transition-colors">
                    {area.titulo}
                  </h3>
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#B8860B] mt-1 mb-3">
                    {area.subtitulo}
                  </p>

                  <p className="text-sm text-[#4A5F56] font-normal leading-relaxed mb-5">
                    {area.resumo}
                  </p>

                  {/* Sinais Frequentes / Sintomas */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#142921] block">
                      Sinais frequentes trabalhados:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {area.sintomasComuns.map((sintoma, sIdx) => (
                        <span
                          key={sIdx}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#FAF8F5] border border-[#E8E3DB] text-[11px] text-[#334B41] font-medium"
                        >
                          <Check className="w-3 h-3 text-[#10B981]" />
                          <span>{sintoma}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expansão de detalhes da metodologia */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pt-4 border-t border-[#E8E3DB] space-y-3 mb-4 text-xs text-[#4A5F56]"
                      >
                        <div>
                          <strong className="text-[#142921] block mb-1">Abordagem Aplicada:</strong>
                          <p className="leading-relaxed bg-[#F0FDF4] p-2.5 rounded-xl border border-[#10B981]/20 text-[#065F46]">
                            {area.abordagem}
                          </p>
                        </div>
                        <div>
                          <strong className="text-[#142921] block mb-1">Como atua no processo:</strong>
                          <p className="leading-relaxed">{area.descricaoCompleta}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Rodapé do Card */}
                <div className="pt-5 border-t border-[#E8E3DB] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-[#6C8278]">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span className="text-[11px]">{area.tempoMedio}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setAreaExpandida(isExpanded ? null : area.id)}
                      className="text-xs text-[#065F46] hover:text-[#047857] underline font-medium cursor-pointer"
                    >
                      {isExpanded ? 'Menos' : 'Saiba mais'}
                    </button>
                    <button
                      onClick={() => onSelectArea(area.titulo)}
                      className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-[#064E3B] hover:bg-[#047857] text-white text-xs font-semibold shadow-xs hover:shadow-md transition-all cursor-pointer"
                    >
                      <span>Entrar em contato</span>
                      <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bloco de Atendimento Personalizado no Rodapé da Seção */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#064E3B] to-[#047857] text-white text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl border border-[#D4AF37]/30">
          <div className="max-w-2xl">
            <span className="inline-block text-[#FEF3C7] text-xs font-bold uppercase tracking-widest mb-1">
              ✦ Dúvida sobre qual área melhor acolhe você?
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Cada pessoa é única e muitas vezes as dores se entrelaçam.
            </h3>
            <p className="text-sm text-[#D1FAE5]/85 mt-2 leading-relaxed">
              Você não precisa saber de antemão qual diagnóstico ou abordagem se encaixa no seu momento.
              Na primeira sessão, nós deciframos esse mapa juntos com total acolhimento.
            </p>
          </div>
          <button
            onClick={() => onSelectArea('Acolhimento Geral / Indefinido')}
            className="shrink-0 px-6 py-3.5 rounded-full bg-[#D4AF37] hover:bg-[#B8860B] text-[#142921] font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            Entrar em contato
          </button>
        </div>

      </div>
    </section>
  );
};
