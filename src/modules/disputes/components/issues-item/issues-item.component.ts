import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Issue } from '../../models/issue.model';
import { ChangeDetectionStrategy } from '@angular/core';

import * as fromComponent from '../../components';


@Component({
    selector: 'app-issues-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './issues-item.component.html',
    styleUrls: ['./issues-item.component.scss']
})
export class IssuesItemComponent {
    creating: false;
    editting: false;
    notes: string;

    @Input() issue: Issue;
    @Output() remove = new EventEmitter<any>();
    @Output() update = new EventEmitter<Issue>();
    @Output() setNotes = new EventEmitter<Issue>();


    constructor(public dialog: MatDialog) { }

    openDialogDelete(): void {
        const dialogRef = this.dialog.open(fromComponent.IssueDeleteDialogComponent, {
            width: '330px',
            disableClose: true,
            data: { ...this.issue }

        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === true) {
                this.remove.emit();
            }
        });
    }

    openDialogEdit(): void {
        const dialogRef = this.dialog.open(fromComponent.IssueEditDialogComponent, {
            width: '330px',
            disableClose: true,
            data: { ...this.issue }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.update.emit(result);
            }
        });
    }
    onSaveNotes(notes: string) {
        this.setNotes.emit({
            ...this.issue,
            notes: notes
        });
    }
    onRemoveNotesClicked() {
        this.setNotes.emit({
            ...this.issue,
            notes: ''
        });
    }

}
