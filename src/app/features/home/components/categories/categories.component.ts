import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'core/services';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  private productsService = inject(ProductsService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  categories: string[] = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getCategories();
  }

  getCategories() {
    this.productsService.categories.subscribe(categories => this.categories = ['All', ...categories]);
  }

  getProductsByCategory(categoryName: string) {
    if (categoryName === 'All') {
      this.router.navigate(['.'], { relativeTo: this.activatedRoute });
      return;
    }

    this.router.navigate(['.'], { relativeTo: this.activatedRoute, queryParams: { categoryName } });
  }

  isActiveCategory(categoryName: string) {
    const categoryQueryParam = this.activatedRoute.snapshot.queryParamMap.get('categoryName');
    if (categoryName === 'All' && !categoryQueryParam) return true;

    return categoryQueryParam === categoryName;
  }
}
