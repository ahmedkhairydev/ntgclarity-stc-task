import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../directives/directives.module';

const MODULES = [
  DirectivesModule,

  RouterModule,
  TranslateModule,
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: MODULES
})
export class BaseModule { }
