import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Issue } from '../../models/issue.model';
import { Store } from '@ngrx/store';
import * as fromStoreIssue from '../../store';
import { Dispute } from '../../models/dispute.model';
import { IssueCreateDialogComponent } from '../../components/issue-create-dialog/issue-create-dialog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-issues',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {

  issue$: Observable<Issue[]>;
  id: any;
  constructor(private dialog: MatDialog,
    private store: Store<fromStoreIssue.DisputesState>, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const disputeId = params['id'];
      this.store.dispatch(new fromStoreIssue.LoadIssues(disputeId));
    });
    this.issue$ = this.store.select(fromStoreIssue.getIssuesByDisputeId);
  }
  openDialogCreate(): void {
    const dialogRef = this.dialog.open(IssueCreateDialogComponent, {
      width: '330px',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(new fromStoreIssue.CreateIssue(
          {
            name: result.name
          }
        ));
      }
    });
  }
  onRemove(issue: Issue) {
    this.store.dispatch(new fromStoreIssue.RemoveIssue(issue));

  }
  onUpdate(issue: Issue) {
    this.store.dispatch(new fromStoreIssue.UpdateIssue(issue));
  }
}
