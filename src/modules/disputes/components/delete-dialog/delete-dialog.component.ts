import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Dispute } from '../../models/dispute.model';


@Component({
    templateUrl: './delete-dialog.component.html',
    styleUrls: ['delete-dialog.component.scss']
})

export class DeleteDialogComponent {

    constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public dispute: Dispute) { }

}


