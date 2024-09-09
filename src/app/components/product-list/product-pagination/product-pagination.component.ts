import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-pagination',
  standalone: true,
  imports: [],
  templateUrl: './product-pagination.component.html',
  styleUrl: './product-pagination.component.css'
})
export class ProductPaginationComponent {
  @Input() productService!: ProductService;
  @Input() productList: Product[] | undefined;
  @Output() getNextPage = new EventEmitter<void>;
  @Output() getPreviousPage = new EventEmitter<void>;

  protected handleGetNextPage() {
    this.getNextPage.emit();
  }
  
  protected handleGetPreviousPage() {
    this.getPreviousPage.emit();
  }
}
