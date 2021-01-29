import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListNewButtonComponent } from './list-new-button.component';
import { ButtonModule } from 'primeng/button';

export const LIST_NEW_BUTTON_EXPORTS: Array<any> = [
  ListNewButtonComponent,

];

@NgModule({
  imports: [CommonModule, ButtonModule],
  declarations: [ListNewButtonComponent],
  exports: [...LIST_NEW_BUTTON_EXPORTS]
})

export class ListNewButtonModule { }
