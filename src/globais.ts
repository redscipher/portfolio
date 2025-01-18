//constantes
export const usuarioGit: string = 'redscipher';

//classes: usuario git
export class GitHub {
  //propriedades
  avatar_url: string;
  bio: string;
  html_url: string;
  id: string;
  name: string;
  public_repos: number;
  type: string;

  //funcoes
  constructor(avatarURL?: string, bio?: string, html_url?: string, idUser?: string, nome?: string, qtd_repos?: number, strTipoConta?: string) {
    this.avatar_url = avatarURL || '';
    this.bio = bio || '';
    this.html_url = html_url || '';
    this.id = idUser || '';
    this.name = nome || '';
    this.public_repos = qtd_repos || 0;
    this.type = strTipoConta || '';
  }
}

//repositorio do git
export class GitHubRepos {
  //propriedades
  id: string;
  name: string;
  private: boolean;
  html_url: string;
  description: string;
  fork: boolean;
  languages: string[];
  deployments_url: string;
  topics: string[];
  visibility: string;

  //funcoes
  constructor(id?: string, nome?: string, flgPrivado?: boolean, html_url?: string, descricao?: string, flgFork?: boolean, linguagens?: string[], deploy_urls?: string, topicos?: string[], visibilidade?: string) {
    this.id = id || '';
    this.name = nome || '';
    this.private = flgPrivado || false;
    this.html_url = html_url || '';
    this.description = descricao || '';
    this.fork = flgFork || false;
    this.languages = linguagens || [];
    this.deployments_url = deploy_urls || '';
    this.topics = topicos || [];
    this.visibility = visibilidade || '';
  }
}

//constantes
export const CORES = {
  branco: '#fff'
}
