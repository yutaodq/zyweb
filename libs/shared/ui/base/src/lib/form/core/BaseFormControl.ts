import { AbstractControlOptions, FormControl, FormGroup, Validators } from '@angular/forms';

export class BaseFormControl extends FormControl {
  label: string;
  modelProperty: string;

  static create(value: any, label: string, validator?: any, property?: string ): BaseFormControl {
    return new BaseFormControl(value, label, validator, property);
  }


  constructor(value: any, label?: string | null, validator?: any | null, property?: string | null, ) {
    super(value, validator);
    this.label = label;
    this.modelProperty = property;
  }


  getValidationMessages() {
    const messages: string[] = [];
    if (this.errors) {
      // tslint:disable-next-line:forin
      for (const errorName in this.errors) {
        switch (errorName) {
          case "required":
            messages.push(`You must enter a ${this.label}`);
            break;
          case "minlength":
            messages.push(`A ${this.label} must be at least
                            ${this.errors['minlength'].requiredLength}
                            characters`);
            break;
          case "maxlength":
            messages.push(`A ${this.label} must be no more than
                            ${this.errors['maxlength'].requiredLength}
                            characters`);
            break;
          case "pattern":
            messages.push(`The ${this.label} contains
                             illegal characters`);
            break;
          case "limit":
            messages.push(`A ${this.label} cannot be more
                            than ${this.errors['limit'].limit}`);
            break;
        }
      }
    }
    return messages;
  }


}
