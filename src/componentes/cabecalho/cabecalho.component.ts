import { Component, OnInit } from '@angular/core';
// variavel
import { GitHubRepo, usuarioGit } from '../../globais';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.scss'
})
export class CabecalhoComponent implements OnInit {
  // propriedadess
  perfil: GitHubRepo = new GitHubRepo();

  // funcoes
  constructor() {}

  // metodos perfil
  ngOnInit(): void {
    //variaveis
    const strURL: string = `https://api.github.com/users/${usuarioGit}`;
    // buscar perfil
    fetch(strURL)
      .then(res => res.json())
      .then(resJson => {
        this.perfil = new GitHubRepo(
          resJson.name,
          resJson.description,
          resJson.html_url,
          resJson.language,
          resJson.stargazers_count,
          resJson.fork,
          resJson.blog,
          resJson.bio,
          resJson.avatar_url
        );
      })
      .catch((e) => {
        console.log(e);
       })
      .finally(() => { });
  }
}
