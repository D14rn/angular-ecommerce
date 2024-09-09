import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CartModalComponent } from "./components/cart-modal/cart-modal.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CartModalComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}