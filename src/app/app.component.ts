import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CartModalComponent } from "./components/cart-modal/cart-modal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CartModalComponent],
  template: `
    <nav>
      <ul>
        <li>
          <a routerLink="/">Home</a>
        </li>
      </ul>
    </nav>
    <main>
      <app-cart-modal/>
      <section class="content">
        <router-outlet/>
      </section>
    </main>`,
  styleUrl: './app.component.css'
})
export class AppComponent {}
