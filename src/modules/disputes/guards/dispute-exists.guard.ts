import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { tap, filter, take, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as fromStore from '../store';
import { Dispute } from '../models/dispute.model';

@Injectable()
export class DisputeExistsGuard {
    constructor(private store: Store<fromStore.DisputesState>) { }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        const disputeId = route.params.id;
        return this.hasDisputeInStore(disputeId);
    }

    hasDisputeInStore(id: string): Observable<boolean> {
        return this.store.select(fromStore.selectDisputeEntities).pipe(
            map(entities => !!entities[id]),
            tap(loaded => {
                if (!loaded) {
                    this.store.dispatch(new fromStore.LoadDisputes());
                }
            }),
            filter(loaded => loaded),
            take(1)
        );
    }
}
