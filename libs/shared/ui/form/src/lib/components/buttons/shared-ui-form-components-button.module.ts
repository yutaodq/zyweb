import { NgModule } from '@angular/core';
import { NewFormButtonComponent } from './new-form-button.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';


@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
 ],
  exports: [
    NewFormButtonComponent
  ],
  declarations: [NewFormButtonComponent],
  providers: [],
})

export class SharedUiFormComponentsButtonModule {

}
