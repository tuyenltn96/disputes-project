import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ChangeDetectionStrategy } from '@angular/core';

import { Issue } from '../../models/issue.model';
import { IssueEditDialogComponent } from '../issue-edit-dialog/issue-edit-dialog.component';
import { ConfirmDialogComponent } from '../../../shared/components';

@Component({
    selector: 'app-issues-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './issues-item.component.html',
    styleUrls: ['./issues-item.component.scss']
})
export class IssuesItemComponent {
    show: false;
    editing = false;
    creating = false;

    @Input() issue: Issue;
    @Output() remove = new EventEmitter<any>();
    @Output() update = new EventEmitter<Issue>();
    @Output() setNotes = new EventEmitter<Issue>();
    @Output() changeNotes = new EventEmitter<any>();

    constructor(public dialog: MatDialog) { }

    openDialogDelete(): void {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            width: '330px',
            disableClose: true,
            data: 'Are you sure you want to delete this issue?'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === true) {
                this.remove.emit();
            }
        });
    }

    openDialogEdit(): void {
        const dialogRef = this.dialog.open(IssueEditDialogComponent, {
            width: '330px',
            disableClose: true,
            data: { ...this.issue }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result && (this.issue.name.trim() !== result.name.trim())) {
                this.update.emit(result);
            }
        });
    }

    onSaveNotes(notes: string) {
        if (notes.trim() !== this.issue.notes.trim()) {
            this.setNotes.emit({
                ...this.issue,
                notes: notes.trim()
            });
        } else {
            if (this.issue.notes !== '') {
                this.editing = !this.editing;
            } else {
                this.setNotes.emit({
                    ...this.issue
                });
            }
        }
    }

    onCancelNotes() {
        this.editing = !this.editing;
    }

    onCancelNotesCreating() {
        this.creating = !this.creating;
    }

    onRemoveNotesClicked(): void {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            width: '330px',
            disableClose: true,
            data: 'Are you sure you want to delete this note?'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === true) {
                this.setNotes.emit({
                    ...this.issue,
                    notes: ''
                });
            }
        });
    }

    OnChangeNote() {
        this.changeNotes.emit(this.issue.id);
    }
}
