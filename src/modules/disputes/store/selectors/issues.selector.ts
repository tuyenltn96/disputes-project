import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../app/_store';
import * as fromFeature from '../reducers';
import * as fromIssues from '../reducers/issues.reducer';

import { Issue } from '../../models/issue.model';

export const getIssueState = createSelector(
    fromFeature.getDisputesState,
    (state: fromFeature.DisputesState) => state.issues
);
export const {
    selectIds: selectIssueIds,
    selectEntities: selectIssueEntities,
    selectAll: selectAllIssues,
    selectTotal: selectIssueTotal
} = fromIssues.adapter.getSelectors(getIssueState);

export const getIssuesByDisputeId = createSelector(
    selectAllIssues,
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
