import { Component, OnInit } from '@angular/core';
// variavel
import { GitHubRepo, usuarioGit } from '../../globais';
import { error } from 'node:console';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.scss'
})
export class CabecalhoComponent implements OnInit {
  //
  //#region propriedades
  //
  perfil: GitHubRepo;
  //
  //#endregion propriedades

  //#region metodos
  //construtor
    constructor() {
      this.perfil = new GitHubRepo();
    }

    //dados carga
    cargaDadosManual(): void {
      try {
        this.perfil = new GitHubRepo('redscipher', '', 'https://github.com/redscipher', '', false, 0, '', '', 'https://avatars.githubusercontent.com/u/65095832?s=400&v=4')
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
