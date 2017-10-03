import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

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

  /**
   * Removes the previously stored apiUrl from the local storage and saves the
   * new url in local storage with a key of 'apiUrl'.
   */
  setApiUrl(url: string) {
    // Remove previous url.
    localStorage.removeItem('apiUrl');
    localStorage.setItem('apiUrl', url);
  }

  /** Get the current endpoint url from local storage. */
  getApiUrl(): string {
    return localStorage.getItem('apiUrl');
  }

  /** Lists all the beverages. */
  list(): Observable<BeverageData[]> {
    return this.http.get(`${this.getApiUrl()}/list`);
  }

  /** Adds beverage if it does not exist, or updates an existing value. */
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
