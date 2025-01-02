//importacoes
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// componentes
import { CabecalhoComponent } from '../componentes/cabecalho/cabecalho.component';
import { GitHub, usuarioGit } from '../globais';
import { DadosGitService } from '../servicos/github/dados-git.service';

//componente principal
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CabecalhoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  //propriedades no construtor: perfil
  constructor(private perfil: DadosGitService) { }

  //#region metodos
  //dados carga
    cargaDadosManual(): void {
      try {
        const perfil = new GitHub('redscipher', '', 'https://github.com/redscipher', '', false, 0, '', '', 'https://avatars.githubusercontent.com/u/65095832?s=400&v=4')
        //---------------------
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
          //-------------
          this.perfil.setPerfil(perfil);
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
