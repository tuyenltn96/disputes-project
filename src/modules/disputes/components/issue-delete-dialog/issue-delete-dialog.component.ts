import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Issue } from '../../models/issue.model';

@Component({
  selector: 'app-issue-delete-dialog',
  templateUrl: './issue-delete-dialog.component.html',
  styleUrls: ['./issue-delete-dialog.component.scss']
})
export class IssueDeleteDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<IssueDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public issue: Issue) { }

}
