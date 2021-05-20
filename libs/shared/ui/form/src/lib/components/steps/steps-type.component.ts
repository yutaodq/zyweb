import { Component } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';
import { MenuItem } from 'primeng/api';
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
})
export class StepsTypeComponent extends FieldType {
  aitems: MenuItem[];
  // items: MenuItem[] = [
  //   {label: 'Carrinho', routerLink: ''},
  //   {label: 'Endereço', routerLink: 'endereco'},
  //   {label: 'Pagamento', routerLink: 'pagamento'},
  //   {label: 'Finalizar', routerLink: 'confirmar'}
  // ];

  /*
前缀
 */

  get items(): MenuItem[] {
    if (this.to.attributes === undefined || this.to.attributes.items === undefined) {
      return null;
    }
    this.aitems = this.to.attributes.items;
    return <MenuItem[]> this.to.attributes.items;
  }

}
