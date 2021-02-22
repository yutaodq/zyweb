import { NgModule } from '@angular/core';
import { SharedUiFormComponentsButtonModule } from './buttons';
import { SharedUiFormComponentsFormModule } from './form';
import { SharedUiFormComponentsInputModule } from './input';
import { SharedUiFormComponentsMyFormModule } from './my-form';


const UI_FORM_EXPORTS_MODULE = [
  SharedUiFormComponentsButtonModule,
  SharedUiFormComponentsFormModule,
  SharedUiFormComponentsInputModule,
  SharedUiFormComponentsMyFormModule,
]
@NgModule({
  imports: [
  ],
  exports: [
    ...UI_FORM_EXPORTS_MODULE
  ],
  declarations: [],
  providers: [],
})

export class SharedUiFormComponentsModule {

}
