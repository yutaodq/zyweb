import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModule } from './main/main.module';
import { SharedDataAccessStoreLvmsRootModule } from '@zyweb/shared/data-access/store/lvms-root';
import { SharedDataAccessStoreNgrxRouterModule } from '@zyweb/shared/data-access/store/ngrx-router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { HttpClientModule } from '@angular/common/http';
import { FormlyModule } from '@ngx-formly/core';
import { SharedDataAccessApiHttpServiceModule } from '@zyweb/shared/data-access/api/http-service';
import { SharedUtilI18nModule } from '@zyweb/shared/util/i18n';
import { SharedUtilLog4Module } from '@zyweb/shared/util/log4';

@NgModule({
  imports: [CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyPrimeNGModule,
    SharedDataAccessStoreLvmsRootModule.forRoot(),
    SharedDataAccessStoreNgrxRouterModule,
    SharedDataAccessApiHttpServiceModule,
    SharedUtilI18nModule,
    SharedUtilLog4Module,
  ],
  exports: [MainModule],
})
export class LayoutFeatureIvmsModule {}
