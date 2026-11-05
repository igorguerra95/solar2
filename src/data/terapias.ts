import { AreaAtuacao, PerguntaFrequente, DepoimentoExperiencia } from '../types';

export const AREAS_ATUACAO: AreaAtuacao[] = [
  {
    id: 'ansiedade',
    titulo: 'Ansiedade & Síndrome do Pânico',
    subtitulo: 'Regulação psicofisiológica e desarmamento de gatilhos',
    resumo: 'Aprenda a acalmar o sistema nervoso em alerta contínuo, romper o ciclo de pensamentos catastróficos e resgatar a sensação real de paz interior.',
    descricaoCompleta: 'A ansiedade excessiva não é fraqueza, mas sim um sistema de alarme hiperativo. Trabalhamos com protocolos integrativos da TCC e neurociência afetiva para identificar as origens dos medos antecipatórios, técnicas de regulação do nervo vago e desensibilização gradual de situações ansiogênicas.',
    sintomasComuns: ['Aperto no peito e taquicardia', 'Preocupação incessante', 'Insônia e hipervigilância', 'Tensão muscular crônica'],
    abordagem: 'Terapia Cognitivo-Comportamental Humanizada + Mindfulness Clínico Somático',
    indicadoPara: 'Pessoas que sentem a mente acelerada, esgotamento mental e crises de angústia repentinas.',
    icone: 'Wind',
    tempoMedio: 'Sessões semanais de 50 minutos',
    destaque: true,
  },
  {
    id: 'depressao-burnout',
    titulo: 'Depressão & Esgotamento (Burnout)',
    subtitulo: 'Reconstrução de energia vital e resgate do sentido',
    resumo: 'Um espaço de escuta profunda para acolher a exaustão emocional, o vazio e a perda de interesse, restabelecendo conexões autênticas com a vida.',
    descricaoCompleta: 'O burnout e a depressão sinalizam limites há muito ultrapassados. No Solar Zensorial, não aceleramos seu processo; respeitamos seu ritmo para resgatar a vitalidade, reconfigurar a relação com o trabalho, diminuir a autocobrança implacável e nutrir pequenas vitórias cotidianas.',
    sintomasComuns: ['Cansaço profundo que não passa', 'Desmotivação e perda de prazer', 'Sensação de insuficiência', 'Isolamento involuntário'],
    abordagem: 'Ativação Comportamental + Terapia Focada na Compaixão',
    indicadoPara: 'Profissionais em colapso de estresse, pessoas enfrentando fases de desânimo prolongado e apatia.',
    icone: 'SunDim',
    tempoMedio: 'Sessões semanais de 50 minutos',
    destaque: true,
  },
  {
    id: 'casal-relacoes',
    titulo: 'Terapia de Casal & Relações',
    subtitulo: 'Comunicação consciente e reparação de vínculos feridos',
    resumo: 'Mediar conflitos repetitivos, curar mágoas acumuladas e reencontrar cumplicidade mútua através de diálogos seguros e honestos.',
    descricaoCompleta: 'Muitos casais não sofrem por falta de amor, mas por desencontros na forma de expressar necessidades e vulnerabilidades. Acompanhamos o casal para decodificar ciclos destrutivos de ataque-defesa, construir acordos maduros e revitalizar a intimidade afetiva.',
    sintomasComuns: ['Discussões em espiral sem solução', 'Distanciamento afetivo e sexual', 'Dificuldade de perdoar mágoas', 'Incerteza sobre o futuro a dois'],
    abordagem: 'Terapia Focada nas Emoções (EFT) + Comunicação Não-Violenta',
    indicadoPara: 'Casais em momentos de crise, transição de fases ou que desejam fortalecer a aliança amorosa.',
    icone: 'HeartHandshake',
    tempoMedio: 'Sessões de 60 a 75 minutos',
    destaque: false,
  },
  {
    id: 'luto-transicoes',
    titulo: 'Luto & Transições de Vida',
    subtitulo: 'Acolhimento para perdas significativas e travessias dolorosas',
    resumo: 'Suporte especializado para atravessar o luto por entes queridos, términos de relacionamento, aposentadoria ou mudanças de ciclo.',
    descricaoCompleta: 'A perda exige tempo, permissão para doer e um ambiente que não apresse a superação. Oferecemos continência para que a dor possa ser dita, integrada à sua narrativa biográfica e transformada em memória que não paralisa.',
    sintomasComuns: ['Sensação de desorientação temporal', 'Tristeza aguda e choro frequente', 'Dificuldade de retomar rotinas', 'Sensação de vazio existencial'],
    abordagem: 'Psicoterapia do Luto Baseada em Significado e Narrativa',
    indicadoPara: 'Pessoas enlutadas por morte de pessoas queridas, pets, separações ou rupturas existenciais.',
    icone: 'Feather',
    tempoMedio: 'Sessões semanais de 50 minutos',
    destaque: false,
  },
  {
    id: 'autoconhecimento',
    titulo: 'Autoconhecimento & Regulação Emocional',
    subtitulo: 'Fortalecimento da autoestima e limites saudáveis',
    resumo: 'Mapeie crenças limitantes, liberte-se da necessidade de aprovação alheia e construa uma postura de firmeza e amor-próprio.',
    descricaoCompleta: 'Quem você é quando desliga a necessidade de agradar a todos? Esta jornada terapêutica propõe um olhar lúcido sobre sua história familiar, padrões inconscientes e potenciais adormecidos, guiando você a escolhas mais coerentes com sua essência.',
    sintomasComuns: ['Dificuldade crônica em dizer "não"', 'Síndrome do impostor persistente', 'Dependência emocional', 'Sensação de não saber quem realmente é'],
    abordagem: 'Psicologia Analítica Integrativa + Terapia do Esquema',
    indicadoPara: 'Adultos que buscam maturidade psicológica, clareza existencial e independência emocional.',
    icone: 'Sparkles',
    tempoMedio: 'Sessões semanais ou quinzenais de 50 min',
    destaque: true,
  },
  {
    id: 'terapia-online',
    titulo: 'Psicoterapia Online Especializada',
    subtitulo: 'Acolhimento no conforto e na segurança do seu lar',
    resumo: 'A mesma profundidade e ética da sessão presencial, através de plataforma criptografada de ponta a ponta para todo o Brasil e exterior.',
    descricaoCompleta: 'Regulamentada pela Resolução CFP nº 11/2018, a psicoterapia online permite continuidade terapêutica sem estresse de deslocamento. Ideal para quem tem rotinas dinâmicas ou reside em locais com escassez de profissionais especializados.',
    sintomasComuns: ['Falta de tempo para deslocamento', 'Residência fora de grandes centros', 'Preferência por ambiente pessoal', 'Rotina de viagens frequentes'],
    abordagem: 'Sessões em Sala Virtual Segura de Alta Definição',
    indicadoPara: 'Brasileiros em qualquer estado ou no exterior em busca de psicoterapia com afinidade cultural.',
    icone: 'MonitorSmartphone',
    tempoMedio: 'Sessões semanais de 50 minutos',
    destaque: false,
  },
];

