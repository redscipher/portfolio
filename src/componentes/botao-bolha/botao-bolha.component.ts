import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-bolha',
  imports: [],
  templateUrl: './botao-bolha.component.html',
  styleUrls: ['./botao-bolha.component.scss', '../../_globais.scss']
})
export class BotaoBolhaComponent {
  //
  //#region propriedades
  //
  @Input() descricao: string = '';
  //
  //#endregion
  //
}
