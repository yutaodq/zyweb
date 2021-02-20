import {  Component } from '@angular/core';

import { FieldType } from '@ngx-formly/core';


@Component({
  selector: 'zyweb-shared-ui-form-field-input',
  templateUrl: './field-input.component.html',
  styleUrls: ['./field-input.component.scss'],
  providers: [],
})
export class FieldInputComponent extends FieldType {}
