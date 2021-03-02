import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';

import { MainModule } from './main/main.module';
import { SharedDataAccessStoreLvmsRootModule } from '@zyweb/shared/data-access/store/lvms-root';
import { SharedDataAccessStoreNgrxRouterModule } from '@zyweb/shared/data-access/store/ngrx-router';
import { SharedUtilI18nModule } from '@zyweb/shared/util/i18n';
import { SharedUtilLog4Module } from '@zyweb/shared/util/log4';
import { SharedDataAccessStoreNgrxErrorModule } from '@zyweb/shared/data-access/store/ngrx-error';
import { SharedDataAccessApiLvmsModule } from '@zyweb/shared/data-access/api/lvms';
import { SharedUiFormModule } from '@zyweb/shared/ui/form';
import { SharedUtilMessageModule } from '@zyweb/shared/util/message';

@NgModule({
  imports: [CommonModule,
    HttpClientModule,
    SharedDataAccessApiLvmsModule,
    SharedDataAccessStoreLvmsRootModule.forRoot(),
    SharedDataAccessStoreNgrxRouterModule,
    SharedDataAccessStoreNgrxErrorModule,
    SharedUiFormModule.forRoot(),
    SharedUtilI18nModule,
    SharedUtilLog4Module,
    SharedUtilMessageModule,

  ],
  exports: [MainModule],
  providers: [MessageService]
})
export class LayoutFeatureIvmsModule {}
