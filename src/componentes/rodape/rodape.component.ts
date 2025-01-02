import { Component } from "@angular/core";

@Component({
  selector: 'app-rodape',
  imports: [],
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss']
})
export class RodapeComponent {
  //
  //#region propriedades
  //
  anoVigente: number;
  //
  //#endregion propriedades

  constructor() {
    this.anoVigente = new Date().getFullYear();
  }
  //
}
