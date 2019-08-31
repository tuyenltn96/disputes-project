import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { ActivatedRoute } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';

import * as fromStoreIssue from '../../store';
import * as fromComponent from '../../components';

import { Issue } from '../../models/issue.model';
import { Dispute } from '../../models/dispute.model';

@Component({
  selector: 'app-issues',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {
  issue$: Observable<Issue[]>;
  selectedDispute$: Observable<Dispute>;
  id: any;
  @Input() dispute: Dispute[];

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(private dialog: MatDialog,
    private store: Store<fromStoreIssue.DisputesState>, private route: ActivatedRoute,
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const disputeId = params['id'];
      this.store.dispatch(new fromStoreIssue.LoadIssues(disputeId));
    });
    this.issue$ = this.store.select(fromStoreIssue.getIssuesByDisputeId);
    this.selectedDispute$ = this.store.select(fromStoreIssue.getSelectedDispute);
  }
  openDialogCreate(): void {
    const dialogRef = this.dialog.open(fromComponent.IssueCreateDialogComponent, {
      width: '330px',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.route.params.subscribe(params => {
          const disputeId = params['id'];
          this.store.dispatch(new fromStoreIssue.CreateIssue(
            {
              idDispute: disputeId,
              notes: '',
              name: result.name
            }
          ));
        });
      }
    });
  }
  onRemove(issue: Issue) {
    this.store.dispatch(new fromStoreIssue.RemoveIssue(issue));

  }
  onUpdate(issue: Issue) {
    this.store.dispatch(new fromStoreIssue.UpdateIssue(issue));
  }

  onSaveNotes(issue: Issue) {
    this.store.dispatch(new fromStoreIssue.UpdateIssue(issue));
  }
}
