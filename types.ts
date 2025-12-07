export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  techStack: string[];
  icon: 'mac' | 'server' | 'support';
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
