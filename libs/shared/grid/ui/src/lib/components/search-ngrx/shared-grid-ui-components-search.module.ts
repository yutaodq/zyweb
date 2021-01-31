import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemePrimengModule } from '@zyweb/shared/ui/common';
import { SearchNgrxComponent } from './search-ngrx.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule,
    FormsModule,
    ThemePrimengModule
  ],
  declarations: [SearchNgrxComponent],
  exports: [SearchNgrxComponent]
})
export class SharedGridUiComponentsSearchModule {
}
