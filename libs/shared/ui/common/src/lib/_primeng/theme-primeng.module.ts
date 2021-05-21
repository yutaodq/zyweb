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
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PrimeNGConfig, Translation } from 'primeng/api';
import { TabViewModule } from 'primeng/tabview';
import { InputNumberModule } from 'primeng/inputnumber';
import { StepsModule } from 'primeng/steps';
import { AutoCompleteModule } from 'primeng/autocomplete';

export const IMPORTS_PRIMENG_MODULES = [
  InputTextModule,
  InputNumberModule,
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
  TabViewModule,
  StepsModule,
  AutoCompleteModule,
];

export const EXPORTS_PRIMENG_MODULES = [
  InputTextModule,
  InputNumberModule,
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
  TabViewModule,
  StepsModule,
  AutoCompleteModule,
];

@NgModule({
  imports: [...IMPORTS_PRIMENG_MODULES],
  exports: [...EXPORTS_PRIMENG_MODULES]
})
export class ThemePrimengModule {
   translation: Translation = {
     startsWith: "Starts with",
     contains: "Contains",
     notContains: "Not contains",
     endsWith: "Ends with",
     equals: "相等",
     notEquals: "Not equals",
     noFilter: "No Filter",
     lt: "Less than",
     lte: "Less than or equal to",
     gt: "Greater than",
     gte: "Great then or equals",
     is: "Is",
     isNot: "Is not",
    before: '在……以前',
    after: '在……之后',
    clear: '清除',
    apply: '应用',
    matchAll: 'Coincidir con todos',
    matchAny: 'Coincidir con cualquiera',
    addRule: 'Agregar Condición',
    removeRule: 'Eliminar Condición',
    accept: '同意',
    reject: '拒绝',
    choose: '选择',
    upload: '上载',
    cancel: '取消',
     dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
     dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
     dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
     monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
     monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    today: '今天',
    weekHeader: 'Wk'
  }

  constructor(private primengConfig: PrimeNGConfig) {
    this.primengConfig.setTranslation(this.translation);

  }
}
