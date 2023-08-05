import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './pages/admin/admin.component';
import { FeaturesListComponent } from './components/features-list/features-list.component';
import { ButtonComponent } from 'shared/components';

@NgModule({
  declarations: [
    AdminComponent,
    FeaturesListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatListModule,
    ButtonComponent,
  ]
})
export class AdminModule { }
