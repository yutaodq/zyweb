import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedUiBaseModule } from '@zyweb/shared/ui/base';
import { SharedUiCommonModule } from '@zyweb/shared/ui/common';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    SharedUiBaseModule,
    SharedUiCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
