import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { NotificationService } from './services';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './stores/effects';

const EXPORTS_MODULES = [
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
