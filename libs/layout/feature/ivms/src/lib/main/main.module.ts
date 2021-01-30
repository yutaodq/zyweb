import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { IvdsComponent } from './component/ivds.component';
import { ToastModule } from 'primeng/toast';
import { SharedUiLayoutModule } from '@zyweb/shared/ui/layout';

@NgModule({
  declarations: [IvdsComponent],
  imports: [
    CommonModule,
    RouterModule,
    ToastModule,
    SharedUiLayoutModule,
  ],
  exports: [ IvdsComponent ],
  providers: []

})
export class MainModule { }
