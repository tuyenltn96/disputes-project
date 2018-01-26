import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../app/_store';
import * as fromFeature from '../reducers';
import * as fromDisputes from '../reducers/disputes.reducer';

import { Dispute } from '../../models/dispute.model';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { adapter } from '../reducers/disputes.reducer';


export const getDisputeState = createSelector(
    fromFeature.getDisputesState,
    (state: fromFeature.DisputesState) => state.disputes
);


export const {
    selectIds: selectDisputeIds,
    selectEntities: selectDisputeEntities,
    selectAll: selectAllDisputes,
    selectTotal: selectDisputeTotal
} = adapter.getSelectors(getDisputeState);


export const getDisputesLoaded = createSelector(
    getDisputeState,
    fromDisputes.getDisputesLoaded
);
export const getDisputesLoading = createSelector(
    getDisputeState,
    fromDisputes.getDisputesLoading
);

export const getSelectedDisputeId = createSelector(
    getDisputeState,
    fromDisputes.getSelectedDisputeId
);

export const getSelectedDispute = createSelector(
    selectDisputeEntities,
    getSelectedDisputeId,
    (entilies, id): Dispute => {
        return entilies[id];
    }
);
