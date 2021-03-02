import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { LayoutFeatureIvmsModule } from '@zyweb/layout/feature/ivms';
import { SharedUtilMessageModule } from '@zyweb/shared/util/message';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutFeatureIvmsModule,
  ],
  bootstrap: [AppComponent],


})
export class AppModule {}
