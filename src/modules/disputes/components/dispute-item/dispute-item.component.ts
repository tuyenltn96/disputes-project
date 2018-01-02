import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Dispute } from '../../models/dispute.model';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'dispute-item',
    templateUrl: './dispute-item.component.html',
    styleUrls: ['./dispute-item.component.scss']
})
export class DisputeItemComponent {



    public dispute: Dispute = { id: '1', name: 'Item 1', date: '24/12/2017'};
    constructor(public dialog: MatDialog) { }

    openDialogDelete(): void {
        const dialogRef = this.dialog.open(DeleteDialogComponent, {
            width: '280px',
            data: {}
        });
    }

    openDialogEdit(): void {
        const dialogRef = this.dialog.open(EditDialogComponent, {
            width: '280px',
            data: {}
        });
    }
}

