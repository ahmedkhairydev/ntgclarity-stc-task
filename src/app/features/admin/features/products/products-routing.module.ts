import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogComponent } from 'shared/components';

import { ProductsComponent } from './pages/products/products.component';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    pathMatch: 'full',
    children: [
      {
        path: 'add',
        data: { component: AddEditProductComponent, pageTitle: 'PRODUCTS.ADD', isEdit: false, },
        component: DialogComponent,
      },
      {
        path: ':productId',
        children: [
          {
            path: '', redirectTo: '/admin/products', pathMatch: 'full'
          },
          {
            path: 'edit',
            data: { component: AddEditProductComponent, pageTitle: 'PRODUCTS.EDIT', isEdit: true, },
            component: DialogComponent,
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
