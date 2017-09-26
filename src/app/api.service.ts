import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

// TODO(carolynz): decide if I should initially set this.
export const DEFAULT_ENDPOINT = '//tutorial-179815.appspot.com';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  // TODO(carolynz): check url format also check there is no slash at the end.
  setApiUrl(url: string) {
    // Remove previous url.
    localStorage.removeItem('apiUrl');
    localStorage.setItem('apiUrl', url);
  }

  getApiUrl(): string {
    return localStorage.getItem('apiUrl') || DEFAULT_ENDPOINT;
  }

  list(): Observable<BeverageData[]> {
    return this.http.get(`${this.getApiUrl()}/list`);
  }

  addOrUpdate(beverage: BeverageData): Promise<void> {
    return this.http
        .get(`${this.getApiUrl()}/put?name=${beverage.name}&value=${beverage.value}`)
        .toPromise()
        .then(res => res)
        .catch(err => err);
  }
}

export interface BeverageData {
  name: string;
  value: number;
}

