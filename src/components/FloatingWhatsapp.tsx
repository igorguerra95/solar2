import React, { useState } from 'react';
import { MessageCircle, Sparkles, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingWhatsappProps {
  onOpenBooking: () => void;
}

export const FloatingWhatsapp: React.FC<FloatingWhatsappProps> = ({ onOpenBooking }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  // Mensagem padrão formatada em português brasileiro
  const mensagemWhatsApp = encodeURIComponent(
    'Olá! Estive navegando no site do Solar Zensorial e gostaria de receber informações sobre o acolhimento inicial em psicoterapia.'
  );
  const linkWhatsApp = `https://wa.me/?text=${mensagemWhatsApp}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip Acolhedor Flutuante */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="mb-3 max-w-[250px] p-3 rounded-2xl bg-white border border-[#E8E3DB] shadow-xl text-left relative"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-[#6C8278] hover:text-[#142921]"
              aria-label="Fechar balão"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
              <span className="text-[11px] font-bold text-[#065F46] uppercase tracking-wider">
                Atendimento Online
              </span>
            </div>
            <p className="text-xs text-[#334B41] font-medium leading-tight">
              Precisa de ajuda ou deseja agendar com discrição? Fale conosco no WhatsApp.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão Principal com Pulso Discreto e Suave */}
      <div className="relative group">
        {/* Halo de pulso sutil */}
        <div className="absolute -inset-1 rounded-full bg-[#10B981]/30 blur-sm animate-pulse pointer-events-none" />

        <a
          href={linkWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/80"
          aria-label="Abrir conversa no WhatsApp"
        >
          {/* Ícone clássico do WhatsApp usando SVG refinado */}
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.06-2.18-.553-1.895-.783-3.12-2.709-3.214-2.834-.094-.124-.766-1.02-.766-1.945 0-.925.485-1.38.658-1.57.172-.189.376-.236.502-.236.126 0 .252.001.362.006.118.006.275-.045.43.328.16.386.547 1.334.595 1.431.048.098.08.213.016.34-.064.127-.096.206-.189.317-.094.11-.197.246-.282.33-.094.095-.192.197-.083.385.11.189.488.805 1.048 1.303.722.643 1.33.842 1.519.937.189.094.3.079.412-.047.112-.127.48-.56.608-.751.127-.19.255-.158.428-.095.172.064 1.096.517 1.285.611.189.094.314.142.361.22.046.079.046.457-.098.862zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.178L2.05 22l4.974-1.307C8.473 21.547 10.187 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
          </svg>

          {/* Ponto indicador de status online */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-[#10B981] border-2 border-white" />
        </a>
      </div>
    </div>
  );
};
