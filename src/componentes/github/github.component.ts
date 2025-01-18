import { Component, OnInit } from '@angular/core';
//------------------------
import { GitHub, GitHubRepos } from '../../globais';
import { DadosGitService } from '../../servicos/github/dados-git.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-github',
  imports: [CommonModule],
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {
  //
  //#region propriedades
  //
    perfil: GitHub;
    repos: GitHubRepos;
  //
  //#endregion propriedades

  //propriedades no construtor: perfilServico
  constructor(private perfilServico: DadosGitService) {
    this.perfil = new GitHub();
    this.repos = new GitHubRepos();
  }

  //#region eventos
  //
    ngOnInit(): void {
      this.perfilServico.getPerfil().subscribe(perfil => {
        this.perfil = perfil;
      });
      this.perfilServico.getRepos().subscribe(repos => {
        this.repos = repos;
      })
    }
  //
  //#endregion eventos
  //
}
