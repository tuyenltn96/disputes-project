import { Component, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DisputeDeleteComponent } from '../dispute-delete/dispute-delete.component';
import { DisputeEditComponent } from '../dispute-edit/dispute-edit.component';
import { Dispute } from '../../models/dispute.model';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'disputes-list',
    templateUrl: './disputes-list.component.html',
    styleUrls: ['./disputes-list.component.scss']
})
export class DisputesListComponent  {

    // @Output() data = new EventEmitter<Dispute>();

    public items: Dispute[] = [
        { id: '1', name: 'Item 1', date: '24/12/2017' },
        { id: '2', name: 'Item 2', date: '15/02/2017' },
        { id: '3', name: 'Item 3', date: '20/01/2017' }
    ];

    constructor(public dialog: MatDialog) {}

    openDialogDelete(): void {
        const dialogRef = this.dialog.open(DisputeDeleteComponent, {
            width: '280px',
            data: this.items
        });
    }

    openDialogEdit(): void {
        const dialogRef = this.dialog.open(DisputeEditComponent, {
            width: '280px',
            data: this.items
        });
    }
}

// export const DATA: Dispute[] = [
//         { id: '1', name: 'Item 1', date: '24/12/2017' },
//         { id: '2', name: 'Item 2', date: '15/02/2017' },
//         { id: '3', name: 'Item 3', date: '20/01/2017' }
// ];

