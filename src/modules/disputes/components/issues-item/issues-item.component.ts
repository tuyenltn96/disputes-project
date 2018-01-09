import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Issue } from '../../models/issue.model';
import { IssueEditDialogComponent } from '../issue-edit-dialog/issue-edit-dialog.component';
import { IssueDeleteDialogComponent } from '../issue-delete-dialog/issue-delete-dialog.component';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-issues-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './issues-item.component.html',
    styleUrls: ['./issues-item.component.scss']
})
export class IssuesItemComponent {

    @Input() issue: Issue[];
    @Output() remove = new EventEmitter<any>();
    @Output() update = new EventEmitter<Issue>();

    constructor(public dialog: MatDialog) { }

    openDialogDelete(): void {
        const dialogRef = this.dialog.open(IssueDeleteDialogComponent, {
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
        const dialogRef = this.dialog.open(IssueEditDialogComponent, {
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

}