export const PERGUNTAS_FREQUENTES: PerguntaFrequente[] = [
  {
    id: 'faq-1',
    pergunta: 'Como funciona a primeira sessão de acolhimento?',
    resposta: 'A primeira sessão é um encontro de escuta atenta, sem cobranças de roteiro ou diagnósticos precipitados. Dedicamos este tempo para você expor livremente o que tem gerado desconforto, enquanto alinhamos expectativas, tiramos dúvidas sobre o método e definimos juntos o plano de cuidado mais adequado.',
    categoria: 'geral',
  },
  {
    id: 'faq-2',
    pergunta: 'Qual a diferença entre a psicoterapia presencial e a online?',
    resposta: 'A eficácia clínica é rigorosamente equivalente. No presencial, você desfruta da atmosfera sensorial do nosso espaço (acústica relaxante, aromaterapia botânica e ausência de telas). No formato online, você tem a facilidade de realizar a consulta de onde estiver, com total privacidade e tecnologia com criptografia segura.',
    categoria: 'consultas',
  },
  {
    id: 'faq-3',
    pergunta: 'Como funciona o sigilo profissional segundo as normas do CFP?',
    resposta: 'O sigilo é absoluto e inegociável, resguardado pelo Artigo 9º do Código de Ética Profissional do Psicólogo. Nenhuma informação compartilhada em sessão é divulgada a terceiros, familiares ou empregadores, garantindo a você um santuário de confidencialidade irrevogável.',
    categoria: 'sigilo',
  },
  {
    id: 'faq-4',
    pergunta: 'Vocês atendem por convênios médicos ou planos de saúde?',
    resposta: 'Trabalhamos na modalidade particular com emissão de recibo e nota fiscal detalhada para solicitação de reembolso junto ao seu plano de saúde (a maioria dos convênios possui essa cobertura prevista em contrato). Nossos recibos também são 100% dedutíveis no Imposto de Renda (IRPF).',
    categoria: 'valores',
  },
  {
    id: 'faq-5',
    pergunta: 'Quanto tempo dura um processo terapêutico?',
    resposta: 'A duração varia de acordo com suas metas e a natureza das queixas apresentadas. Trabalhamos com avaliações periódicas conjuntas para que você perceba claramente seu progresso, autonomia emocional e capacidade de autogerenciamento sem dependência prolongada.',
    categoria: 'geral',
  },
  {
    id: 'faq-6',
    pergunta: 'Nunca fiz terapia antes. Como saber se este é o momento certo?',
    resposta: 'Se você sente que está carregando angústias em silêncio, se o cansaço mental interfere nas suas relações ou trabalho, ou simplesmente deseja um espaço para se escutar de verdade, este é o momento exato. Não é preciso esperar uma crise grave para se presentear com cuidado.',
    categoria: 'geral',
  },
];

