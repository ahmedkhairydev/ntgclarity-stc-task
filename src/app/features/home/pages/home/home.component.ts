import { Component, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Product } from 'core/interfaces';
import { ProductsService } from 'core/services';
import { Subject, distinctUntilChanged, filter, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private productsServices = inject(ProductsService);
  private destroy$ = new Subject();

  products!: Product[];

  constructor() {

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.getProductsByCategory(this.activatedRoute.snapshot.queryParamMap.get('categoryName'));
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const categoryName = this.activatedRoute.snapshot.queryParamMap.get('categoryName');

    if (categoryName) this.getProductsByCategory(categoryName);
    else this.getProducts();
  }

  getProducts() {
    this.productsServices.products.subscribe(products => this.products = products);
  }

  getProductsByCategory(categoryName: string | null) {
    if (!categoryName) {
      this.getProducts();
      return;
    }

    this.productsServices.getProductsByCategory(categoryName).subscribe(products => this.products = products);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.destroy$.next(true);
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }
}
