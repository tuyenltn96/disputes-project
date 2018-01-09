import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStoreIssue from '../../store';
import { Issue } from '../../models/issue.model';
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
  constructor(private store: Store<fromStoreIssue.IssuesState>, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params  => {
     const disputeId = params['id'];
      this.store.dispatch(new fromStoreIssue.LoadIssues(disputeId));
    });
    this.issue$ = this.store.select(fromStoreIssue.getIssuesByDisputeId);
  }


}
