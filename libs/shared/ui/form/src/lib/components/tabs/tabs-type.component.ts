import { Component } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';
/*
https://github.com/snello-cms/snello-formly

 */
@Component({
  selector: 'zyweb-formly-field-tabs',
  templateUrl: './tabs-type.component.html',
})
export class TabsTypeComponent extends FieldType {
  // isValid(field: FormlyFieldConfig) {
  //   if (field.key) {
  //     return field.formControl.valid;
  //   }
  //
  //   return field.fieldGroup.every((f) => this.isValid(f));
  // }
}
