import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  apiUrl = '//tutorial-179815.appspot.com';
  // dataChange: BehaviorSubject<BeverageData[]> = new BehaviorSubject<BeverageData[]>([]);
  // get data(): BeverageData[] {return this.dataChange.value;}

  constructor(private http: Http) {}

  setApiUrl(url: string) {
    this.apiUrl = url;
  }

  list(): Observable<BeverageData[]> {
    return this.http.get(`${this.apiUrl}/list`).map(res => res.json());
  }
}

export interface BeverageData {
  name: string;
  value: number;
}

