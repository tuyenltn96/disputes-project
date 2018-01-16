import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';

import * as fromStore from '../../store';
import { IssueCreateDialogComponent } from '../../components/issue-create-dialog/issue-create-dialog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-issues-empty',
  templateUrl: './issues-empty.component.html',
  styleUrls: ['./issues-empty.component.scss']
})
export class IssuesEmptyComponent implements OnInit {

  constructor(private dialog: MatDialog, private store: Store<fromStore.DisputesState>,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }
  openDialogCreate(): void {
    const dialogRef = this.dialog.open(IssueCreateDialogComponent, {
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
