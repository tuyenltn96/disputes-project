import { Action } from '@ngrx/store';

import { Issue } from '../../../issues/models/issue.model';
import { Dispute } from '../../../disputes/models/dispute.model';

export const LOAD_ISSUES = '[issues] Load Issues';
export const LOAD_ISSUES_FAIL = '[issues] Load Issues Fail';
export const LOAD_ISSUES_SUCCESS = '[issues] Load Issues Success';

export class LoadIssues implements Action {
    readonly type = LOAD_ISSUES;
    constructor(public payload: string) { }
}
export class LoadIssuesFail implements Action {
    readonly type = LOAD_ISSUES_FAIL;
    constructor(public payload: any) { }
}

export class LoadIssuesSuccess implements Action {
    readonly type = LOAD_ISSUES_SUCCESS;
    constructor(public payload: Issue[]) { }
}

export const REMOVE_ISSUE = '[issues] Remove Issue';
export const REMOVE_ISSUE_FAIL = '[issues] Remove Issue Fail';
export const REMOVE_ISSUE_SUCCESS = '[issues] Remove Issue Success';

export class RemoveIssue implements Action {
    readonly type = REMOVE_ISSUE;
    constructor(public payload: Issue) { }
}
export class RemoveIssueFail implements Action {
    readonly type = REMOVE_ISSUE_FAIL;
    constructor(public payload: any) { }
}
export class RemoveIssueSuccess implements Action {
    readonly type = REMOVE_ISSUE_SUCCESS;
    constructor(public payload: Issue) { }
}

export const CREATE_ISSUE = '[issues] Create Issue';
export const CREATE_ISSUE_FAIL = '[issues] Create Issue Fail';
export const CREATE_ISSUE_SUCCESS = '[issues] Create Issue Success';

export class CreateIssue implements Action {
    readonly type = CREATE_ISSUE;
    constructor(public payload: Issue) { }
}
export class CreateIssueFail implements Action {
    readonly type = CREATE_ISSUE_FAIL;
    constructor(public payload: any) { }
}

export class CreateIssueSuccess implements Action {
    readonly type = CREATE_ISSUE_SUCCESS;
    constructor(public payload: Issue) { }
}

export const UPDATE_ISSUE = '[issues] Update Issue';
export const UPDATE_ISSUE_FAIL = '[issues] Update Issue Fail';
export const UPDATE_ISSUE_SUCCESS = '[issues] Update Issue Success';

export class UpdateIssue implements Action {
 readonly type = UPDATE_ISSUE;
 constructor(public payload: Issue) { }
}

export class UpdateIssueFail implements Action {
 readonly type = UPDATE_ISSUE_FAIL;
 constructor(public payload: any) { }
}

export class UpdateIssueSuccess implements Action {
 readonly type = UPDATE_ISSUE_SUCCESS;
 constructor(public payload: Issue) { }
}

export type IssuesAction =
    | LoadIssues
    | LoadIssuesFail
    | LoadIssuesSuccess
    | RemoveIssue
    | RemoveIssueFail
    | RemoveIssueSuccess
    | UpdateIssue
    | UpdateIssueFail
    | UpdateIssueSuccess
    | CreateIssue
    | CreateIssueFail
    | CreateIssueSuccess;
