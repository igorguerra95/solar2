import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, HeartHandshake, ArrowRight, Sparkles, CheckCircle2, PhoneCall } from 'lucide-react';
import { METRICAS_CLINICAS } from '../data/terapias';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreAreas: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreAreas }) => {
  return (
    <section id="inicio" className="relative pt-8 pb-20 md:pt-16 md:pb-32 overflow-hidden subtle-grain">
      {/* Luz ambiente orgânica e relaxante de fundo */}
      <div className="absolute top-0 right-10 w-[500px] h-[500px] rounded-full ambient-glow-gold pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-[600px] h-[600px] rounded-full ambient-glow-emerald pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Coluna Esquerda: Texto e Chamada de Conversão */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Pill Badge Superior */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#ECFDF5] border border-[#10B981]/30 shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
              <span className="text-xs uppercase tracking-wider font-bold text-[#065F46]">
                Espaço de Acolhimento &amp; Psicoterapia Integrativa
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            </motion.div>

            {/* Headline Magnético com Clamp Dramático */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="space-y-3"
            >
              <h1 className="font-serif text-[#142921] text-[44px] sm:text-[58px] lg:text-[72px] xl:text-[80px] font-semibold tracking-[-0.03em] leading-[1.04]">
                O silêncio que sua <span className="italic font-normal text-[#064E3B]">mente procura</span>.{' '}
                <br className="hidden sm:inline" />
                O acolhimento que sua{' '}
                <span className="underline decoration-[#D4AF37] decoration-wavy decoration-1 underline-offset-8">
                  história merece
                </span>.
              </h1>
            </motion.div>

            {/* Subheadline Reflexivo e Confortador */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
              className="text-lg sm:text-xl text-[#3A5046] font-normal leading-relaxed max-w-2xl"
            >
              Um refúgio terapêutico concebido para desacelerar o ritmo crônico da vida,
              compreender as raízes da ansiedade e restaurar sua paz através de uma
              escuta verdadeiramente profunda, humana e sem pressa.
            </motion.p>

            {/* CTAs de Ação Imediata */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-semibold text-white bg-[#064E3B] hover:bg-[#047857] shadow-lg shadow-[#064E3B]/25 hover:shadow-xl hover:shadow-[#064E3B]/30 hover:-translate-y-0.5 transition-all duration-300 border border-[#D4AF37]/50 cursor-pointer"
              >
                <span>Entrar em contato</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreAreas}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-medium text-[#142921] bg-white/80 hover:bg-white hover:text-[#064E3B] border border-[#E8E3DB] shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <span>Conhecer Áreas de Atuação</span>
              </button>
            </motion.div>

            {/* Pilares de Segurança & Confiança */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.32 }}
              className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-[#E8E3DB]/80 text-xs text-[#4A5F56]"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>Sigilo ético 100% garantido</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>Atendimento Presencial e Online</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>Recibo para reembolso em convênio</span>
              </div>
            </motion.div>
          </div>

          {/* Coluna Direita: Composição Editorial com Imagem do Consultório & Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Moldura Principal da Foto do Consultório */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-br from-[#D4AF37]/30 via-transparent to-[#10B981]/25 blur-lg opacity-70 -z-10" />

              <div className="relative rounded-[2rem] overflow-hidden border border-[#E8E3DB] shadow-2xl bg-white">
                <img
                  src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&w=1200&q=85"
                  alt="Consultório acolhedor e sereno do Solar Zensorial"
                  className="w-full h-[460px] object-cover object-center filter brightness-[0.98] contrast-[1.02] hover:scale-102 transition-transform duration-700"
                  loading="eager"
                />

                {/* Gradiente sutil na base da foto */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#142921]/75 via-transparent to-transparent" />

                {/* Legenda embutida na foto */}
                <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold text-[#FEF3C7] mb-2 border border-white/20">
                    <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                    <span>Espaço Físico Zensorial</span>
                  </div>
                  <p className="font-serif text-xl sm:text-2xl font-medium leading-snug">
                    "Criado para que o seu corpo aprenda novamente a soltar a tensão."
                  </p>
                </div>
              </div>

              {/* Card Flutuante 1: Sessão de Acolhimento */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -top-6 -left-4 sm:-left-8 glass-card rounded-2xl p-4 shadow-xl border border-[#E8E3DB] max-w-[230px] text-left hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] border border-[#10B981]/30 flex items-center justify-center text-[#065F46] shrink-0">
                    <HeartHandshake className="w-5 h-5 text-[#10B981]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#142921]">Acolhimento Inicial</h4>
                    <p className="text-[11px] text-[#4A5F56] leading-tight mt-0.5">
                      50 minutos de escuta atenta sem julgamentos
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card Flutuante 2: Selo Ético CFP */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-6 -right-3 sm:-right-6 glass-card rounded-2xl p-4 shadow-xl border border-[#E8E3DB] max-w-[210px] text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFFBEB] border border-[#D4AF37]/30 flex items-center justify-center text-[#B45309] shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#142921] block">Ética e Sigilo</span>
                    <span className="text-[11px] text-[#4A5F56] block">
                      Em conformidade estrita com o CFP
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Faixa de Métricas / Números com Contraste e Elegância */}
        <div className="mt-20 pt-10 border-t border-[#E8E3DB] grid grid-cols-2 lg:grid-cols-4 gap-8">
          {METRICAS_CLINICAS.map((metrica, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="text-left space-y-1 group"
            >
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#064E3B] tracking-tight group-hover:text-[#10B981] transition-colors">
                  {metrica.valor}
                </span>
                <span className="text-xs font-bold tracking-wider uppercase text-[#D4AF37]">
                  {metrica.unidade}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#4A5F56] font-medium leading-snug">
                {metrica.descricao}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
