import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, ProductCardComponent],
  // TODO: create a product card component
  template: `
    <div class="row p-2 g-4 mx-auto mt-1 product-list">
      @for (product of productList; track product.id) {
        <div class="col-12 col-md-6">
          <app-product-card [product]=product/>
        </div>
      }
    </div>
  `,
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productService: ProductService = inject(ProductService);
  productList: Product[] | undefined;
  filteredProductList: Product[] | undefined;
  pageNum = 0;

  constructor() {
    this.getNextPage();
  }

  getNextPage() {
    this.getPage(++this.pageNum);
  }

  getPreviousPage() {
    this.getPage(--this.pageNum);
  }

  getPage(pageNum: number) {
    this.productService.getProductListByPage(pageNum).then((productList) => {
      this.productList = productList;
    });
  }
  
  static sortProducts = (productList: Product[]) => {
    return productList.sort((a, b) => b.ratingsAverage - a.ratingsAverage);
  }

  filterProducts = (searchText: string) => {
    if (!this.productList) {
      return;
    }
    if (!searchText) {
      this.filteredProductList = this.productList;
    }
    else {
      this.filteredProductList = this.productList.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
    }
  }
}
