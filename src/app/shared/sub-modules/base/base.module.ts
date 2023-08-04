import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

const MODULES = [
  RouterModule,
  TranslateModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: MODULES
})
export class BaseModule { }
