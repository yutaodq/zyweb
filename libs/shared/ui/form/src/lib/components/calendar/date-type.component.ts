import { Component, OnInit } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'zyweb-formly-field-date',
  templateUrl: './date-type.component.html',
})
export class DateTypeComponent extends FieldType  {

  get readonlyInput(): string {
    if (this.to.attributes === undefined || this.to.attributes.readonlyInput === undefined) {
      return "false";
    }

    return <string>this.to.attributes.readonlyInput;
  }
  get yearRange(): string {
    if (this.to.attributes === undefined || this.to.attributes.yearRange === undefined) {
      return "1950:2050";
    }

    return <string>this.to.attributes.yearRange;
  }


}
