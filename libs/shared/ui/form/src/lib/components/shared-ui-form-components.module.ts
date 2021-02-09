import { NgModule } from '@angular/core';
import { SharedUiFormComponentsButtonModule } from './buttons';


const UI_FORM_EXPORTS_MODULE = [
  SharedUiFormComponentsButtonModule
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
