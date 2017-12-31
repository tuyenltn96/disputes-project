import { Component, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Dispute } from '../../models/dispute.model';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'dispute-edit',
    templateUrl: './dispute-edit.component.html',
    styleUrls: ['./dispute-edit.component.scss']
})

// tslint:disable-next-line:component-class-suffix
export class DisputeEditComponent {

    // @Input() data: Dispute;

    constructor(
        public dialogRef: MatDialogRef<DisputeEditComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
