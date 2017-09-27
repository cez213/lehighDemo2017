import {Component, OnInit, OnDestroy} from '@angular/core';
import {Store} from '@ngrx/store';
import {ApiService, BeverageData} from './api.service';
import {BeverageState} from './beverages';
import {ADD_BEVERAGE, LIST_BEVERAGES} from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Beverage Warehouse';
  beverages;
  subscription;
  endpoint: string;

  constructor(public store: Store<BeverageState>, private apiService: ApiService) {
    this.endpoint = this.apiService.getApiUrl();
  }

  ngOnInit() {
    this.subscription = this.store.select('beverages').subscribe(beverages => {
      console.log('bevearges', this.beverages);
      this.beverages = beverages;
    });
  }

  addBeverage(beverage: BeverageData) {
    this.store.dispatch({type: ADD_BEVERAGE, payload: beverage});
  }

  listBeverages() {
    this.store.dispatch({type: LIST_BEVERAGES, payload: this.apiService.list()});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
