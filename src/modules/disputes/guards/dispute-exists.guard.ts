import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import * as fromStore from '../store';
import { switchMap, catchError, tap, filter, take, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Dispute } from '../models/dispute.model';

@Injectable()
export class DisputeExistsGuard  {
  constructor(private store: Store<fromStore.DisputesState>) { }

    canActivate(route: ActivatedRouteSnapshot) {
        return this.checkStore().pipe(
            switchMap(() => {
                const id = route.params.id;
                return this.hasDispute(id);
            })
        );
    }

    hasDispute(id: number): Observable<boolean> {
        return this.store
            .select(fromStore.getDisputesEntities)
            .pipe(
                map((entities: { [key: number]: Dispute }) => !!entities[id]),
                take(1)
            );
    }

    checkStore(): Observable<boolean> {
        return this.store.select(fromStore.getDisputesLoaded)
            .pipe(
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
