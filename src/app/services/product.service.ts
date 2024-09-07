import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = 'http://localhost:3000/api/product/';

  testData = [
    { id: "30e99341347c49043afec20f701", name: "Produit 1", price: 100, quantity: 3, mainImage: "https://dummyimage.com/600x400/000/fff", category: 1, description: "LoL this is a product description", ratingsAverage: 5},
    { id: "908dbb2b470ed9c51afec20f701", name: "Produit 2", price: 1000, quantity: 1, mainImage: "https://dummyimage.com/600x400/000/fff", category: 1, description: "LoL this is a product description", ratingsAverage: 4},
    { id: "1424edffa47c49043afec20f701", name: "Produit 3", price: 50, quantity: 3, mainImage: "https://dummyimage.com/600x400/000/fff", category: 1, description: "LoL this is a product description", ratingsAverage: 4},
    { id: "14efaccd547c49043afec20f701", name: "Produit 4", price: 25, quantity: 2, mainImage: "https://dummyimage.com/600x400/000/fff", category: 1, description: "LoL this is a product description", ratingsAverage: 4},
    { id: "130bbd14efaccd547afec20f701", name: "Produit 5", price: 10, quantity: 5, mainImage: "https://dummyimage.com/600x400/000/fff", category: 1, description: "LoL this is a product description", ratingsAverage: 4},
    { id: "30ddbaafec20f7014efaccd5421", name: "Produit 6", price: 35, quantity: 2, mainImage: "https://dummyimage.com/600x400/000/fff", category: 1, description: "LoL this is a product description", ratingsAverage: 4}
  ];

  async getProductListByPage(pageNum: Number): Promise<Product[] | undefined> {
    console.log(`Fetching product list with page number: "${pageNum}"`);
    // const url = `${this.baseUrl}?limit=6&page=${pageNum}`;
    // const data = await fetch(url);
    // return await data.json() ?? {};
    return this.testData;
  }

  async getProductDetailsById(id: string): Promise<Product | undefined> {
    console.log(`Fetching product with id: "${id}"`);
    // const url = `${this.baseUrl}${id}`;
    // const data = await fetch(url);
    // return await data.json() ?? {};
    return this.testData.find(
      product =>product.id === id
    );
  }
}
