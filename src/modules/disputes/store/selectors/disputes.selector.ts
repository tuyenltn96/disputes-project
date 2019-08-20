import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../app/_store';
import * as fromFeature from '../reducers';
import * as fromDisputes from '../reducers/disputes.reducer';

import { Dispute } from '../../models/dispute.model';

export const getDisputeState = createSelector(
    fromFeature.getDisputesState,
    (state: fromFeature.DisputesState) => state.disputes
);

export const getDisputesEntities = createSelector(
    getDisputeState,
    fromDisputes.getDisputesEntities
);

export const getSelectedDispute = createSelector(
    getDisputesEntities,
    fromRoot.getRouterState,
    (entilies, router): Dispute => {
        return router.state && entilies[router.state.params.disputeId];
    }
);

export const getAllDisputes = createSelector(
    getDisputesEntities,
    (entities) => {
        return Object.keys(entities).map(id => entities[id]);
    }
);

export const getDisputesLoaded = createSelector(
    getDisputeState,
    fromDisputes.getDisputesLoaded
);

export const getDisputesLoading = createSelector(
    getDisputeState,
    fromDisputes.getDisputesLoading
);
