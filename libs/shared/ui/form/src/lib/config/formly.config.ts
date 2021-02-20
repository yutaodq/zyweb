import { ConfigOption } from '@ngx-formly/core';
import { FormlyWrapperPanelComponent } from '../formly-wrapper';
import { FieldInputComponent } from '../components/input/field-input.component';

export const config: ConfigOption = {
  types: [
    { name: 'inputLx', component: FieldInputComponent }
  ],
  wrappers: [{ name: 'panel', component: FormlyWrapperPanelComponent }],
  validationMessages: [
  ],
  extras: { lazyRender: true }
};
