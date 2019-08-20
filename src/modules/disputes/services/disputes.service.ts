import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Dispute } from '../../disputes/models/dispute.model';

@Injectable()
export class DisputesService {
    constructor(private http: HttpClient) { }
    getDisputes(): Observable<Dispute[]> {
        return this.http
            .get<Dispute[]>(`http://localhost:3000/disputes`)
            .pipe(catchError((error: any) => Observable.throw(error.json())));
    }
    createDispute(payload: Dispute): Observable<Dispute> {
        return this.http
            .post<Dispute>(`http://localhost:3000/disputes`, payload)
            .pipe(catchError((error: any) => Observable.throw(error.json())));

    }
    updateDispute(payload: Dispute): Observable<Dispute> {
        return this.http
            .put<Dispute>(`http://localhost:3000/dispute/${payload.id}`, payload)
            .pipe(catchError((error: any) => Observable.throw(error.json())));

    }
    removeDispute(payload: Dispute): Observable<Dispute> {
        return this.http
            .delete<any>(`http://localhost:3000/dispute/${payload.id}`)
            .pipe(catchError((error: any) => Observable.throw(error.json())));
    }

}
