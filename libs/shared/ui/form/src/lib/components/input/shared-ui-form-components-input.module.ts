import { NgModule } from '@angular/core';
import { FieldInputComponent } from './field-input.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemePrimengModule } from '@zyweb/shared/ui/common';

@NgModule({
  imports: [
    FormlyModule,
    FormlyPrimeNGModule,
    ReactiveFormsModule,
    ThemePrimengModule,
  ],
  exports: [
    FieldInputComponent,
  ],
  declarations: [FieldInputComponent,
  ],
  providers: [],
})

export class SharedUiFormComponentsInputModule {

}
