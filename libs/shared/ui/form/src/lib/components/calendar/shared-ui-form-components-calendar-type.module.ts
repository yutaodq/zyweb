import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { ReactiveFormsModule } from '@angular/forms';
import { DateTypeComponent } from './date-type.component';
import { CommonModule } from '@angular/common';
import { ThemePrimengModule } from '@zyweb/shared/ui/common';


const UI_FORM_EXPORTS_MODULE = [
]
@NgModule({
  imports: [
    FormlyModule,
    FormlyPrimeNGModule,
    ReactiveFormsModule,
    CommonModule,
    ThemePrimengModule
  ],
  exports: [
    DateTypeComponent
  ],
  declarations: [DateTypeComponent],
  providers: [],
})

export class SharedUiFormComponentsCalendarTypeModule {

}
