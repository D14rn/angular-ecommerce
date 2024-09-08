import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  route = inject(ActivatedRoute);
  productService: ProductService = inject(ProductService);
  productId: string;
  product: Product | undefined;

  constructor () {
    this.productId = this.route.snapshot.params["id"];
    this.productService.getProductDetailsById(this.productId).then(product => {this.product = product});
  }
}
