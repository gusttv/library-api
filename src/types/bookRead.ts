import type { author } from './author';

export interface bookRead  {
    id: number;
    title: string;
    datePublished: Date;
    isFiction: boolean;
    author: author;
  }
  

  