import { NgModule } from '@angular/core';
import { NewFormButtonComponent } from './new-form-button.component';
import { CommonModule } from '@angular/common';
import { ThemePrimengModule } from '@zyweb/shared/ui/common';


@NgModule({
  imports: [
    CommonModule,
    ThemePrimengModule,
 ],
  exports: [
    NewFormButtonComponent
  ],
  declarations: [NewFormButtonComponent],
  providers: [],
})

export class SharedUiFormComponentsButtonModule {

}
