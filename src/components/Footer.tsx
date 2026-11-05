import React from 'react';
import { Sun, ShieldCheck, Heart, ArrowUp, Lock, PhoneCall } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Áreas de Atuação', href: '#areas' },
    { label: 'Sobre a Clínica', href: '#sobre' },
    { label: 'Simulador de Cuidado', href: '#simulador' },
    { label: 'Perguntas Frequentes', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <footer className="bg-[#042F24] text-[#D1FAE5] pt-16 pb-12 border-t border-[#064E3B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bloco Superior: Marca e Propósito */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#064E3B] text-left">
          
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#064E3B] border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37]">
                <Sun className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-white block leading-none tracking-tight">
                  Solar Zensorial
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold block mt-1">
                  Espaçoterapias
                </span>
              </div>
            </div>

            <p className="text-sm text-[#D1FAE5]/75 max-w-md leading-relaxed font-light">
              Laboratório clínico de acolhimento humano e regulação psicofisiológica.
              Dedicado a oferecer um refúgio acolhedor onde corpo e mente encontram espaço
              para elaborar dores, restaurar a paz e reconstruir vínculos saudáveis.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#D4AF37] pt-1">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Inscrição Profissional Ativa e Regular no CFP</span>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-lg font-bold text-[#FEF3C7]">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-[#D1FAE5]/80">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white hover:underline transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Atendimento & Emergência */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-lg font-bold text-[#FEF3C7]">
              Acolhimento Clínico
            </h4>
            <p className="text-xs text-[#D1FAE5]/75 leading-relaxed">
              Atendimentos mediante agendamento prévio nos formatos <strong>Presencial</strong> e <strong>Online</strong> para pacientes em todo o território nacional.
            </p>
            <div className="p-3.5 rounded-xl bg-[#064E3B]/70 border border-[#10B981]/25 text-xs text-[#D1FAE5]/90 mt-2">
              <span className="font-bold text-[#FEF3C7] block mb-0.5">Apoio Emocional Emergencial:</span>
              <span>Em caso de crise grave imediata, disque <strong>188 (CVV gratuito 24h)</strong>.</span>
            </div>
          </div>

        </div>

        {/* Bloco Inferior: Conformidade Ética e Direitos Autorais */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#D1FAE5]/60 text-left">
          <div className="space-y-1">
            <p>
              © {new Date().getFullYear()} Solar Zensorial — Espaçoterapias. Todos os direitos reservados.
            </p>
            <p className="text-[11px] text-[#D1FAE5]/50">
              Prática psicológica exercida em conformidade estrita com o Código de Ética Profissional do Psicólogo (Resoluções CFP nº 10/2005 e 11/2018).
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#064E3B] hover:bg-[#047857] text-[#D4AF37] hover:text-white transition-all text-xs font-semibold cursor-pointer shrink-0"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
