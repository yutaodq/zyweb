import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { NumberTypeComponent } from './number-type.component';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  imports: [
    FormlyModule,
    FormlyPrimeNGModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
  ],
  exports: [NumberTypeComponent],
  declarations: [NumberTypeComponent],
  providers: [],
})
export class SharedUiFormComponentsNumberModule {}
