import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

import { HeaderComponent, LayoutComponent } from './components';
import { BaseModule } from 'shared/sub-modules/base/base.module';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BaseModule,
    ToastrModule.forRoot(),
  ]
})
export class CoreModule { }
