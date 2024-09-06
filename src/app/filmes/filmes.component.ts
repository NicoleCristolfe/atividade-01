import { Component } from '@angular/core';

@Component({
  selector: 'app-filmes',
  standalone: true,
  imports: [],
  templateUrl: './filmes.component.html',
  styleUrl: './filmes.component.scss'
})
export class FilmesComponent {
  filme = {
    infos: {
      filme1: 'O Auto da Compadecida' + '(2000)',
      filme2: 'Cidade de Deus' + '(2002)',
      filme3: 'Estômago' + '(2007)',
      filme4: 'A Hora da Estrela' + '(1985)'

    }
  }
}
