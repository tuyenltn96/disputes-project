import { Component, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Dispute } from '../../models/dispute.model';

@Component({
    templateUrl: './create-dialog.component.html',
    styleUrls: ['./create-dialog.component.scss']
})

export class CreateDialogComponent {

    // @Input() data1: Dispute;

    constructor(
        public dialogRef: MatDialogRef<CreateDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
