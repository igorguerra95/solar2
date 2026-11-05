import React from 'react';
import { motion } from 'motion/react';
import { Eye, Volume2, Sparkles, Flower2, Heart, Shield } from 'lucide-react';

export const SensoryStrip: React.FC = () => {
  const sensoryElements = [
    {
      icon: Eye,
      title: 'Luz Circadiana Suave',
      desc: 'Iluminação indireta e quente, concebida para reduzir a hipervigilância ocular e acalmar o nervo óptico.',
    },
    {
      icon: Volume2,
      title: 'Acústica de Silêncio',
      desc: 'Isolamento sonoro com cortina de frequência rosa sutil para blindar sua conversa de interferências externas.',
    },
    {
      icon: Flower2,
      title: 'Aromaterapia Botânica',
      desc: 'Óleos essenciais puros de lavanda francesa e bergamota para favorecer a respiração profunda.',
    },
    {
      icon: Shield,
      title: 'Sem Julgamentos',
      desc: 'Postura clínica acolhedora e segura, onde cada emoção tem permissão irrevogável de existir.',
    },
  ];

  return (
    <section className="py-16 bg-[#064E3B] text-white relative overflow-hidden">
      {/* Detalhes de iluminação dourada e esmeralda */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#10B981]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#047857]/60 border border-[#D4AF37]/30 text-xs uppercase tracking-widest text-[#FEF3C7] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>O Conceito Zensorial</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
            Por que o ambiente importa tanto quanto a palavra?
          </h2>
          <p className="text-[#D1FAE5]/85 text-base sm:text-lg font-light mt-4 leading-relaxed">
            A neurociência afetiva comprova: uma mente sob estresse crônico só consegue elaborar
            suas dores quando o corpo reconhece sinais fisiológicos de segurança real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sensoryElements.map((el, i) => {
            const Icon = el.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-2xl bg-[#042F24]/60 border border-[#D4AF37]/20 p-6 text-left hover:border-[#D4AF37]/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#064E3B] border border-[#10B981]/30 flex items-center justify-center text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#FEF3C7] mb-2">
                  {el.title}
                </h3>
                <p className="text-sm text-[#D1FAE5]/75 leading-relaxed font-light">
                  {el.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
