import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, ProductCardComponent],
  templateUrl: './product-list.component.html',
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
