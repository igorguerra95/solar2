export interface AreaAtuacao {
  id: string;
  titulo: string;
  subtitulo: string;
  resumo: string;
  descricaoCompleta: string;
  sintomasComuns: string[];
  abordagem: string;
  indicadoPara: string;
  icone: string;
  tempoMedio: string;
  destaque?: boolean;
}

export interface PerguntaFrequente {
  id: string;
  pergunta: string;
  resposta: string;
  categoria: 'geral' | 'consultas' | 'sigilo' | 'valores';
}

export interface DepoimentoExperiencia {
  id: string;
  relato: string;
  iniciais: string;
  tempoAcompanhamento: string;
  focoTrabalhado: string;
  modalidade: 'Presencial' | 'Online';
}

export interface SolicitacaoContato {
  nome: string;
  email: string;
  telefone: string;
  modalidade: 'presencial' | 'online' | 'indiferente';
  periodoPreferencia: 'manha' | 'tarde' | 'noite';
  areaInteresse: string;
  mensagem: string;
}
