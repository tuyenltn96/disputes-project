import { Component,  Output, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef, OnDestroy, EventEmitter } from '@angular/core';
import { MatDialog, MatSidenav } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';

import * as fromStoreIssue from '../../store';
import { Issue } from '../../models/issue.model';
import { Store } from '@ngrx/store';
import { Dispute } from '../../models/dispute.model';
import { IssueCreateDialogComponent } from '../../components/issue-create-dialog/issue-create-dialog.component';
import { CanComponentDeactivate } from '../../guards/can-deactivate-guard.service';
import { ViewChild } from '@angular/core/';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit, OnDestroy, CanComponentDeactivate {

  issue$: Observable<Issue[]>;
  selectedDispute$: Observable<Dispute>;
  id: any;
  loading$: any;
  formDirty = {};
  mobileQuery: MediaQueryList;

  @ViewChild('drawer')
  private drawer: MatSidenav;
  private _mobileQueryListener: () => void;

  constructor(private dialog: MatDialog,
    private store: Store<fromStoreIssue.DisputesState>, private route: ActivatedRoute,
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.drawer.open();
    }, 300);
    this.route.params.subscribe(params => {
      const disputeId = params['id'];
      this.store.dispatch(new fromStoreIssue.LoadIssues(disputeId));
    });
    this.issue$ = this.store.select(fromStoreIssue.getIssuesByDisputeId);
    this.loading$ = this.store.select(fromStoreIssue.getIssuesLoading);
    this.selectedDispute$ = this.store.select(fromStoreIssue.getSelectedDispute);
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
    delete this.formDirty[issue.id];
    this.store.dispatch(new fromStoreIssue.UpdateIssue(issue));
  }

  onChangeNotes(issueId: string) {
    this.formDirty[issueId] = issueId;
  }

  canDeactivate() {
    if (Object.keys(this.formDirty).length > 0) {
      return confirm('Do you want to leave this site?\nChanges you made may not be saved.');
    }
    return true;
  }

}
