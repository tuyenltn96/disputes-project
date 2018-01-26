import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';

import { Dispute } from '../../models/dispute.model';
import * as fromStore from '../../store';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
    selector: 'app-dispute-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dispute-item.component.html',
    styleUrls: ['./dispute-item.component.scss']
})
export class DisputeItemComponent {
    @Input() dispute: Dispute[];
    @Output() remove = new EventEmitter<any>();
    @Output() update = new EventEmitter<Dispute>();

    constructor(public dialog: MatDialog, private store: Store<fromStore.DisputesState>) { }
    openDialogDelete(): void {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            width: '330px',
            disableClose: true,
            data: 'Are you sure you want to delete this dispute?'


        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === true) {
                this.remove.emit();
            }
        });
    }

    openDialogEdit(): void {
        const dialogRef = this.dialog.open(EditDialogComponent, {
            width: '330px',
            disableClose: true,
            data: { ...this.dispute }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.update.emit(result);
            }
        });
    }
}

