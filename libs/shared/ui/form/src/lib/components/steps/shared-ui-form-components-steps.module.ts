import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { ReactiveFormsModule } from '@angular/forms';
import { StepsTypeComponent } from './steps-type.component';
import { ThemePrimengModule } from '@zyweb/shared/ui/common';

@NgModule({
  imports: [
    FormlyModule,
    FormlyPrimeNGModule,
    ReactiveFormsModule,
    ThemePrimengModule,
  ],
  exports: [StepsTypeComponent],
  declarations: [StepsTypeComponent],
  providers: [],
})
export class SharedUiFormComponentsStepsModule {}
