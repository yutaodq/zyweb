import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CurrencyTypeComponent } from './currency-type.component';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  imports: [
    FormlyModule,
    FormlyPrimeNGModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule
  ],
  exports: [
    CurrencyTypeComponent
  ],
  declarations: [
    CurrencyTypeComponent
  ],
  providers: [],
})

export class SharedUiFormComponentsNumberModule {

}
