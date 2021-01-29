import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { MegaMenuModule } from 'primeng/megamenu';
import { MessageModule } from 'primeng/message';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CalendarModule } from 'primeng/calendar';
import { SidebarModule } from 'primeng/sidebar';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessagesModule } from 'primeng/messages';
import {ToolbarModule} from 'primeng/toolbar';
import {SplitButtonModule} from 'primeng/splitbutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

export const EXPORTS_PRIMENG_MODULES = [
  InputTextModule,
  ButtonModule,
  PanelModule,
  ToastModule,
  MegaMenuModule,
  MessageModule,
  CardModule,
  ProgressSpinnerModule,
  OverlayPanelModule,
  BreadcrumbModule,
  CalendarModule,
  SidebarModule,
  DynamicDialogModule,
  InputTextareaModule,
  ToolbarModule,
  MessagesModule,
  SplitButtonModule,
  ConfirmDialogModule,
  DynamicDialogModule,
];

@NgModule({
  exports: [...EXPORTS_PRIMENG_MODULES],
})
export class ThemePrimengModule { }
