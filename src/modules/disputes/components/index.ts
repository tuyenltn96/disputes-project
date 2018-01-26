import { DisputeItemComponent } from './dispute-item/dispute-item.component';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';
import { IssuesItemComponent } from './issues-item/issues-item.component';
import { IssueEditDialogComponent } from './issue-edit-dialog/issue-edit-dialog.component';
import { IssueCreateDialogComponent } from './issue-create-dialog/issue-create-dialog.component';
import { SidenavIssueComponent } from './sidenav-issue/sidenav-issue.component';
import { DisputesEmptyComponent } from './disputes-empty/disputes-empty.component';
import { IssuesEmptyComponent } from './issues-empty/issues-empty.component';
import { IssueNotesFormComponent } from './issue-notes-form/issue-notes-form.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

export const components: Array<any> = [
    DisputeItemComponent,
    EditDialogComponent,
    CreateDialogComponent,
    IssuesItemComponent,
    IssueEditDialogComponent,
    IssueCreateDialogComponent,
    SidenavIssueComponent,
    DisputesEmptyComponent,
    IssuesEmptyComponent,
    IssueNotesFormComponent
];

export const entryComponents: Array<any> = [
    EditDialogComponent,
    CreateDialogComponent,
    IssueEditDialogComponent,
    IssueCreateDialogComponent
];

export * from './dispute-item/dispute-item.component';
export * from './edit-dialog/edit-dialog.component';
export * from './create-dialog/create-dialog.component';
export * from './issues-item/issues-item.component';
export * from './issue-edit-dialog/issue-edit-dialog.component';
export * from './issue-create-dialog/issue-create-dialog.component';
export * from './sidenav-issue/sidenav-issue.component';
export * from './disputes-empty/disputes-empty.component';
export * from './issues-empty/issues-empty.component';
export * from './issue-notes-form/issue-notes-form.component';
