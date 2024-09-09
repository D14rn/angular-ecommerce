import { Component, inject, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-cart-modal',
  standalone: true,
  imports: [],
  templateUrl: './cart-modal.component.html',
  styleUrl: './cart-modal.component.css'
})
export class CartModalComponent {
  modalService = inject(NgbModal);
  cartService = inject(CartService);
  cartItems: CartItem[] = [];

	open(content: TemplateRef<any>) {
		this.modalService.open(content);
	}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }
}
