import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink],
  // TODO: create a product card component
  template: `
    <p>
      product-list works!
    </p>
    <ul>
      @for (product of productList; track product.id) {
        <li><a routerLink='/details/{{product.id}}'>{{product.name}}</a></li>
      }
    </ul>
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
