import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';

import * as fromStore from '../../store';
import * as fromComponent from '../../components';

@Component({
  selector: 'app-disputes-empty',
  templateUrl: './disputes-empty.component.html',
  styleUrls: ['./disputes-empty.component.scss']
})
export class DisputesEmptyComponent {

  constructor(private dialog: MatDialog, private store: Store<fromStore.DisputesState>) { }

  openDialogCreate(): void {
    const dialogRef = this.dialog.open(fromComponent.CreateDialogComponent, {
      width: '330px',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(new fromStore.CreateDisputes(
          {
            name: result.name,
            date: Date.now().toString()
          }
        ));
      }
    });
  }
}
