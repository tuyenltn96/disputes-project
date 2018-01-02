import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    templateUrl: './delete-dialog.component.html',
    styleUrls: ['./delete-dialog.component.scss']
})

export class DeleteDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<DeleteDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
