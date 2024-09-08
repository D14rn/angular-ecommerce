import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CartModalComponent } from "./components/cart-modal/cart-modal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CartModalComponent],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
      <div class="container">
        <a routerLink="/" class="navbar-brand" href="#">E-commerce</a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a routerLink="/" class="nav-link">Home</a>
            </li>
          </ul>
        </div>
        <app-cart-modal/>
      </div>
    </nav>
    <main>
      <section class="content">
        <router-outlet/>
      </section>
    </main>`,
  styleUrl: './app.component.css'
})
export class AppComponent {}