import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = 'http://localhost:3000/api/product/';
  pageNum = 1;
  products = new Map<number, Product[]>();
  
  constructor() {
    this.products.set(1, [
        { id: "30e99341347c49043afec20f701", name: "Produit 1", price: 100, quantity: 3, mainImage: "https://dummyimage.com/600x400/000/fff", category: 1, description: "LoL this is a product description", ratingsAverage: 5},
        { id: "908dbb2b470ed9c51afec20f701", name: "Produit 2", price: 1000, quantity: 1, mainImage: "https://dummyimage.com/600x400/000/fff", category: 1, description: "LoL this is a product description", ratingsAverage: 4},
        { id: "1424edffa47c49043afec20f701", name: "Produit 3", price: 50, quantity: 3, mainImage: "https://dummyimage.com/600x400/000/fff", category: 1, description: "LoL this is a product description", ratingsAverage: 4},
        { id: "14efaccd547c49043afec20f701", name: "Produit 4", price: 25, quantity: 2, mainImage: "https://dummyimage.com/600x400/000/fff", category: 1, description: "LoL this is a product description", ratingsAverage: 4},
        { id: "130bbd14efaccd547afec20f701", name: "Produit 5", price: 10, quantity: 5, mainImage: "https://dummyimage.com/600x400/000/fff", category: 1, description: "LoL this is a product description", ratingsAverage: 4},
        { id: "30ddbaafec20f7014efaccd5421", name: "Produit 6", price: 35, quantity: 2, mainImage: "https://dummyimage.com/600x400/000/fff", category: 1, description: "LoL this is a product description", ratingsAverage: 4}
    ]);

    this.products.set(2, [
      { id: "30e99341347c4ehazafec20f701", name: "Produit 7", price: 100, quantity: 3, mainImage: "https://dummyimage.com/600x400/000/fff", category: 2, description: "LoL this is a product description", ratingsAverage: 5},
      { id: "908dbb2b47jyrhzerafec20f701", name: "Produit 8", price: 1000, quantity: 1, mainImage: "https://dummyimage.com/600x400/000/fff", category: 2, description: "LoL this is a product description", ratingsAverage: 4},
      { id: "1424edffa47c49043afec20f789", name: "Produit 9", price: 50, quantity: 3, mainImage: "https://dummyimage.com/600x400/000/fff", category: 2, description: "LoL this is a product description", ratingsAverage: 4},
      { id: "14efaccd54r8jezee5fec20f756", name: "Produit 10", price: 25, quantity: 2, mainImage: "https://dummyimage.com/600x400/000/fff", category: 2, description: "LoL this is a product description", ratingsAverage: 4},
      { id: "130bbd14efacrejerzfec20f701", name: "Produit 11", price: 10, quantity: 5, mainImage: "https://dummyimage.com/600x400/000/fff", category: 2, description: "LoL this is a product description", ratingsAverage: 4},
      { id: "30ddbaafezeaeh85ez8aeh4zaeh", name: "Produit 12", price: 35, quantity: 2, mainImage: "https://dummyimage.com/600x400/000/fff", category: 2, description: "LoL this is a product description", ratingsAverage: 4}
    ]);
  }

  async getProductListByPage(pageNum: number): Promise<Product[] | undefined> {
    // const url = `${this.baseUrl}?limit=6&page=${pageNum}`;
    // const data = await fetch(url);
    // return await data.json() ?? {};
    this.pageNum = pageNum;
    if (this.products.has(pageNum)) {
      return this.products.get(pageNum);
    }
    // TODO: Make this a request to an API
    return undefined;
  }

  hasNextProductPage(): boolean {
    return this.products.has(this.pageNum+1);
  }

  async getProductDetailsById(id: string): Promise<Product | undefined> {
    // const url = `${this.baseUrl}${id}`;
    // const data = await fetch(url);
    // return await data.json() ?? {};
    for (let key of this.products.keys()) {
      const res = this.products.get(key)?.find(product => product.id === id);
      if (res) {
        return res;
      }
    }
    return undefined;
  }
}
