import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUtilMessageToasterModule } from './components/shared-util-message-toaster.module';
import { ToastrModule } from 'ngx-toastr';
import { NotificationService } from './services';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './stores/effects';

const EXPORTS_MODULES = [
  // SharedUtilMessageToasterModule,
]

@NgModule({
  imports: [CommonModule,
    ToastrModule.forRoot(),
    EffectsModule.forFeature(effects),

  ],
  exports: [...EXPORTS_MODULES],
  providers: [NotificationService],
  bootstrap: []
})
export class SharedUtilMessageModule {}
