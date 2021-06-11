import { NgModule } from '@angular/core';
import { NewFormButtonComponent } from './new-form-button.component';
import { CommonModule } from '@angular/common';
import { ThemePrimengModule } from '@zyweb/shared/ui/common';
import { SharedUiDirectiveModule } from '@zyweb/shared/ui/directive';


@NgModule({
  imports: [
    CommonModule,
    ThemePrimengModule,
    SharedUiDirectiveModule,
  ],
  exports: [
    NewFormButtonComponent,
  ],
  declarations: [NewFormButtonComponent,
  ],
  providers: [],
})

export class SharedUiBaseButtonNewFormModule {

}
