import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './navbar/navbar.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { ConfigModule } from './config/config.module';
import { MenuModule } from './menu/menu.module';

const MAIN_LAYOUT_MODULES = [
  NavbarModule,
  MenuModule,
  HeaderModule,
  FooterModule,
  ConfigModule,
  ]
@NgModule({
  imports: [CommonModule,
    NavbarModule,
    MenuModule,
    HeaderModule,
    FooterModule,
    ConfigModule,
  ],
  exports: [
    ...MAIN_LAYOUT_MODULES
  ]
})
export class SharedUiLayoutIvmsLayoutModule {}
