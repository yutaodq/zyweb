import { ConfigOption } from '@ngx-formly/core';
import { FormlyWrapperPanelComponent } from '../formly-wrapper';
import { FieldInputComponent } from '../components/input/field-input.component';
import { TabsTypeComponent } from '../components/tabs/tabs-type.component';
import { DateTypeComponent } from '../components/calendar/date-type.component';
import { NumberTypeComponent } from '../components/number/number-type.component';
import { StepsTypeComponent } from '../components/steps/steps-type.component';

export const config: ConfigOption = {
  types: [
    { name: 'inputLx', component: FieldInputComponent },
    { name: 'tabsZy', component: TabsTypeComponent },
    { name: 'dateZy', component: DateTypeComponent },
    { name: 'numberZy', component: NumberTypeComponent },
    { name: 'stepsZy', component: StepsTypeComponent },

  ],
  wrappers: [{ name: 'panel', component: FormlyWrapperPanelComponent }],
  validationMessages: [],
  extras: { lazyRender: true },
};
