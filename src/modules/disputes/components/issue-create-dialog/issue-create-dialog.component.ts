import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { Issue } from '../../models/issue.model';

@Component({
    selector: 'app-issue-create-dialog',
    templateUrl: './issue-create-dialog.component.html',
    styleUrls: ['./issue-create-dialog.component.scss']
})
export class IssueCreateDialogComponent {

    issue: Issue = {};

    constructor(
        public dialogRef: MatDialogRef<IssueCreateDialogComponent>) { }
    onSubmit() {
        this.dialogRef.close(this.issue);
    }
}
