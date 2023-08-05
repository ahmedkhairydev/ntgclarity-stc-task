import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Product } from 'core/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends HttpService {
  protected override get baseUrl(): string {
    return 'products';
  }

  get products() {
    return this.get<Product[]>();
  }

  get categories() {
    return this.get<string[]>({ APIName: '/categories' });
  }

  getProductById(productId: string) {
    return this.get<Product>({ APIName: `/${productId}` });
  }

  getProductsByCategory(categoryName: string) {
    return this.get<Product[]>({ APIName: `/category/${categoryName}` });
  }

  add(body: Product) {
    return this.post({ body });
  }

  update(body: Product) {
    return this.put({ body, APIName: `/${body.id}` });
  }

  remove(productId: string) {
    return this.delete({ APIName: `/${productId}` });
  }
}
