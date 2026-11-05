import React from 'react';
import { motion } from 'motion/react';
import {
  Shield,
  Heart,
  BrainCircuit,
  Clock3,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Award
} from 'lucide-react';
import { PILARES_CLINICOS } from '../data/terapias';

interface SobreClinicaProps {
  onOpenBooking: () => void;
}

export const SobreClinica: React.FC<SobreClinicaProps> = ({ onOpenBooking }) => {
  return (
    <section id="sobre" className="py-24 bg-[#F3EFE9] relative overflow-hidden">
      {/* Detalhe de fundo suave */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full ambient-glow-emerald pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bloco Editorial Superior: Visão & Filosofia */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Coluna Esquerda: Imagem e Cartão de Ética */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative text-left"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-3xl overflow-hidden border border-[#D8CEC1] shadow-xl bg-white">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80"
                  alt="Espaço terapêutico acolhedor do Solar Zensorial"
                  className="w-full h-[520px] object-cover object-center filter brightness-[0.98]"
                  loading="lazy"
                />
              </div>

              {/* Card flutuante sobreposto: Formação & Rigor Ético */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 glass-card rounded-2xl p-5 shadow-2xl border border-[#D4AF37]/40 max-w-[270px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-[#064E3B] text-[#D4AF37] flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#142921]">Prática Ética CFP</h4>
                    <p className="text-[11px] text-[#4E665C]">Inscrição Ativa &amp; Regular</p>
                  </div>
                </div>
                <p className="text-[11px] text-[#334B41] border-t border-[#E8E3DB] pt-2 leading-relaxed">
                  Supervisão clínica contínua e atualização rigorosa em neurociência afetiva.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Coluna Direita: Narrativa da Clínica e Abordagem */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECFDF5] border border-[#10B981]/30 text-xs uppercase tracking-wider font-bold text-[#065F46]">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Sobre o Solar Zensorial</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#142921] tracking-tight leading-tight">
              Uma psicologia que integra a razão da mente e o abrigo do coração
            </h2>

            <p className="text-base sm:text-lg text-[#334B41] font-normal leading-relaxed">
              O <strong>Solar Zensorial — Espaçoterapias</strong> nasceu de uma constatação simples, porém transformadora:
              o sofrimento humano não é uma falha de caráter ou um conjunto isolado de sintomas para serem eliminados
              à força, mas sim um pedido profundo de reorganização interna.
            </p>

            <p className="text-sm sm:text-base text-[#4E665C] leading-relaxed">
              Concebemos nosso espaço físico e nossos protocolos de atendimento online para oferecer
              uma experiência imersiva de desaceleração. Aqui, combinamos as mais refinadas ferramentas
              da Terapia Cognitivo-Comportamental de 3ª Geração (como a Terapia de Aceitação e Compromisso)
              aos princípios da Teoria Polivagal, permitindo que corpo e mente aprendam juntos a desarmar
              as defesas crônicas que causam exaustão, ansiedade e angústia.
            </p>

            {/* Citação Inspiradora em Destaque */}
            <div className="p-6 rounded-2xl bg-white border-l-4 border-[#064E3B] border-y border-r border-[#E8E3DB] shadow-xs my-4">
              <p className="font-serif text-lg sm:text-xl italic text-[#142921] leading-snug">
                "A cura emocional não acontece quando forçamos o esquecimento, mas quando
                encontramos um espaço seguro o bastante para que a dor possa finalmente
                ser compreendida e transformada em sabedoria de vida."
              </p>
              <span className="block text-xs uppercase tracking-widest font-bold text-[#B8860B] mt-3">
                Diretriz Terapêutica Solar Zensorial
              </span>
            </div>

            {/* Chamada para conversa */}
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#064E3B] hover:bg-[#047857] shadow-md hover:shadow-lg transition-all border border-[#D4AF37]/40 cursor-pointer"
              >
                <span>Entrar em contato</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Os 4 Pilares da Prática Clínica */}
        <div className="pt-12 border-t border-[#D8CEC1]">
          <div className="text-left max-w-2xl mb-12">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#142921]">
              Os Quatro Pilares Inegociáveis do Nosso Cuidado
            </h3>
            <p className="text-sm text-[#4E665C] mt-2">
              Cada atendimento respeita rigorosamente estes princípios fundamentais de acolhimento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {PILARES_CLINICOS.map((pilar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-[#E8E3DB] shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-[#F0FDF4] border border-[#10B981]/25 flex items-center justify-center text-[#064E3B] mb-4">
                  <Heart className="w-5 h-5 text-[#10B981]" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#142921] mb-2">
                  {pilar.titulo}
                </h4>
                <p className="text-xs sm:text-sm text-[#4E665C] leading-relaxed">
                  {pilar.descricao}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
