import { Component, OnInit } from '@angular/core';
//------------------------
import { GitHub } from '../../globais';
import { DadosGitService } from '../../servicos/github/dados-git.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cabecalho',
  imports: [CommonModule],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.scss'
})
export class CabecalhoComponent implements OnInit {
  //
  //#region propriedades
  //
    perfil: GitHub;
  //
  //#endregion propriedades

  //propriedades no construtor: perfilServico
  constructor(private perfilServico: DadosGitService) {
    this.perfil = new GitHub();
  }

  //#region eventos
  //
    ngOnInit(): void {
      this.perfilServico.getPerfil().subscribe(perfil => {
        this.perfil = perfil;
      });
    }
  //
  //#endregion eventos
  //
}
