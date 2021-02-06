import { ConfigOption } from '@ngx-formly/core';
import { FormlyWrapperPanelComponent } from '../formly-wrapper';

export const config: ConfigOption = {
  types: [
  ],
  wrappers: [{ name: 'panel', component: FormlyWrapperPanelComponent }],
  validationMessages: [
  ],
  extras: { lazyRender: true }
};
