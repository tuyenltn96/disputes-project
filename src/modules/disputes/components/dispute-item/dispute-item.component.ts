import {
    Component,
    Input,
    ChangeDetectionStrategy,
} from '@angular/core';
import { Dispute } from '../../models/dispute.model';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'dispute-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dispute-item.component.html',
    styleUrls: ['./dispute-item.component.scss']
})
export class DisputeItemComponent {
    @Input() dispute: Dispute;
}
