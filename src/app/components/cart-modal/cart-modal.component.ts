import { Component, inject, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '../../services/cart.service';
import { CartModalTableComponent } from "./cart-modal-table/cart-modal-table.component";

@Component({
  selector: 'app-cart-modal',
  standalone: true,
  imports: [CartModalTableComponent],
  templateUrl: './cart-modal.component.html',
  styleUrl: './cart-modal.component.css'
})
export class CartModalComponent {
  modalService = inject(NgbModal);
  cartService = inject(CartService);

	open(content: TemplateRef<any>) {
		this.modalService.open(content);
	}
}
