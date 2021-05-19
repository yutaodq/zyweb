import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { ReactiveFormsModule } from '@angular/forms';
import { TabsTypeComponent } from './tabs-type.component';
import { CommonModule } from '@angular/common';
import { ThemePrimengModule } from '@zyweb/shared/ui/common';


const UI_FORM_EXPORTS_MODULE = [
]
@NgModule({
  imports: [
    FormlyModule,
    FormlyPrimeNGModule,
    ReactiveFormsModule,
    CommonModule,
    ThemePrimengModule
  ],
  exports: [
    TabsTypeComponent
  ],
  declarations: [TabsTypeComponent],
  providers: [],
})

export class SharedUiFormComponentsTabsTypeModule {

}
