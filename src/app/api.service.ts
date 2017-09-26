import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export const DEFAULT_ENDPOINT = '//tutorial-179815.appspot.com';

@Injectable()
export class ApiService {
  private apiUrl: string = DEFAULT_ENDPOINT;

  constructor(private http: Http) {}

  // TODO(carolynz): add local storage.
  setApiUrl(url: string) {
    // TODO(carolynz): check url format also check there is no slash at the end.
    this.apiUrl = url;
  }

  getApiUrl(): string {
    return this.apiUrl;
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

