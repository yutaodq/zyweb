import { NgModule } from '@angular/core';
import { SharedUiFormComponentsButtonModule } from './buttons';
import { SharedUiFormComponentsFormModule } from './form';
import { SharedUiFormComponentsInputModule } from './input';


const UI_FORM_EXPORTS_MODULE = [
  SharedUiFormComponentsButtonModule,
  SharedUiFormComponentsFormModule,
  SharedUiFormComponentsInputModule,
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
