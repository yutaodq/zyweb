import { NgModule } from '@angular/core';
import { FieldInputComponent } from './field-input.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [
    FormlyModule,
    FormlyPrimeNGModule,
    ReactiveFormsModule,
    InputTextModule,
  ],
  exports: [
    FieldInputComponent
  ],
  declarations: [FieldInputComponent],
  providers: [],
})

export class SharedUiFormComponentsInputModule {

}
