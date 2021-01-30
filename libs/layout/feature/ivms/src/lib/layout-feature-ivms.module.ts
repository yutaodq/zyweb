import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModule } from './main/main.module';
import { SharedDataAccessStoreLvmsRootModule } from '@zyweb/shared/data-access/store/lvms-root';

@NgModule({
  imports: [CommonModule,
    SharedDataAccessStoreLvmsRootModule.forRoot()
  ],
  exports: [MainModule],
})
export class LayoutFeatureIvmsModule {}
