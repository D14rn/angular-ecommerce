import { Component, inject } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cart-modal-table',
  standalone: true,
  imports: [],
  templateUrl: './cart-modal-table.component.html',
  styleUrl: './cart-modal-table.component.css'
})
export class CartModalTableComponent {
  cartService: CartService = inject(CartService);
}
