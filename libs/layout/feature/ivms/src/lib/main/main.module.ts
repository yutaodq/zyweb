import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { IvdsComponent } from './component/ivds.component';
import { ToastModule } from 'primeng/toast';
import { SharedUiLayoutModule } from '@zyweb/shared/ui/layout';
import { SharedUtilMessageModule } from '@zyweb/shared/util/message';

@NgModule({
  declarations: [IvdsComponent],
  imports: [
    CommonModule,
    RouterModule,
    ToastModule,
    SharedUiLayoutModule,
    SharedUtilMessageModule,
  ],
  exports: [ IvdsComponent ],
  providers: []

})
export class MainModule { }
