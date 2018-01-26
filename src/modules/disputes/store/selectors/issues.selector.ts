import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../app/_store';
import * as fromFeature from '../reducers';
import * as fromIssues from '../reducers/issues.reducer';

import { Issue } from '../../models/issue.model';
import { getSelectedDisputeId } from './disputes.selector';
import { getSelectedDispute } from '../index';

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
    getSelectedDisputeId,
    (issues, id) => {
        return issues.filter((issueItem) => issueItem.idDispute === id);
    }
);

export const getIssuesLoaded = createSelector(
    getIssueState,
    fromIssues.getIssuesLoaded
);

export const getIssuesLoading = createSelector(
    getIssueState,
    fromIssues.getIssuesLoading
);
