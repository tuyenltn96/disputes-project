import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Issue } from '../../models/issue.model';

@Component({
  selector: 'app-issue-edit-dialog',
  templateUrl: './issue-edit-dialog.component.html',
  styleUrls: ['./issue-edit-dialog.component.scss']
})
export class IssueEditDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<IssueEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public issue: Issue) { }

onSubmit() {
    this.dialogRef.close(this.issue);
}

}
