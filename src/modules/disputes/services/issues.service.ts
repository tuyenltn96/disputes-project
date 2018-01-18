import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Issue } from '../models/issue.model';

@Injectable()
export class IssuesService {
    constructor(private http: HttpClient) { }
    getIssues(disputeId: string): Observable<Issue[]> {
        return this.http
            .get<Issue[]>(`http://localhost:3000/issues?idDispute=${disputeId}`)
            .pipe(catchError((error: any) => Observable.throw(error.json())));
    }
    createIssue(payload: Issue): Observable<Issue> {
        return this.http
            .post<Issue>(`http://localhost:3000/issues?idDispute=${payload.idDispute}`, payload)
            .pipe(catchError((error: any) => Observable.throw(error.json())));

    }
    updateIssue(payload: Issue): Observable<Issue> {
        return this.http
            .put<Issue>(`http://localhost:3000/issues/${payload.id}`, payload)
            .pipe(catchError((error: any) => Observable.throw(error.json())));
    }
    removeIssue(payload: Issue): Observable<Issue> {
        return this.http
            .delete<Issue>(`http://localhost:3000/issues/${payload.id}`)
            .pipe(catchError((error: any) => Observable.throw(error.json())));
    }
}
