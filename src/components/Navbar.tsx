import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ShieldCheck, Calendar, ArrowRight, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenBooking: (areaPreSelecionada?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Áreas de Atuação', href: '#areas' },
    { label: 'Sobre a Clínica', href: '#sobre' },
    { label: 'Simulador de Cuidado', href: '#simulador' },
    { label: 'Dúvidas Frequentes', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner Informativo de Sigilo e Ética */}
      <div className="bg-[#064E3B] text-[#D1FAE5] text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2 border-b border-[#047857]/40 relative z-50">
        <span className="flex items-center gap-1 text-[#D4AF37] font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" />
          Sigilo Profissional CFP
        </span>
        <span className="hidden sm:inline text-[#D1FAE5]/60">•</span>
        <span className="hidden sm:inline">
          Atendimento Psicológico Humanizado: Presencial &amp; Online para todo o Brasil
        </span>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'glass-nav shadow-[0_4px_20px_-4px_rgba(6,78,59,0.08)] py-3'
            : 'bg-[#FAF8F5]/90 backdrop-blur-md py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => handleLinkClick(e, '#inicio')}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#064E3B] to-[#10B981] flex items-center justify-center shadow-md shadow-[#064E3B]/10 border border-[#D4AF37]/30 transition-transform group-hover:scale-105">
              <Sun className="w-5 h-5 text-[#D4AF37] animate-pulse" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#142921] block leading-none">
                Solar Zensorial
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold block mt-1">
                Espaçoterapias
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[14px] font-medium text-[#4A5F56] hover:text-[#064E3B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#064E3B] hover:bg-[#047857] shadow-sm hover:shadow-md hover:shadow-[#064E3B]/20 transition-all border border-[#D4AF37]/40 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              <span>Entrar em contato</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-[#064E3B] flex items-center gap-1"
            >
              <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Contato</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#142921] hover:bg-[#E9E3DA]/50 transition-colors"
              aria-label="Menu principal"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="lg:hidden bg-[#FAF8F5] border-b border-[#E8E3DB] px-6 py-6 shadow-xl"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-lg font-medium text-[#142921] hover:text-[#064E3B] py-1 border-b border-[#E8E3DB]/50 flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                  </a>
                ))}
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBooking();
                    }}
                    className="w-full py-3 rounded-full text-base font-semibold text-white bg-[#064E3B] hover:bg-[#047857] flex items-center justify-center gap-2 shadow-md"
                  >
                    <Calendar className="w-4 h-4 text-[#D4AF37]" />
                    <span>Entrar em contato</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
