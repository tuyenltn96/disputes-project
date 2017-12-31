import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'dispute-delete',
    templateUrl: './dispute-delete.component.html',
    styleUrls: ['./dispute-delete.component.scss']
})

// tslint:disable-next-line:component-class-suffix
export class DisputeDeleteComponent {

    constructor(
        public dialogRef: MatDialogRef<DisputeDeleteComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
