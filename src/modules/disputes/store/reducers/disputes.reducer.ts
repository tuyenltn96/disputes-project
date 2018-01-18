import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as fromDisputes from '../actions/disputes.action';
import { Dispute } from '../../models/dispute.model';

export interface State extends EntityState<Dispute> {
    selectedDisputeId: string | null;
    loaded: boolean;
    loading: boolean;
}

export const adapter: EntityAdapter<Dispute> = createEntityAdapter<Dispute>();

export const initialState: State = adapter.getInitialState({
    selectedDisputeId: null,
    loaded: false,
    loading: false
});

export function reducer(
    state = initialState,
    action: fromDisputes.DisputesAction
): State {
    switch (action.type) {
        case fromDisputes.LOAD_DISPUTES: {
            return {
                ...state,
                loading: true,
            };
        }
        case fromDisputes.LOAD_DISPUTES_SUCCESS: {
            return adapter.addAll(action.payload, {
                ...state,
                loaded: false,
                loading: true
            });
        }
        case fromDisputes.LOAD_DISPUTES_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }

        case fromDisputes.REMOVE_DISPUTE_SUCCESS: {
            return adapter.removeOne(action.payload.id, state);
        }

        case fromDisputes.CREATE_DISPUTES_SUCCESS: {
            return adapter.addOne(action.payload, state);
        }
        case fromDisputes.UPDATE_DISPUTE_SUCCESS: {
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

export const getDisputesLoaded = (state: State) => state.loaded;
export const getDisputesLoading = (state: State) => state.loading;
export const getSelectedDisputeId = (state: State) => state.selectedDisputeId;


