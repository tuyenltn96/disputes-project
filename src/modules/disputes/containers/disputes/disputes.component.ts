import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../store';

import { Dispute } from '../../models/dispute.model';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'disputes',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './disputes.component.html',
    styleUrls: ['./disputes.component.scss']
})
export class DisputesComponent implements OnInit {
    disputes$: Observable<Dispute[]>;
    constructor(private store: Store<fromStore.DisputesState>) { }
    ngOnInit() {
        this.disputes$ = this.store.select(fromStore.getAllDisputes);
        this.store.dispatch(new fromStore.LoadDisputes());
    }
}
