import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dispute } from '../models/dispute.model';

@Injectable()
export class DisputesService {

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get(`http://localhost:3000/disputes`);
  }
}
