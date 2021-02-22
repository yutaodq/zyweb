import { NgModule } from '@angular/core';
import { FormComponent } from './form.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedUiFormComponentsButtonModule } from '../buttons';


const UI_FORM_EXPORTS_MODULE = [
]
@NgModule({
  imports: [
    FormlyModule,
    FormlyPrimeNGModule,
    ReactiveFormsModule,
    SharedUiFormComponentsButtonModule,
  ],
  exports: [
    FormComponent
  ],
  declarations: [FormComponent],
  providers: [],
})

export class SharedUiFormComponentsMyFormModule {

}
