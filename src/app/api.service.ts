import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

export const DEFAULT_ENDPOINT = '//tutorial-179815.appspot.com';

@Injectable()
export class ApiService {
  private apiUrl: string = DEFAULT_ENDPOINT;

  constructor(private http: HttpClient) {}

  // TODO(carolynz): add local storage.
  setApiUrl(url: string) {
    // TODO(carolynz): check url format also check there is no slash at the end.
    this.apiUrl = url;
  }

  getApiUrl(): string {
    return this.apiUrl;
  }

  list(): Observable<BeverageData[]> {
    return this.http.get(`${this.apiUrl}/list`);
  }

  addOrUpdate(beverage: BeverageData): Promise<void> {
    return this.http
        .get(`${this.apiUrl}/put?name=${beverage.name}&value=${beverage.value}`)
        .toPromise()
        .then(res => res)
        .catch(err => err);
  }
}

export interface BeverageData {
  name: string;
  value: number;
}

