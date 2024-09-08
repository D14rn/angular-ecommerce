import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, ProductCardComponent],
  template: `
    <div class='d-flex flex-column align-items-center'>
      <h2>{{ productList ? 'Page ' + productService.pageNum : 'No more products' }}</h2>
      <div class='d-flex justify-content-center gap-2'>
        @if (productService.pageNum > 1) {
          <button class='btn btn-primary' (click)=getPreviousPage()>&laquo; 
            @if (productList) {
              Previous
            }
            @else {
              Go back
            }
            </button>
        }
        @if(productList) {
          <button class="btn btn-primary" (click)=getNextPage()>Next &raquo;</button>
        }
      </div>
    </div>
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

  constructor() {
    this.getPage(this.productService.pageNum);
  }

  getNextPage() {
    this.getPage(++this.productService.pageNum);
  }

  getPreviousPage() {
    this.getPage(--this.productService.pageNum);
  }

  getPage(pageNum: number | null) {
    if (!pageNum) {
      pageNum = this.productService.pageNum;
    }
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
