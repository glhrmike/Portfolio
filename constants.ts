
import { Category, Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Comunicado Interno – Funcionamento em Datas Especiais',
    category: Category.MAILING,
    description: 'Disparo de mailing institucional desenvolvido para comunicar o funcionamento da instituição em datas especiais, com linguagem clara e organização da informação voltadas à compreensão rápida.',
    imageUrl: 'https://i.imgur.com/Ma60T8e.png',
    footerImageUrl: 'https://i.imgur.com/n4to1ts.png',
    fullContent: 'A comunicação foi direcionada aos colaboradores da instituição, utilizando linguagem acessível, tom institucional com leve abordagem esportiva e estrutura visual organizada. A estratégia prioriza clareza, antecipação de dúvidas e padronização da informação, garantindo alinhamento interno e compreensão rápida sobre as datas de funcionamento.',
    bodyContent: 'Olá, pessoal! 👋\n\nDurante a Semana Santa, informamos que não haverá aulas para os alunos.\n\n👉 Para os funcionários, o funcionamento será o seguinte:\n\n🗓️ 20/04 (ponte) e 21/04 (feriado de Tiradentes): a instituição estará fechada, sem expediente.\n\n🏃‍♀️ Nos demais dias, as atividades administrativas e institucionais seguem normalmente.\n\nPedimos atenção às datas e desejamos um bom período de descanso nos dias de pausa 💪🧘‍♂️\n\nAtenciosamente,\nTime de Comunicação',
    tags: ['E-mailMarketing', 'Endomarketing', 'Informativo']
  },
  {
    id: '19',
    title: 'Mudança de Comunicação',
    category: Category.MAILING,
    description: 'Mailing de comunicação interna desenvolvido para informar colaboradores sobre a mudança na nomenclatura e organização dos comunicados enviados por e-mail, em função da integração dos negócios.',
    imageUrl: 'https://i.imgur.com/siMW0CG.png',
    fullContent: 'Utilização do e-mail institucional para comunicar a reorganização dos comunicados internos, com foco em alcance, padronização da mensagem e clareza da informação. A ação foi direcionada aos colaboradores das áreas impactadas pela integração dos negócios, contribuindo para o entendimento da nova nomenclatura, redução de dúvidas e alinhamento entre unidades.',
    tags: ['E-mailMarketing', 'Integração', 'Padronização']
  },
  {
    id: '14',
    title: 'Lançamento de TV Corporativa',
    category: Category.WHATSAPP,
    description: 'Ação de comunicação interna desenvolvida para divulgar a chegada da TV corporativa à unidade, utilizando WhatsApp institucional como canal de apoio para reforçar a novidade e orientar os colaboradores sobre o novo espaço de comunicados e informações.',
    imageUrl: 'https://i.imgur.com/3KBVKek.png',
    fullContent: 'Uso do WhatsApp institucional para gerar awareness sobre o lançamento da TV corporativa, direcionado aos colaboradores da unidade, com reforço visual e mensagem objetiva. A ação contribui para aumentar o alcance dos comunicados internos, estimular o uso do novo canal e fortalecer a integração da comunicação no dia a dia.',
    tags: ['TVCorporativa', 'WhatsApp', 'Lançamento']
  },
  {
    id: '20',
    title: 'Prevenção à Febre Maculosa',
    category: Category.WHATSAPP,
    description: 'Ação de comunicação interna desenvolvida para WhatsApp institucional, com apoio visual e linguagem acessível, voltada à conscientização dos colaboradores sobre a febre maculosa, seus riscos e a importância da prevenção, com direcionamento para os canais oficiais da instituição.',
    imageUrl: 'https://i.imgur.com/vOU0Rod.png',
    fullContent: 'Uso do WhatsApp institucional para conscientizar colaboradores sobre prevenção à febre maculosa, com reforço por e-mail e TV corporativa, ampliando o alcance da informação e estimulando o cuidado com a saúde.',
    tags: ['Saúde', 'Prevenção', 'Informativo', 'WhatsApp']
  },
  {
    id: '9',
    title: 'Pausas Ativas Institucionais',
    category: Category.POSTERS,
    description: 'Cartaz institucional em formato A3, com ilustrações de movimentos corporais, paleta em tons de verde e hierarquia visual clara, desenvolvido para leitura rápida e fácil compreensão em murais e áreas de circulação.',
    imageUrl: 'https://i.imgur.com/PyLuQr1.png',
    fullContent: 'A peça integra uma ação de endomarketing voltada a colaboradores e comunidade institucional, utilizando linguagem acessível e CTA implícito para incentivar pausas e alongamentos ao longo da rotina. A estratégia busca reforçar comportamentos de cuidado com a saúde no ambiente de trabalho, promovendo bem-estar contínuo.',
    tags: ['BemEstar', 'Saúde', 'ComunicaçãoInterna']
  },
  {
    id: '16',
    title: 'Nova certificação',
    category: Category.POSTERS,
    description: 'Cartaz institucional desenvolvido para informar sobre a atualização da norma, reforçando o compromisso da instituição com a segurança e a melhoria contínua do ambiente de trabalho.',
    imageUrl: 'https://i.imgur.com/9rBZckZ.png',
    fullContent: 'A comunicação foi estruturada para gerar consciência rápida sobre a atualização da norma, utilizando peça visual de alto impacto para ambientes de circulação. Público-alvo: colaboradores da instituição, especialmente equipes administrativas e operacionais.',
    tags: ['Certificação', 'Conquista', 'ComunicaçãoVisual']
  },
  {
    id: '17',
    title: 'Orientações sobre Benefícios de Saúde',
    category: Category.POSTERS,
    description: 'Cartaz de comunicação interna desenvolvido para orientar os colaboradores sobre o uso consciente da assistência médica oferecida pela empresa. A peça reúne dicas práticas e acessíveis, com linguagem clara e visual organizado, reforçando o cuidado com a saúde e o uso responsável dos benefícios.',
    imageUrl: 'https://i.imgur.com/cIM7BjH.png',
    fullContent: 'Comunicação visual educativa para simplificar orientações sobre o uso da assistência médica, promovendo conscientização. Público-alvo: colaboradores da empresa. Maior entendimento sobre o uso correto dos benefícios, estímulo ao cuidado preventivo e fortalecimento da cultura de responsabilidade e bem-estar.',
    tags: ['Benefícios', 'Saúde', 'RH', 'Conscientização']
  },
  {
    id: '4',
    title: 'Texto Institucional – Divulgação de Curso Comunitário',
    category: Category.ARTICLES,
    description: 'Texto institucional publicado no site da universidade, voltado à divulgação de curso comunitário para o público geral com foco no desenvolvimento infantil por meio de atividades lúdicas.',
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1200',
    fullContentTitle: 'Curso comunitário estimula desenvolvimento infantil com brincadeiras e atividades lúdicas',
    fullContentSubtitle: 'O curso promove experiências que visam o desenvolvimento integral dos participantes.',
    fullContent: 'O curso comunitário LudicaMente-USP, promovido pela Escola de Educação Física e Esporte da USP, é coordenado pelo Prof. Dr. Luciano Basso e conta com a atuação de Valquíria Aparecida Carracedo como educadora. A iniciativa propõe uma abordagem lúdica da Educação Física, voltada para o desenvolvimento integral da criança. As atividades são compostas por jogos, brincadeiras motoras e desafios típicas da infância, realizados em ambientes variados da Unidade, como quadras, salas de ginástica e no gramado ao ar livre.\n\nO programa é voltado para crianças de 4 anos e 6 meses até 7 anos e 6 meses de idade, sendo o último semestre possível de participação aquele em que a criança completa 8 anos. Para participar, é necessário que a criança não necessite apoio para se mover de forma independente.\n\nA proposta é estimular o sentir, pensar e agir motoramente, respeitando os tempos e as formas de cada criança. A ludicidade está presente em todas as atividades, que desafiam as crianças em sua relação com o corpo, o espaço e os colegas, além de promover o desenvolvimento físico, emocional e social.',
    sourceUrl: 'https://www.eefe.usp.br/',
    tags: ['ComunicaçãoInterna', 'ExtensãoUniversitária', 'Divulgação']
  },
  {
    id: '18',
    title: 'Artigo: O Papel da IA na Comunicação Interna',
    category: Category.ARTICLES,
    description: 'Uma análise sobre como ferramentas de inteligência artificial estão transformando a forma como as empresas se conectam with seus colaboradores.',
    imageUrl: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=1200',
    fullContentTitle: 'O Papel da IA na Comunicação Interna: Além da Automação',
    fullContent: 'A comunicação interna vive um momento de virada. Com a chegada de grandes modelos de linguagem, o papel do comunicador evolui de "distribuidor de informação" para "curador de experiências". A IA permite uma personalização em massa que antes era impossível, garantindo que a mensagem certa chegue ao colaborador certo, no momento ideal. No entanto, o factor humano continua sendo o alicerce: a tecnologia deve servir para liberar os profissionais para tarefas mais estratégicas e empáticas, nunca para substituir o olhar sensível que só um comunicador humano possui.',
    tags: ['Inovação', 'IA', 'Estratégia']
  },
  {
    id: '3',
    title: 'Lobby Vision: Metas Q3',
    category: Category.CORPORATE_TV,
    description: 'Motion graphics para displays de lobby apresentando os marcos da empresa e feeds de redes sociais em tempo real.',
    imageUrl: 'https://picsum.photos/seed/tv1/1200/675',
    fullContent: 'Projetado para alta visibilidade à distância, utilizando tipografia em negrito e paletas de cores de alto contraste para atrair a atenção de quem circula pelo ambiente.',
    tags: ['Motion Graphics', 'Digital Signage', 'KPI Tracking']
  }
];