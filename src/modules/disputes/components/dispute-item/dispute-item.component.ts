import { Component, Inject, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Dispute } from '../../models/dispute.model';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'dispute-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dispute-item.component.html',
    styleUrls: ['./dispute-item.component.scss']
})
export class DisputeItemComponent {
    @Input() dispute: Dispute;

    constructor(public dialog: MatDialog) { }

    openDialogDelete(): void {
        const dialogRef = this.dialog.open(DeleteDialogComponent, {
            width: '280px',
            data: this.dispute
        });
    }

    openDialogEdit(): void {
        const dialogRef = this.dialog.open(EditDialogComponent, {
            width: '280px',
            data: this.dispute
        });
    }
}

