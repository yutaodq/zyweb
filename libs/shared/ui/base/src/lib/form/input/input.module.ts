import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

import { FormlyFieldInput } from './input.type';

@NgModule({
  declarations: [FormlyFieldInput],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ]

})
export class FormlyInputModule {}
