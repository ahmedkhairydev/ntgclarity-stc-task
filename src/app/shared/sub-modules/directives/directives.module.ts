import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IsEnglishDirective } from './is-english/is-english.directive';

const DIRECTIVES = [
  IsEnglishDirective
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...DIRECTIVES
  ],
  exports: [
    ...DIRECTIVES
  ]
})
export class DirectivesModule { }
