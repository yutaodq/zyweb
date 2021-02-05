import { ConfigOption } from '@ngx-formly/core';
import { FormlyWrapperPanelComponent } from '../formly-wrapper';

export const config: ConfigOption = {
  types: [
  ],
  wrappers: [{ name: 'panel', component: FormlyWrapperPanelComponent }],
  validationMessages: [
    { name: 'required', message: 'This field is required' },

  ],
  extras: { lazyRender: true }
};
