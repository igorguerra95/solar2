import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Send,
  CheckCircle2,
  Lock,
  HeartHandshake,
  MessageCircle,
  Calendar,
  Sparkles
} from 'lucide-react';
import { SolicitacaoContato } from '../types';

interface ContatoSectionProps {
  areaPreSelecionada?: string;
  modalidadePreSelecionada?: 'presencial' | 'online' | 'indiferente';
}

export const ContatoSection: React.FC<ContatoSectionProps> = ({
  areaPreSelecionada = '',
  modalidadePreSelecionada = 'online',
}) => {
  const [formData, setFormData] = useState<SolicitacaoContato>({
    nome: '',
    email: '',
    telefone: '',
    modalidade: modalidadePreSelecionada || 'online',
    periodoPreferencia: 'tarde',
    areaInteresse: areaPreSelecionada || 'Ansiedade & Síndrome do Pânico',
    mensagem: '',
  });

  const [enviado, setEnviado] = useState<boolean>(false);
  const [carregando, setCarregando] = useState<boolean>(false);
  const [concordaSigilo, setConcordaSigilo] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.telefone) return;

    setCarregando(true);
    // Simulação suave de envio profissional
    setTimeout(() => {
      setCarregando(false);
      setEnviado(true);
    }, 800);
  };

  return (
    <section id="contato" className="py-24 bg-[#F3EFE9] relative overflow-hidden">
      {/* Luz ambiente */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full ambient-glow-gold pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full ambient-glow-emerald pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl text-left mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECFDF5] border border-[#10B981]/30 text-xs uppercase tracking-wider font-bold text-[#065F46] mb-3">
            <Lock className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Espaço Seguro &amp; Confidencial</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#142921] tracking-tight leading-tight">
            O primeiro passo é sempre o mais corajoso
          </h2>

          <p className="text-base sm:text-lg text-[#4E665C] mt-4 font-normal leading-relaxed">
            Preencha os campos abaixo com total tranquilidade. Suas informações são protegidas
            por sigilo profissional incondicional. Retornamos com gentileza e brevidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Coluna Esquerda: Formulário de Alta Conversão */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-[#E8E3DB] p-7 sm:p-10 shadow-xl text-left relative">
              
              {enviado ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#ECFDF5] text-[#065F46] border border-[#10B981]/30 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8 text-[#10B981]" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#142921]">
                    Mensagem Recebida com Sucesso
                  </h3>
                  <p className="text-sm sm:text-base text-[#4E665C] max-w-md mx-auto leading-relaxed">
                    Obrigado pela confiança, <strong>{formData.nome}</strong>. Entraremos em contato
                    pelo WhatsApp ou e-mail fornecido em até 2 horas úteis para organizar sua sessão
                    de acolhimento inicial.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setEnviado(false)}
                      className="px-6 py-2.5 rounded-full text-xs font-semibold text-[#064E3B] bg-[#ECFDF5] hover:bg-[#D1FAE5] transition-colors"
                    >
                      Enviar outra solicitação
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Nome Completo */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#142921] mb-2">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Como você prefere ser chamado(a)?"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#E8E3DB] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20 focus:border-[#064E3B] text-sm text-[#142921] transition-all"
                    />
                  </div>

                  {/* E-mail e Telefone em 2 Colunas */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#142921] mb-2">
                        Seu E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="exemplo@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-[#E8E3DB] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20 focus:border-[#064E3B] text-sm text-[#142921] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#142921] mb-2">
                        WhatsApp / Celular *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(DDD) 99999-9999"
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-[#E8E3DB] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20 focus:border-[#064E3B] text-sm text-[#142921] transition-all"
                      />
                    </div>
                  </div>

                  {/* Modalidade Preferida */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#142921] mb-2">
                      Modalidade de Atendimento *
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'online', label: 'Online' },
                        { id: 'presencial', label: 'Presencial' },
                        { id: 'indiferente', label: 'Tanto faz' },
                      ].map((m) => (
                        <button
                          type="button"
                          key={m.id}
                          onClick={() => setFormData({ ...formData, modalidade: m.id as any })}
                          className={`py-3 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                            formData.modalidade === m.id
                              ? 'bg-[#064E3B] text-white border-[#064E3B] shadow-xs'
                              : 'bg-[#FAF8F5] text-[#4E665C] border-[#E8E3DB] hover:bg-white'
                          }`}
                        >
                          {m.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Área de Interesse e Turno */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#142921] mb-2">
                        Área de Interesse
                      </label>
                      <select
                        value={formData.areaInteresse}
                        onChange={(e) => setFormData({ ...formData, areaInteresse: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-[#E8E3DB] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20 text-sm text-[#142921] transition-all cursor-pointer"
                      >
                        <option value="Ansiedade & Síndrome do Pânico">Ansiedade &amp; Pânico</option>
                        <option value="Depressão & Esgotamento (Burnout)">Depressão &amp; Burnout</option>
                        <option value="Terapia de Casal & Relações">Terapia de Casal</option>
                        <option value="Luto & Transições de Vida">Luto &amp; Transições</option>
                        <option value="Autoconhecimento & Regulação Emocional">Autoconhecimento</option>
                        <option value="Outro / Não sei definir ainda">Outro / Acolhimento Geral</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#142921] mb-2">
                        Turno de Preferência
                      </label>
                      <select
                        value={formData.periodoPreferencia}
                        onChange={(e) => setFormData({ ...formData, periodoPreferencia: e.target.value as any })}
                        className="w-full px-4 py-3.5 rounded-xl border border-[#E8E3DB] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20 text-sm text-[#142921] transition-all cursor-pointer"
                      >
                        <option value="manha">Manhã (08h às 12h)</option>
                        <option value="tarde">Tarde (13h às 18h)</option>
                        <option value="noite">Noite (18h às 21h)</option>
                      </select>
                    </div>
                  </div>

                  {/* Mensagem Livre */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#142921] mb-2">
                      Conte brevemente o que você tem sentido (Opcional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Sinta-se livre para expressar suas principais inquietações..."
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8E3DB] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20 text-sm text-[#142921] transition-all"
                    />
                  </div>

                  {/* Termo Ético de Sigilo */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="sigilo"
                      checked={concordaSigilo}
                      onChange={(e) => setConcordaSigilo(e.target.checked)}
                      className="mt-1 w-4 h-4 text-[#064E3B] rounded border-[#E8E3DB] focus:ring-[#064E3B]"
                    />
                    <label htmlFor="sigilo" className="text-xs text-[#5B7569] leading-relaxed cursor-pointer">
                      Concordo em ser contatado(a) com estrito sigilo ético profissional, de acordo com o Código de Ética do Conselho Federal de Psicologia (CFP).
                    </label>
                  </div>

                  {/* Botão de Envio com Regra Principal: "Entrar em contato" */}
                  <button
                    type="submit"
                    disabled={carregando || !concordaSigilo}
                    className="w-full py-4 rounded-full text-base font-bold text-white bg-[#064E3B] hover:bg-[#047857] disabled:opacity-50 shadow-lg shadow-[#064E3B]/25 hover:shadow-xl transition-all flex items-center justify-center gap-2 border border-[#D4AF37]/50 cursor-pointer"
                  >
                    {carregando ? (
                      <span className="inline-block animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        <span>Entrar em contato</span>
                        <Send className="w-4 h-4 text-[#D4AF37]" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

          {/* Coluna Direita: Informações de Segurança & Confiança */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Card 1: Garantia de Resposta Ágil */}
            <div className="rounded-3xl bg-white border border-[#E8E3DB] p-7 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#ECFDF5] border border-[#10B981]/30 flex items-center justify-center text-[#065F46] mb-4">
                <HeartHandshake className="w-6 h-6 text-[#10B981]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#142921]">
                O que acontece após enviar sua mensagem?
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-[#4E665C]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span><strong>Contato acolhedor:</strong> Retornamos de forma discreta pelo canal que você preferir.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span><strong>Alinhamento mútuo:</strong> Compreendemos sua necessidade antes de formalizar o agendamento.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span><strong>Sem pressão comercial:</strong> Respeitamos seu tempo e a decisão de dar o próximo passo.</span>
                </li>
              </ul>
            </div>

            {/* Card 2: Sigilo Absoluto */}
            <div className="rounded-3xl bg-[#064E3B] text-white p-7 border border-[#D4AF37]/30 shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#042F24] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                  <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#FEF3C7]">
                    Compromisso Ético &amp; Sigilo
                  </h4>
                  <p className="text-[11px] text-[#D1FAE5]/70">Código de Ética Profissional (CFP)</p>
                </div>
              </div>
              <p className="text-xs text-[#D1FAE5]/85 leading-relaxed">
                Toda e qualquer informação trocada nesta plataforma é mantida sob segredo profissional irrevogável, assegurado pelo Artigo 9º do Código de Ética do Psicólogo.
              </p>
            </div>

            {/* Card 3: Apoio Imediato */}
            <div className="rounded-3xl bg-white border border-[#E8E3DB] p-6 text-xs text-[#5B7569]">
              <span className="font-bold text-[#142921] block mb-1">
                ✦ Importante sobre urgências psiquiátricas:
              </span>
              <p className="leading-relaxed">
                Este canal destina-se a agendamentos de psicoterapia ambulatorial. Em casos de sofrimento extremo ou crise aguda imediata, ligue gratuitamente para o <strong>CVV (188)</strong> ou procure o pronto-atendimento hospitalar mais próximo.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
