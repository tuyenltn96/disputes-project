import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Dispute } from '../../models/dispute.model';

@Component({
    templateUrl: './edit-dialog.component.html',
    styleUrls: ['./edit-dialog.component.scss']
})

export class EditDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<EditDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public dispute: Dispute) { }

    onSubmit() {
        this.dialogRef.close(this.dispute);
    }
}
