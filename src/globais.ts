//constantes
export const usuarioGit: string = 'redscipher';

//classes
export class GitHub {
  //propriedades
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  fork: boolean;
  blog: string;
  bio: string;
  avatar_url: string;

  //funcoes
  constructor(nome?: string, descricao?: string, html_url?: string, idioma?: string, fork?: boolean, qtdEG?: number, blog?: string, bio?: string, avatarURL?: string) {
    this.name = nome ||'';
    this.description = descricao || '';
    this.html_url = html_url || '';
    this.language = idioma || '';
    this.fork = fork || false;
    this.stargazers_count = qtdEG || 0;
    this.blog = blog || '';
    this.bio = bio || '';
    this.avatar_url = avatarURL || '';
  }
}
