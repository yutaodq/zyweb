import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { HttpClientModule } from '@angular/common/http';
import { FormlyModule } from '@ngx-formly/core';

import { MainModule } from './main/main.module';
import { SharedDataAccessStoreLvmsRootModule } from '@zyweb/shared/data-access/store/lvms-root';
import { SharedDataAccessStoreNgrxRouterModule } from '@zyweb/shared/data-access/store/ngrx-router';
import { SharedUtilI18nModule } from '@zyweb/shared/util/i18n';
import { SharedUtilLog4Module } from '@zyweb/shared/util/log4';
import { SharedDataAccessStoreNgrxErrorModule } from '@zyweb/shared/data-access/store/ngrx-error';
import { SharedDataAccessApiLvmsModule } from '@zyweb/shared/data-access/api/lvms';

@NgModule({
  imports: [CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyPrimeNGModule,
    SharedDataAccessApiLvmsModule,
    SharedDataAccessStoreLvmsRootModule.forRoot(),
    SharedDataAccessStoreNgrxRouterModule,
    SharedDataAccessStoreNgrxErrorModule,
    SharedUtilI18nModule,
    SharedUtilLog4Module,
  ],
  exports: [MainModule],
  providers: [MessageService]
})
export class LayoutFeatureIvmsModule {}
