import { Injectable } from '@angular/core';
//classes
import { GitHub, GitHubRepos } from '../../globais';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosGitService {
  //
  //#region propriedades
  //
    private _perfil: BehaviorSubject<GitHub> = new BehaviorSubject<GitHub>(new GitHub());
    private _repos: BehaviorSubject<GitHubRepos> = new BehaviorSubject<GitHubRepos>(new GitHubRepos());
  //
  //#endregion propriedades

  constructor() { }

  //#region gets/sets
  //
    //sets
    setPerfil(perfil: GitHub): void {
      this._perfil.next(perfil);
    }

    setRepos(repo: GitHubRepos): void {
      this._repos.next(repo);
    }

    //gets
    getPerfil(): BehaviorSubject<GitHub> {
      return this._perfil;
    }

    getRepos(): BehaviorSubject<GitHubRepos> {
      return this._repos;
    }
  //
  //#endregion gets/sets
  //
}
