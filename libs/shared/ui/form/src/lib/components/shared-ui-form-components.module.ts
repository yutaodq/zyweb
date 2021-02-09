import { NgModule } from '@angular/core';
import { SharedUiFormComponentsButtonModule } from './buttons';
import { SharedUiFormComponentsFormModule } from './form';


const UI_FORM_EXPORTS_MODULE = [
  SharedUiFormComponentsButtonModule,
  SharedUiFormComponentsFormModule,
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
