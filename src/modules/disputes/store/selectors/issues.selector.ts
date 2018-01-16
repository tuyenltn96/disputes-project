import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../app/_store';
import * as fromFeature from '../reducers';
import * as fromIssues from '../reducers/issues.reducer';

import { Issue } from '../../models/issue.model';

export const getIssueState = createSelector(
    fromFeature.getDisputesState,
    (state: fromFeature.DisputesState) => state.issues
);

export const getIssuesEntities = createSelector(
    getIssueState,
    fromIssues.getIssuesEntities
);

export const getAllIssues = createSelector(
    getIssuesEntities,
    (entities) => {
        return Object.keys(entities).map(id => entities[id]);
    }
);

export const getIssuesByDisputeId = createSelector(
    getAllIssues,
    fromRoot.getRouterState,
    (issues, router) => issues.filter((issueItem) => issueItem.idDispute === router.state.params.id)
);

export const getIssuesLoaded = createSelector(
    getIssueState,
    fromIssues.getIssuesLoaded
);

export const getIssuesLoading = createSelector(
    getIssueState,
    fromIssues.getIssuesLoading
);
