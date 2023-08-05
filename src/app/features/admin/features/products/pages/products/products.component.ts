import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { Product } from 'core/interfaces';
import { ProductsService } from 'core/services';
import { Subject, filter, takeUntil } from 'rxjs';
import { TableRowTypes } from 'shared/enums';
import { Table } from 'shared/interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  private productsServices = inject(ProductsService);
  private router = inject(Router);
  private title = inject(Title);
  private destroy$ = new Subject<boolean>();

  products!: Product[];
  columns: Table[] = [
    {
      title: 'title',
      rowPropertyName: 'title',
      type: TableRowTypes.data,
    },
    {
      title: 'description',
      rowPropertyName: 'description',
      type: TableRowTypes.data,
    },
    {
      title: 'category',
      rowPropertyName: 'category',
      type: TableRowTypes.data,
    },
    {
      title: 'price',
      rowPropertyName: 'price',
      type: TableRowTypes.data,
    },
    {
      title: 'Action',
      rowPropertyName: 'action',
      type: TableRowTypes.action,
    },
  ];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.title.setTitle(`STC E-Commerce | Products`);
    this.getProducts();

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe((event: any) => {
        if (!event.url.includes('edit') && !event.url.includes('add')) {
          this.title.setTitle(`STC E-Commerce | Products`);
          this.getProducts();
        }
      });
  }

  getProducts() {
    this.productsServices.products.subscribe(products => this.products = products);
  }

  remove(productId: string) {
    this.productsServices.remove(productId).subscribe(() => this.getProducts());
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.destroy$.next(true);
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }
}
