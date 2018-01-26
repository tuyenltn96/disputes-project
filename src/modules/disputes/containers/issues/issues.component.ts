import { Component, OnInit, OnDestroy, Input, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MatDialog, MatSidenav } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { ActivatedRoute } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';

import * as fromStoreIssue from '../../store';
import * as fromComponent from '../../components';

import { Issue } from '../../models/issue.model';
import { Dispute } from '../../models/dispute.model';
import { CanComponentDeactivate } from '../../services';
import { ConfirmDialogComponent } from '../../../shared/components';


@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit, OnDestroy, CanComponentDeactivate {
  @Input() dispute: Dispute[];
  @ViewChild('sidenav')
  private sidenav: MatSidenav;
  private _mobileQueryListener: () => void;

  mobileQuery: MediaQueryList;
  issue$: Observable<Issue[]>;
  loading$: any;
  selectedDispute$: Observable<Dispute>;
  formDirty = {};

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
      this.sidenav.toggle();
    });
    this.route.params.subscribe(params => {
      const disputeId = params['id'];
      this.store.dispatch(new fromStoreIssue.LoadIssues(disputeId));
    });
    this.issue$ = this.store.select(fromStoreIssue.getIssuesByDisputeId);
    this.loading$ = this.store.select(fromStoreIssue.getIssuesLoading);
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
    delete this.formDirty[issue.id];
    this.store.dispatch(new fromStoreIssue.UpdateIssue(issue));
    console.log('xoa di 1 id');
  }

  onChangeNotes(issueId: string) {
    this.formDirty[issueId] = issueId;
    console.log(this.formDirty);
  }

  canDeactivate() {
    if (Object.keys(this.formDirty).length > 0) {
      return confirm('roi khoi k ?');
    } else {
      return true;
    }
  }
}
