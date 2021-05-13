import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DialogDeleteComponent } from './dialog-delete.component';
import { ButtonModule } from 'primeng/button';
import { SharedUiCommonModule } from '@zyweb/shared/ui/common';

export const COMPONENTS_EXPORTS : Array<any> = [
  DialogDeleteComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    SharedUiCommonModule

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

