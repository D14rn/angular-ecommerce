import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav>
      <ul>
        <li>
          <a routerLink="/">Home</a>
        </li>
      </ul>
    </nav>
    <main>
      <section class="content">
        <router-outlet/>
      </section>
    </main>`,
  styleUrl: './app.component.css'
})
export class AppComponent {}
