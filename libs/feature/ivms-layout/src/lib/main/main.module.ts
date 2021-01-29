import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { IvdsComponent } from './component/ivds.component';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [IvdsComponent],
  imports: [
    CommonModule,
    RouterModule,
    ToastModule
  ],
  exports: [ IvdsComponent ],
  providers: []

})
export class MainModule { }
