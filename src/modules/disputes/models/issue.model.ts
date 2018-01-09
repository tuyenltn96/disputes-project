import { Dispute } from '../../disputes/models/dispute.model';

export interface Issue {
    id?: string;
    name?: string;
    idDispute?: Dispute;
}
