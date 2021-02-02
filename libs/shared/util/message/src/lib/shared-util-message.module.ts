import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUtilMessageToasterModule } from './components/shared-util-message-toaster.module';

const EXPORTS_MODULES = [
  SharedUtilMessageToasterModule,
]

@NgModule({
  imports: [CommonModule],
  exports: [...EXPORTS_MODULES],
  providers: [],
  bootstrap: []
})
export class SharedUtilMessageModule {}
