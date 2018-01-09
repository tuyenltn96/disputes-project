import {CreateDialogComponent} from './create-dialog/create-dialog.component';
import { IssuesItemComponent } from './issues-item/issues-item.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

export const components: Array<any> = [
    IssuesItemComponent,
    EditDialogComponent,
    CreateDialogComponent,
    DeleteDialogComponent
];

export * from './issues-item/issues-item.component';
export * from './edit-dialog/edit-dialog.component';
export * from './create-dialog/create-dialog.component';
export * from './delete-dialog/delete-dialog.component';
