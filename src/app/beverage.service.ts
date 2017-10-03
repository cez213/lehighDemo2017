import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {ApiService, BeverageData} from './api.service';
import {BeverageState} from './beverages';
import {ADD_BEVERAGE, LIST_BEVERAGES} from './actions';

@Injectable()
export class BeverageService {
  beverages: Observable<BeverageData[]>;

  constructor(
      private apiService: ApiService, private store: Store<BeverageState>) {
    this.beverages =
        this.store.select(beverageState => beverageState.beverages);
}

  changeEndpoint(url: string) {
    this.apiService.setApiUrl(url);
    this.listBeverages();
  }

  listBeverages() {
    this.apiService.list().subscribe(
        response => this.dispatchEvent(LIST_BEVERAGES, response),
        () => this.dispatchEvent(LIST_BEVERAGES));
  }

  updateBeverage(beverage: BeverageData) {
    this.apiService.addOrUpdate(beverage).subscribe(
        () => this.dispatchEvent(ADD_BEVERAGE, [beverage]),
        () => this.dispatchEvent(ADD_BEVERAGE, [beverage]));
  }

  private dispatchEvent(type: string, payload: BeverageData[] = []) {
    this.store.dispatch({type, payload});
  }
}
