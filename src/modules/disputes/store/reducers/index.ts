import {
    ActionReducerMap,
    createFeatureSelector
} from '@ngrx/store';
import * as fromDisputes from './disputes.reducer';

export interface DisputesState {
    disputes: fromDisputes.State;
}

export const reducers: ActionReducerMap<DisputesState> = {
    disputes: fromDisputes.reducer,
};
export const getDisputesState = createFeatureSelector<DisputesState>(
    'disputes'
);
