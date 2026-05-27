import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Navbar } from './pages/components/shared/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Lanau');
}
