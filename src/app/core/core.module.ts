import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';

import { HeaderComponent, LayoutComponent } from './components';
import { BaseModule } from 'shared/sub-modules/base/base.module';
import { ButtonComponent } from 'shared/components';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    LoadingComponent
  ],
  providers: [TranslateService],
  imports: [
    CommonModule,
    ButtonComponent,
    BaseModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ]
})
export class CoreModule { }

function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
