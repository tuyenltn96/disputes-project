import { Component} from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

import * as fromStore from '../../store';
import * as fromComponent from '../../components';

@Component({
  selector: 'app-issues-empty',
  templateUrl: './issues-empty.component.html',
  styleUrls: ['./issues-empty.component.scss']
})
export class IssuesEmptyComponent {

  constructor(
    private dialog: MatDialog,
    private store: Store<fromStore.DisputesState>,
    private route: ActivatedRoute) { }

  openDialogCreate(): void {
    const dialogRef = this.dialog.open(fromComponent.IssueCreateDialogComponent, {
      width: '330px',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.route.params.subscribe(params => {
          const disputeId = params['id'];
          this.store.dispatch(new fromStore.CreateIssue(
            {
              idDispute: disputeId,
              name: result.name
            }
          ));
        });
      }
    });
  }

}
