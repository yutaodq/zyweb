import { Component, ElementRef, IterableDiffers, NgZone } from '@angular/core';

import { NotificationReceiverService } from '../message';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'zyweb-util-message-toaster',
    templateUrl: './toaster.component.html',
    styleUrls: ['./toaster.component.scss'],
    providers: [ MessageService]
})
export class ToasterComponent {
    constructor(notificationReceiverService: NotificationReceiverService
    ) {
    }
}
