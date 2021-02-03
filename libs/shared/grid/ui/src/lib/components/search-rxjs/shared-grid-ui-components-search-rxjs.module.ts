import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemePrimengModule } from '@zyweb/shared/ui/common';
import { FormsModule } from '@angular/forms';
import { SearchRxjsComponent } from './search-rxjs.component';

@NgModule({
  imports: [CommonModule,
    FormsModule,
    ThemePrimengModule
  ],
  declarations: [SearchRxjsComponent],
  exports: [SearchRxjsComponent]
})
export class SharedGridUiComponentsSearchRxjsModule {
}
