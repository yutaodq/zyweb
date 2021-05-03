import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from '@zyweb/shared/util/environments';

if (environment.production) {
  console.log("正式运行环境：" + environment.baseUrl);
  enableProdMode();
}
if (!environment.production) {
  console.log("开发运行环境：" + environment.baseUrl);
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
