import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesComponent } from './containers/issues/issues.component';
import { CreateDialogComponent } from './components/create-dialog/create-dialog.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { IssuesItemComponent } from './components/issues-item/issues-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IssuesComponent, CreateDialogComponent, EditDialogComponent, DeleteDialogComponent, IssuesItemComponent]
})
export class IssuesModule { }
