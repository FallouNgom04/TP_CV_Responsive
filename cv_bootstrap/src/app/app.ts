import { Component, signal } from '@angular/core';
import { Entete } from './entete/entete';
import { Sidebar } from './sidebar/sidebar';
import { MainContent } from './main-content/main-content';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Entete, Sidebar, MainContent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('cv_bootstrap');
}
