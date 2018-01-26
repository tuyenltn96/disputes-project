import { Action } from '@ngrx/store';
// import { Update } from '@ngrx/entity';

import { Issue } from '../../models/issue.model';

export const LOAD_ISSUES = '[disputes] Load Issues';
export const LOAD_ISSUES_FAIL = '[disputes] Load Issues Fail';
export const LOAD_ISSUES_SUCCESS = '[disputes] Load Issues Success';

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

export const REMOVE_ISSUE = '[disputes] Remove Issue';
export const REMOVE_ISSUE_FAIL = '[disputes] Remove Issue Fail';
export const REMOVE_ISSUE_SUCCESS = '[disputes] Remove Issue Success';

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

export const CREATE_ISSUE = '[disputes] Create Issue';
export const CREATE_ISSUE_FAIL = '[disputes] Create Issue Fail';
export const CREATE_ISSUE_SUCCESS = '[disputes] Create Issue Success';

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

export const UPDATE_ISSUE = '[disputes] Update Issue';
export const UPDATE_ISSUE_FAIL = '[disputes] Update Issue Fail';
export const UPDATE_ISSUE_SUCCESS = '[disputes] Update Issue Success';

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
