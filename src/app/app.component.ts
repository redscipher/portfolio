//importacoes
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// componentes
import { GithubComponent } from '../componentes/github/github.component';
import { GitHub, GitHubRepos, usuarioGit } from '../globais';
import { DadosGitService } from '../servicos/github/dados-git.service';
import { RodapeComponent } from '../componentes/rodape/rodape.component';
import { CabecalhoComponent } from '../componentes/cabecalho/cabecalho.component';

//componente principal
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CabecalhoComponent, GithubComponent, RodapeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../_globais.scss']
})
export class AppComponent implements OnInit {
  //propriedades no construtor: perfil
  constructor(private perfil: DadosGitService) { }

  //#region metodos
  //
  cargaDadosManual(): void {
    try {
      //cria um novo perfil github p/ exibicao
      const perfil = new GitHub('https://avatars.githubusercontent.com/u/65095832?s=400&v=4', '', 'https://github.com/redscipher', '', 'redscipher', 0, 'user')
      this.perfil.setPerfil(perfil);
    } catch (e: any) {
      console.error('Erro: ', e.message);
    }
  }

  cargaDadosGit(): boolean {
    //var retorno
    let ctrl: boolean = false;
    try {
      //constantes
      const strURL: string = `https://api.github.com/users/${usuarioGit}`;
      // buscar perfil com 'fetch': usuario do github
      fetch(strURL)
      .then(res => res.json())    //retorna os dados em formato json
      .then(resJson => {    // processamento
        //carrega o perfil
        const perfil = new GitHub(
          resJson.avatar_url,
          resJson.bio || '---------------',
          resJson.html_url,
          resJson.id,
          resJson.name,
          resJson.public_repos,
          resJson.type
        );
        //-------------
        this.perfil.setPerfil(perfil);
        //carrega os repositorios
        fetch(strURL + '/repos')
          .then(res => res.json())
          .then(resJson => {
            const repos = new GitHubRepos(
              resJson.id,
              resJson.name,
              resJson.private,
              resJson.html_url,
              resJson.description,
              resJson.fork,
              resJson.languages,
              resJson.deployments_url,
              resJson.topics,
              resJson.visibility
            )
            //-------------------------
            this.perfil.setRepos(repos);
          })
          .catch((e) => {
            throw new Error(e);
          })
        //verifica se foi possivel carregar os dados do github
        if (resJson.message && resJson.message.toLowerCase().includes('rate limit exceeded')) {
          throw new Error('Número de requisições limite ao GitHub atingido!');
        } else {
          //carregado com sucesso
          ctrl = true;
        }
      })
      .catch((e) => {
        throw new Error(e);
      })
    } catch(e: any) {
      throw new Error(e);
    }
    //def retorno
    return ctrl;
  }

  cargaDados(): void {
    try {
      this.cargaDadosGit();
    } catch (e: any) {
      console.error('Erro: ', e.message);
      //carrega manualmente os dados do github
      this.cargaDadosManual();
    }
  }
  //
  //#endregion metodos

  //#region eventos
  //
    ngOnInit(): void {
      this.cargaDados();
    }
  //
  //#endregion eventos
  //
}
