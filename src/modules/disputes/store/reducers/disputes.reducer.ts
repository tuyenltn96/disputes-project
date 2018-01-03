import * as fromDisputes from '../actions/disputes.action';
import { Dispute } from '../../models/dispute.model';

export interface State {
    entities: { [id: string]: Dispute };
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
            const disputes = action.payload;

            const entities = disputes.reduce(
                (disputeEntities: { [id: string]: Dispute }, dispute: Dispute) => {
                    return {
                        ...disputeEntities,
                        [dispute.id]: dispute
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
        case fromDisputes.LOAD_DISPUTES_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }
    }
}

export const getDisputesEntities = (state: State) => state.entities;
export const getDisputesLoaded = (state: State) => state.loaded;
export const getDisputesLoading = (state: State) => state.loading;