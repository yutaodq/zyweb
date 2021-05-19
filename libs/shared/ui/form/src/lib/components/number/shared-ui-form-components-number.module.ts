import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { ReactiveFormsModule } from '@angular/forms';
import { NumberTypeComponent } from './number-type.component';
import { ThemePrimengModule } from '@zyweb/shared/ui/common';

@NgModule({
  imports: [
    FormlyModule,
    FormlyPrimeNGModule,
    ReactiveFormsModule,
    ThemePrimengModule,
  ],
  exports: [NumberTypeComponent],
  declarations: [NumberTypeComponent],
  providers: [],
})
export class SharedUiFormComponentsNumberModule {}
