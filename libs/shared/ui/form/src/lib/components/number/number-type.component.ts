import { Component } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'zyweb-formly-field-number-type',
  templateUrl: './number-type.component.html',
})
export class NumberTypeComponent extends FieldType {

  get mode(): string {
    if (this.to.attributes?.mode === 'currency') {
      return 'currency';
    }
    return 'decimal';
  }
  /*
前缀
 */

  get prefix(): string {
    if (this.to.attributes === undefined || this.to.attributes.prefix === undefined) {
      return null;
    }

    return <string>this.to.attributes.prefix;
  }
/*
后缀
 */
  get suffix(): string {
    if (this.to.attributes === undefined || this.to.attributes.suffix === undefined) {
      return null;
    }

    return <string>this.to.attributes.suffix;
  }
  /*
小数点最小位数
 */

  get minFractionDigits(): string {
    if (this.to.attributes === undefined || this.to.attributes.minFractionDigits === undefined) {
      return null;
    }

    return <string>this.to.attributes.minFractionDigits;
  }
  /*
小数点最大位数
 */

  get maxFractionDigits(): string {
    if (this.to.attributes === undefined || this.to.attributes.maxFractionDigits === undefined) {
      return null;
    }

    return <string>this.to.attributes.maxFractionDigits;
  }
  /*
最小数
 */

  get min(): string {
    if (this.to.attributes === undefined || this.to.attributes.min === undefined) {
      return null;
    }

    return <string>this.to.attributes.min;
  }
  /*
最大数
 */

  get max(): string {
    if (this.to.attributes === undefined || this.to.attributes.max === undefined) {
      return null;
    }
    return <string>this.to.attributes.max;
  }

  get disabled(): boolean {
    if (this.to.disabled === undefined) {
      return false;
    }

    return <boolean>this.to.disabled;
  }
  /*
  步进因子来增加/减少值。
   */
  get step(): string {
    if (this.to.attributes === undefined || this.to.attributes.step === undefined) {
      return "1";
    }

    return <string>this.to.attributes.step;
  }


  get showButtons(): string {
    if (this.to.attributes === undefined || this.to.attributes.showButtons === undefined) {
      return "false";
    }

    return <string>this.to.attributes.showButtons;
  }


}
