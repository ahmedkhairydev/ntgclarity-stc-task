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

  getProducts(limit = '12') {
    return this.get<Product[]>({ params: { limit } });
  }

  get categories() {
    return this.get<string[]>({ APIName: '/categories' });
  }

  getProductsByCategory(categoryName: string) {
    return this.get<Product[]>({ APIName: `/category/${categoryName}` });
  }
}
