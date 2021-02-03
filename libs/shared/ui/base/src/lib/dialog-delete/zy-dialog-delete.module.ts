import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DialogDeleteComponent } from './dialog-delete.component';
import { ButtonModule } from 'primeng/button';

export const COMPONENTS_EXPORTS : Array<any> = [
  DialogDeleteComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,

  ],
  declarations: [
    DialogDeleteComponent
  ],
  exports: [...COMPONENTS_EXPORTS],
  providers: [ ],
  entryComponents: [
  ]
})
export class ZyDialogDeleteModule {}

