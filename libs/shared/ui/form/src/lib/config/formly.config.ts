import { ConfigOption } from '@ngx-formly/core';
import { FormlyWrapperPanelComponent } from '../formly-wrapper';
import { FieldInputComponent } from '../components/input/field-input.component';
import { TabsTypeComponent } from '../components/tabs/tabs-type.component';
import { DateTypeComponent } from '../components/calendar/date-type.component';
import { CurrencyTypeComponent } from '../components/number/currency-type.component';

export const config: ConfigOption = {
  types: [
    { name: 'inputLx', component: FieldInputComponent },
    { name: 'tabsZy', component: TabsTypeComponent },
    { name: 'dateZy', component: DateTypeComponent },
    { name: 'currencyZy', component: CurrencyTypeComponent },




  ],
  wrappers: [{ name: 'panel', component: FormlyWrapperPanelComponent }],
  validationMessages: [
  ],
  extras: { lazyRender: true }
};
