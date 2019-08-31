import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../app/_store';
import * as fromFeature from '../reducers';
import * as fromDisputes from '../reducers/disputes.reducer';

import { Dispute } from '../../models/dispute.model';


export const getDisputeState = createSelector(
    fromFeature.getDisputesState,
    (state: fromFeature.DisputesState) => state.disputes
);


export const {
    selectIds: selectDisputeIds,
    selectEntities: selectDisputeEntities,
    selectAll: selectAllDisputes,
    selectTotal: selectDisputeTotal
} = fromDisputes.adapter.getSelectors(getDisputeState);


export const getDisputesLoaded = createSelector(
    getDisputeState,
    fromDisputes.getDisputesLoaded
);
export const getDisputesLoading = createSelector(
    getDisputeState,
    fromDisputes.getDisputesLoading
);

export const getSelectedDispute = createSelector(
    selectDisputeEntities,
    fromRoot.getRouterState,
    (entilies, router): Dispute => {
        return router.state && entilies[router.state.params.id];
    }
);
