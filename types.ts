
export enum Category {
  MAILING = 'Mailing Campaigns',
  WHATSAPP = 'WhatsApp Comms',
  CORPORATE_TV = 'Corporate TV',
  PRESS_SCIENCE = 'Press & Science',
  POSTERS = 'Cartazes',
  ARTICLES = 'Textos'
}

export interface Project {
  id: string;
  title: string;
  category: Category;
  description: string;
  imageUrl: string;
  secondaryImageUrl?: string;
  footerImageUrl?: string;
  fullContent?: string;
  bodyContent?: string;
  fullContentTitle?: string;
  fullContentSubtitle?: string;
  sourceUrl?: string;
  tags: string[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}