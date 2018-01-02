import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Dispute } from '../../models/dispute.model';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'disputes-list',
    templateUrl: './disputes-list.component.html',
    styleUrls: ['./disputes-list.component.scss']
})
export class DisputesListComponent {

    @Input() disputes: Dispute;

    constructor(public dialog: MatDialog) { }

    openDialogDelete(): void {
        const dialogRef = this.dialog.open(DeleteDialogComponent, {
            width: '280px',
            data: this.disputes
        });
    }

    openDialogEdit(): void {
        const dialogRef = this.dialog.open(EditDialogComponent, {
            width: '280px',
            data: this.disputes
        });
    }
}


