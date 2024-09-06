import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilmesComponent } from './filmes/filmes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FilmesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'atividade-1';
}
@NgModule({
  declarations: [],

  imports: [AppComponent, FilmesComponent],
})

export class AppModule { }