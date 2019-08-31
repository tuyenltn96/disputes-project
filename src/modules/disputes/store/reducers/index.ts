import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromDisputes from './disputes.reducer';
import * as fromIssues from './issues.reducer';
import { adapter } from './disputes.reducer';

export interface DisputesState {
    disputes: fromDisputes.State;
    issues: fromIssues.State;
}

export const getDisputesState = createFeatureSelector<DisputesState>(
    'disputes'
);
export const reducers: ActionReducerMap<DisputesState> = {
    disputes: fromDisputes.reducer,
    issues: fromIssues.reducer
};


