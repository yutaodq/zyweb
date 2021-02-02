import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { ToasterComponent } from './toaster.component';

const EXPORTS_MODULES = [
  ToastModule,
  MessageModule
]

@NgModule({
  imports: [CommonModule, ToastModule],
  exports: [...EXPORTS_MODULES, ToasterComponent],
  declarations: [ToasterComponent],
  providers: [MessageService],
  bootstrap: []
})
export class SharedUtilMessageToasterModule {}

