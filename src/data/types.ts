export interface Contact {
  title: string;
  link: { url: string; text: string }[];
}

export interface Skill {
  text: string;
  highlightedWords: string[];
}

export interface Project {
  id: number;
  image: string;
  title: string;
  titleEtc?: string;
  description: string;
  details: string[];
  stack: string[];
  link?: string;
}
