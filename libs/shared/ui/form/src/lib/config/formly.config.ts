import { ConfigOption } from '@ngx-formly/core';
import { FormlyWrapperPanelComponent } from '../formly-wrapper';
import { FieldInputComponent } from '../components/input/field-input.component';
import { TabsTypeComponent } from '../components/tabs/tabs-type.component';

export const config: ConfigOption = {
  types: [
    { name: 'inputLx', component: FieldInputComponent },
    { name: 'tabs', component: TabsTypeComponent },

  ],
  wrappers: [{ name: 'panel', component: FormlyWrapperPanelComponent }],
  validationMessages: [
  ],
  extras: { lazyRender: true }
};
