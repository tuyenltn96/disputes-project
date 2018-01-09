import {
    ActionReducerMap,
    createFeatureSelector
} from '@ngrx/store';
import * as fromIssues from './issues.reducer';

export interface IssuesState {
    issues: fromIssues.State;
}

export const reducers: ActionReducerMap<IssuesState> = {
    issues: fromIssues.reducer,
};
export const getIssuesState = createFeatureSelector<IssuesState>(
    'issues'
);
