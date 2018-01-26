import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as fromIssuesAction from '../actions/issues.action';
import { Issue } from '../../models/issue.model';

export interface State extends EntityState<Issue> {
    selectedIssueId: string | null;
    loaded: boolean;
    loading: boolean;
}

export const adapter: EntityAdapter<Issue> = createEntityAdapter<Issue>();

export const initialState: State = adapter.getInitialState({
    selectedIssueId: null,
    loaded: false,
    loading: false
});

export function reducer(
    state = initialState,
    action: fromIssuesAction.IssuesAction
): State {
    switch (action.type) {
        case fromIssuesAction.LOAD_ISSUES: {
            return {
                ...state,
                loading: true,
            };
        }
        case fromIssuesAction.LOAD_ISSUES_SUCCESS: {
            return adapter.addAll(action.payload, {
                ...state,
                loaded: true,
                loading: false
            });
        }
        case fromIssuesAction.LOAD_ISSUES_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }

        case fromIssuesAction.REMOVE_ISSUE_SUCCESS: {
            return adapter.removeOne(action.payload.id, state);
        }
        case fromIssuesAction.CREATE_ISSUE_SUCCESS: {
            return adapter.addOne(action.payload, state);
        }
        case fromIssuesAction.UPDATE_ISSUE_SUCCESS: {
            const update = {
                id: action.payload.id,
                changes: action.payload
            };
            return adapter.updateOne(update, state);
        }

        default: {
            return state;
        }
    }
}

export const getIssuesLoaded = (state: State) => state.loaded;
export const getIssuesLoading = (state: State) => state.loading;
export const getSelectedIssueId = (state: State) => state.selectedIssueId;



