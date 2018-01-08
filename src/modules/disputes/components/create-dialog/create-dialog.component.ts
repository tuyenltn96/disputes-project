import { Component, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Dispute } from '../../models/dispute.model';

@Component({
    templateUrl: './create-dialog.component.html',
    styleUrls: ['./create-dialog.component.scss']
})

export class CreateDialogComponent {

    dispute: Dispute = {};

    constructor(
        public dialogRef: MatDialogRef<CreateDialogComponent>) { }
    onSubmit() {
        this.dialogRef.close(this.dispute);
    }
}
