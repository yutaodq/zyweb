import { NgModule } from '@angular/core';
import { CreateFormComponent } from './create-form.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { ReactiveFormsModule } from '@angular/forms';


const UI_FORM_EXPORTS_MODULE = [
]
@NgModule({
  imports: [
    FormlyModule,
    FormlyPrimeNGModule,
    ReactiveFormsModule,
  ],
  exports: [
    CreateFormComponent
  ],
  declarations: [CreateFormComponent],
  providers: [],
})

export class SharedUiFormComponentsFormModule {

}
