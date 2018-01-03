import { Action } from '@ngrx/store';

import { Dispute } from '../../models/dispute.model';

export const LOAD_DISPUTES = '[disputes] Load Disputes';
export const LOAD_DISPUTES_FAIL = '[disputes] Load Disputes Fail';
export const LOAD_DISPUTES_SUCCESS = '[disputes] Load Disputes Success';

export class LoadDisputes implements Action {
    readonly type = LOAD_DISPUTES;
}
export class LoadDisputesFail implements Action {
    readonly type = LOAD_DISPUTES_FAIL;
    constructor(public payload: any) { }
}

export class LoadDisputesSuccess implements Action {
    readonly type = LOAD_DISPUTES_SUCCESS;
    constructor(public payload: Dispute[]) { }
}


export type DisputesAction =
    | LoadDisputes
    | LoadDisputesFail
    | LoadDisputesSuccess;