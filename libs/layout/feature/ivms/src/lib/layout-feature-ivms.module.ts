import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModule } from './main/main.module';
import { SharedDataAccessStoreLvmsRootModule } from '@zyweb/shared/data-access/store/lvms-root';
import { SharedDataAccessStoreNgrxRouterModule } from '@zyweb/shared/data-access/store/ngrx-router';

@NgModule({
  imports: [CommonModule,
    SharedDataAccessStoreLvmsRootModule.forRoot(),
    SharedDataAccessStoreNgrxRouterModule,
  ],
  exports: [MainModule],
})
export class LayoutFeatureIvmsModule {}
