//importacoes
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// componentes
import { CabecalhoComponent } from '../componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from '../componentes/rodape/rodape.component';

//componente principal
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CabecalhoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
