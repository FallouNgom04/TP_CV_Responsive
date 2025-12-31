import { Component, signal } from '@angular/core';
import { Entete } from './entete/entete';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Entete],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('cv_bootstrap');
}
