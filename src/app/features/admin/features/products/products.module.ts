import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './pages/products/products.component';
import { TableComponent } from 'shared/components/table/table.component';
import { ButtonComponent, TextBoxComponent } from 'shared/components';
import { BaseModule } from 'shared/sub-modules/base/base.module';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ProductsComponent,
    AddEditProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    BaseModule,
    MatDialogModule,
    TableComponent,
    ButtonComponent,
    TextBoxComponent,
  ]
})
export class ProductsModule { }
