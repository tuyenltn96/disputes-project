import { Injectable } from '@angular/core';

import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { map, switchMap, catchError } from 'rxjs/operators';


import * as fromRoot from '../../../app/_store';
import * as issueActions from '../actions/issues.action';
import * as fromServices from '../../services';
import * as fromComponents from '../../components';

@Injectable()
export class IssuesEffects {
    constructor(
        private actions$: Actions,
        private issueService: fromServices.IssuesService
    ) { }
    @Effect()
    loadIssues$ = this.actions$
        .ofType(issueActions.LOAD_ISSUES)
        .pipe(
        map((action: issueActions.LoadIssues) => action.payload),
        switchMap((payload) => {
            return this.issueService
                .getIssues(payload)
                .pipe(
                map(issues => new issueActions.LoadIssuesSuccess(issues)),
                catchError(error => of(new issueActions.LoadIssuesFail(error)))
                );
        })
        );
    @Effect()
    createIssue$ = this.actions$
    .ofType(issueActions.CREATE_ISSUE)
    .pipe(
        map((action: issueActions.CreateIssue) => action.payload),
        switchMap(issues => {
            return this.issueService
                .createIssue(issues)
                .pipe(
                map(issue => new issueActions.CreateIssueSuccess(issue)),
                catchError(error => of(new issueActions.CreateIssueFail(error)))
                );
        })
    );
    @Effect()
    createIssueSuccess$ = this.actions$
        .ofType(issueActions.CREATE_ISSUE_SUCCESS)
        .pipe(
        map((action: issueActions.CreateIssueSuccess) => action.payload),
        map(issue => {
            return new fromRoot.Go({
                path: ['/issues', issue.id],
            });
        })
        );
    @Effect()
    removeIssue$ = this.actions$
        .ofType(issueActions.REMOVE_ISSUE)
        .pipe(
        map((action: issueActions.RemoveIssue) => action.payload),
        switchMap(issue => {
            return this.issueService
                .removeIssue(issue)
                .pipe(
                map(() => new issueActions.RemoveIssueSuccess(issue)),
                catchError(error => of(new issueActions.RemoveIssueFail(error)))
                );
        })
        );

    @Effect()
    updateIssue$ = this.actions$
        .ofType(issueActions.UPDATE_ISSUE)
        .pipe(
        map((action: issueActions.UpdateIssue) => action.payload),
        switchMap(issue => {
            return this.issueService
                .updateIssue(issue)
                .pipe(
                map(issues => new issueActions.UpdateIssueSuccess(issues)),
                catchError(error => of(new issueActions.UpdateIssueFail(error)))
                );
        })
        );
}
