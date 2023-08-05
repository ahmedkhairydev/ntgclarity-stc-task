import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from './sub-modules/directives/directives.module';
import { BaseModule } from './sub-modules/base/base.module';

const MODULES = [
  BaseModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ...MODULES,
  ]
})
export class SharedModule { }
