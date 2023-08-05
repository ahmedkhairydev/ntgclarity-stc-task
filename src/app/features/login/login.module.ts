import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login/login.component';

import { BaseModule } from 'shared/sub-modules/base/base.module';
import { TextBoxComponent, ButtonComponent } from 'shared/components';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    BaseModule,
    TextBoxComponent,
    ButtonComponent
  ]
})
export class LoginModule { }
