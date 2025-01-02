import { Injectable } from '@angular/core';
//classes
import { GitHub } from '../../globais';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosGitService {
  //
  //#region propriedades
  //
    private _perfil: BehaviorSubject<GitHub> = new BehaviorSubject<GitHub>(new GitHub());
  //
  //#endregion propriedades

  constructor() { }

  //#region gets/sets
  //
    //sets
    setPerfil(perfil: GitHub): void {
      this._perfil.next(perfil);
    }

    //gets
    getPerfil(): BehaviorSubject<GitHub> {
      return this._perfil;
    }
  //
  //#endregion gets/sets
  //
}
