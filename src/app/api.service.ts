import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  apiUrl = '//tutorial-179815.appspot.com';

  constructor(private http: Http) {}

  setApiUrl(url: string) {
    // TODO(carolynz): check url format also check there is no slash at the end.
    this.apiUrl = url;
  }

  list(): Observable<BeverageData[]> {
    return this.http.get(`${this.apiUrl}/list`).map(res => res.json());
  }

  // Add or replace: /put?name=test&value=100.
  addOrUpdate(beverage: BeverageData) {
    return this.http.put(`${this.apiUrl}/put`, beverage).map(res => res.json());
  }
}

export interface BeverageData {
  name: string;
  value: number;
}