export const DEPOIMENTOS_EXPERIENCIA: DepoimentoExperiencia[] = [
  {
    id: 'dep-1',
    relato: 'Cheguei à clínica com crises frequentes de pânico e um medo paralisante de sair de casa. O cuidado acolhedor e a paciência com que cada gatilho foi trabalhado me devolveram a confiança na minha própria respiração e na vida.',
    iniciais: 'M. V. S.',
    tempoAcompanhamento: '10 meses de acompanhamento',
    focoTrabalhado: 'Superação de Ansiedade e Pânico',
    modalidade: 'Presencial',
  },
  {
    id: 'dep-2',
    relato: 'A terapia online foi um divisor de águas na minha rotina corporativa. Aprendi a impor limites saudáveis sem culpa e consegui sair de um quadro severo de esgotamento antes que ele se tornasse irreversível.',
    iniciais: 'R. C. L.',
    tempoAcompanhamento: '1 ano e 2 meses',
    focoTrabalhado: 'Manejo de Burnout e Limites',
    modalidade: 'Online',
  },
  {
    id: 'dep-3',
    relato: 'Nosso casamento estava em um ciclo de silêncios frios e mágoas repetidas. O espaço neutro e sem julgamentos nos ensinou a nos comunicarmos pelo coração novamente. Salvamos não só a união, mas o respeito mútuo.',
    iniciais: 'C. & F.',
    tempoAcompanhamento: '7 meses de terapia de casal',
    focoTrabalhado: 'Comunicação e Vínculo Afetivo',
    modalidade: 'Presencial',
  },
];

export const PILARES_CLINICOS = [
  {
    titulo: 'Escuta Sem Julgamentos',
    descricao: 'Um ambiente onde sua história é recebida com reverência e empatia genuína, livre de qualquer crítica moral ou preconceito.',
    icone: 'Ear',
  },
  {
    titulo: 'Fundamentação Científica',
    descricao: 'Técnicas respaldadas pela neurociência afetiva moderna, TCC humanizada e protocolos de eficácia clínica comprovada.',
    icone: 'BrainCircuit',
  },
  {
    titulo: 'Respeito ao Seu Ritmo',
    descricao: 'Sem pressões ou metas artificiais. Cada mente possui seu próprio tempo de floração e assimilação das transformações.',
    icone: 'Clock3',
  },
  {
    titulo: 'Espaço Zensorial Regulador',
    descricao: 'Ambiente cuidadosamente arquitetado com elementos botânicos, som suave e luz quente para favorecer a restauração física e mental.',
    icone: 'Sparkles',
  },
];

export const METRICAS_CLINICAS = [
  { valor: '+12', unidade: 'anos', descricao: 'De dedicação contínua à psicologia clínica' },
  { valor: '+1.800', unidade: 'vidas', descricao: 'Acolhidas em jornadas de transformação' },
  { valor: '98%', unidade: 'satisfação', descricao: 'Avaliação de acolhimento e clareza no processo' },
  { valor: '100%', unidade: 'sigilo', descricao: 'Conformidade com o Código de Ética do CFP' },
];
