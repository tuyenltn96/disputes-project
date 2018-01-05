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

export const REMOVE_DISPUTE = '[Products] Remove Dispute';
export const REMOVE_DISPUTE_FAIL = '[Products] Remove Dispute Fail';
export const REMOVE_DISPUTE_SUCCESS = '[Products] Remove Dispute Success';

export class RemoveDispute implements Action {
    readonly type = REMOVE_DISPUTE;
    constructor(public payload: Dispute) { }
}
export class RemoveDisputeFail implements Action {
    readonly type = REMOVE_DISPUTE_FAIL;
    constructor(public payload: any) { }
}
export class RemoveDisputeSuccess implements Action {
    readonly type = REMOVE_DISPUTE_SUCCESS;
    constructor(public payload: Dispute) { }
}

export const CREATE_DISPUTES = '[disputes] Create Disputes';
export const CREATE_DISPUTES_FAIL = '[disputes] Create Disputes Fail';
export const CREATE_DISPUTES_SUCCESS = '[disputes] Create Disputes Success';

export class CreateDisputes implements Action {
    readonly type = CREATE_DISPUTES;
    constructor(public payload: Dispute) { }
}
export class CreateDisputesFail implements Action {
    readonly type = CREATE_DISPUTES_FAIL;
    constructor(public payload: any) { }
}

export class CreateDisputesSuccess implements Action {
    readonly type = CREATE_DISPUTES_SUCCESS;
    constructor(public payload: Dispute) { }
}

export const UPDATE_DISPUTE = '[disputes] Update Dispute';
export const UPDATE_DISPUTE_FAIL = '[disputes] Update Dispute Fail';
export const UPDATE_DISPUTE_SUCCESS = '[disputes] Update Dispute Success';

export class UpdateDispute implements Action {
 readonly type = UPDATE_DISPUTE;
 constructor(public payload: Dispute) { }
}

export class UpdateDisputeFail implements Action {
 readonly type = UPDATE_DISPUTE_FAIL;
 constructor(public payload: any) { }
}

export class UpdateDisputeSuccess implements Action {
 readonly type = UPDATE_DISPUTE_SUCCESS;
 constructor(public payload: Dispute) { }
}

export type DisputesAction =
    | LoadDisputes
    | LoadDisputesFail
    | LoadDisputesSuccess
    | RemoveDispute
    | RemoveDisputeFail
    | RemoveDisputeSuccess
    | UpdateDispute
    | UpdateDisputeFail
    | UpdateDisputeSuccess
    | CreateDisputes
    | CreateDisputesFail
    | CreateDisputesSuccess;
