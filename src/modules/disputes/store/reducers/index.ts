import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromDisputes from './disputes.reducer';
import * as fromIssues from './issues.reducer';

export interface DisputesState {
    disputes: fromDisputes.State;
    issues: fromIssues.State;
}

export const reducers: ActionReducerMap<DisputesState> = {
    disputes: fromDisputes.reducer,
    issues: fromIssues.reducer
};
export const getDisputesState = createFeatureSelector<DisputesState>(
    'disputes'
);
