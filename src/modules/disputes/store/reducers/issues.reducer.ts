import * as fromIssuesAction from '../actions/issues.action';
import { Issue } from '../../models/issue.model';

export interface State {
    entities: { [id: string]: Issue };
    loaded: boolean;
    loading: boolean;
}

export const initialState: State = {
    entities: {},
    loaded: false,
    loading: false
};
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
            const issues = action.payload;

            const entities = issues.reduce(
                (issueEntities: { [id: string]: Issue }, issue: Issue) => {
                    return {
                        ...issueEntities,
                        [issue.id]: issue
                    };
                },
                {
                    ...state.entities,
                }
            );
            return {
                ...state,
                loading: false,
                loaded: true,
                entities,
            };
        }
        case fromIssuesAction.LOAD_ISSUES_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }

        case fromIssuesAction.REMOVE_ISSUE_SUCCESS: {
            const issue = action.payload;
            const { [issue.id]: removed, ...entities } = state.entities;
            return {
                ...state,
                entities,
            };
        }
        case fromIssuesAction.CREATE_ISSUE_SUCCESS:
        case fromIssuesAction.UPDATE_ISSUE_SUCCESS: {
            const issue = action.payload;
            const entities = {
                ...state.entities,
                [issue.id]: issue
            };

            return {
                ...state,
                entities
            };
        }

        default: {
            return state;
        }
    }
}

export const getIssuesEntities = (state: State) => state.entities;
export const getIssuesLoaded = (state: State) => state.loaded;
export const getIssuesLoading = (state: State) => state.loading;


