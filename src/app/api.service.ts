import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

export const DEFAULT_ENDPOINT = '//tutorial-179815.appspot.com';

@Injectable()
export class ApiService {
  beverages: Observable<BeverageData[]>;

  constructor(private http: HttpClient) {
    // Initially set the url to the default endpoint.
    if (!this.getApiUrl()) {
      this.setApiUrl(DEFAULT_ENDPOINT);
    }
  }

  setApiUrl(url: string) {
    // Remove previous url.
    localStorage.removeItem('apiUrl');
    localStorage.setItem('apiUrl', url);
  }

  getApiUrl(): string {
    return localStorage.getItem('apiUrl');
  }

  list(): Observable<BeverageData[]> {
    return this.http.get(`${this.getApiUrl()}/list`);
  }

  addOrUpdate(beverage: BeverageData): Observable<{}> {
    const requestUrl =
      `${this.getApiUrl()}/put?name=${beverage.name}&value=${beverage.value}`;
    return this.http.get(requestUrl);
  }
}

export interface BeverageData {
  name: string;
  value: number;
}
