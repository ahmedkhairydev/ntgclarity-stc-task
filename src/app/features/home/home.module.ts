import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';

import { ButtonComponent, ProductComponent } from 'shared/components';


@NgModule({
  declarations: [
    HomeComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatListModule,
    ButtonComponent,
    ProductComponent
  ]
})
export class HomeModule { }
