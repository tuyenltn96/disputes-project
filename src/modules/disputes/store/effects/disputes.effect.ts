import { Injectable } from '@angular/core';

import { Effect, Actions, toPayload } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { map, switchMap, catchError } from 'rxjs/operators';

import { Action } from '@ngrx/store';

import * as fromRoot from '../../../app/_store';
import * as disputeActions from '../actions/disputes.action';
import * as fromServices from '../../services';
import * as fromComponents from '../../components';
import { Dispute } from '../../models/dispute.model';


@Injectable()
export class DisputesEffects {
    constructor(
        private actions$: Actions,
        private disputeService: fromServices.DisputesService
    ) { }
    @Effect()
    loadDisputes$ = this.actions$
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
    @Effect()
    createDispute$ = this.actions$.ofType(disputeActions.CREATE_DISPUTES).pipe(
        map((action: disputeActions.CreateDisputes) => action.payload),
        switchMap(disputes => {
            return this.disputeService
                .createDispute(disputes)
                .pipe(
                map(dispute => new disputeActions.CreateDisputesSuccess(dispute)),
                catchError(error => of(new disputeActions.CreateDisputesFail(error)))
                );
        })
    );
    @Effect()
    createDisputeSuccess$ = this.actions$
        .ofType(disputeActions.CREATE_DISPUTES_SUCCESS)
        .pipe(
        map((action: disputeActions.CreateDisputesSuccess) => action.payload),
        map(dispute => {
            return new fromRoot.Go({
                path: ['/disputes', dispute.id],
            });
        })
        );
    @Effect()
    removeDispute$ = this.actions$
        .ofType(disputeActions.REMOVE_DISPUTE)
        .pipe(
        map((action: disputeActions.RemoveDispute) => action.payload),
        switchMap(dispute => {
            return this.disputeService
                .removeDispute(dispute)
                .pipe(
                map(() => new disputeActions.RemoveDisputeSuccess(dispute)),
                catchError(error => of(new disputeActions.RemoveDisputeFail(error)))
                );
        })
        );

    @Effect()
    updateDispute$ = this.actions$
        .ofType(disputeActions.UPDATE_DISPUTE)
        .pipe(
        map((action: disputeActions.UpdateDispute) => action.payload),
        switchMap(dispute => {
            return this.disputeService
                .updateDispute(dispute)
                .pipe(
                map((res: Dispute) => new disputeActions.UpdateDisputeSuccess(res)),
                catchError(error => of(new disputeActions.UpdateDisputeFail(error)))
                );
        })
        );
}
