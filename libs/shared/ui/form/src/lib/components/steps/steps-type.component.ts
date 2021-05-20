import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
/*
         templateOptions: {
            label: '车辆原值',
            disabled: false,
            attributes: {
              items: 'abc',
              suffix: 'mm',
              minFractionDigits: '3',
              maxFractionDigits: '5',
              min: '6',
              max: '9',
              mode: 'currency',
              showButtons: false
            }
          }

 */
@Component({
  selector: 'zyweb-formly-field-number-type',
  templateUrl: './steps-type.component.html',
  encapsulation: ViewEncapsulation.None

})
export class StepsTypeComponent extends FieldType implements OnInit, OnDestroy{
  subscription: Subscription;

  fields: FormlyFieldConfig[];
  items: MenuItem[] = [];
  tabs: any[] = [];
  index = 0;

  ngOnInit(): void {
    this.subscription = new Subscription();

    if (this.field && this.field.fieldGroup) {
      this.field.fieldGroup.forEach((fg, index) => {
        this.tabs[index] = fg.fieldGroup;
        this.items.push(
          {
            label: fg.templateOptions.label,
            command: (event: any) => {
              this.index = index;
              this.fields = this.tabs[index];
            }
          }
        );
      });
    }

    this.fields = this.tabs[0];
  }

  isValid(field: FormlyFieldConfig): boolean {
    if (field.key) {
      return field.formControl.valid;
    }

    return field.fieldGroup.every(f => this.isValid(f));
  }

  nextPage(): void {
    if (this.form.valid) {
      this.index = this.index + 1;
      this.fields = this.tabs[this.index];
    }
  }

  prevPage(): void {
    if (this.index > 0) {
      this.index = this.index - 1;
      this.fields = this.tabs[this.index];
    }
  }

  complete(): void {
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  // aitems: MenuItem[];
  // items: MenuItem[] = [
  //   {label: 'Carrinho', routerLink: ''},
  //   {label: 'Endereço', routerLink: 'endereco'},
  //   {label: 'Pagamento', routerLink: 'pagamento'},
  //   {label: 'Finalizar', routerLink: 'confirmar'}
  // ];

  /*
前缀
 */

  // get items(): MenuItem[] {
  //   if (this.to.items === undefined) {
  //   // if (this.to.attributes === undefined || this.to.attributes.items === undefined) {
  //     return null;
  //   }
  //   this.aitems = this.to.items;
  //   return <MenuItem[]> this.to.items;
  // }

}
