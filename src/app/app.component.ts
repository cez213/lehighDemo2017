import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {ApiService} from './api.service';
import {BeverageState} from './beverages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Beverage Warehouse';
  endpoint: string;

  constructor(public store: Store<BeverageState>, private apiService: ApiService) {
    this.endpoint = this.apiService.getApiUrl();
  }
}
