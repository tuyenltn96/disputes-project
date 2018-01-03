import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as fromRoot from '../../../app/_store';
import * as disputeActions from '../actions/disputes.action';
import * as fromServices from '../../services';

@Injectable()
export class DisputesEffects {
    constructor(
        private action$: Actions,
        private disputeService: fromServices.DisputesService
    ) { }
    @Effect()
    loadDisputes$ = this.action$
        .ofType(disputeActions.LOAD_DISPUTES)
        .pipe(
        switchMap(() => {
            return this.disputeService
                .getDisputes()
                .pipe(
                map(disputes => new disputeActions.LoadDisputesSuccess(disputes)),
                catchError(error => of(new disputeActions.LoadDisputesFail(error)))
                );
        })
        );
}