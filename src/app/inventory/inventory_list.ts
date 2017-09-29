import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ApiService, BeverageData} from '../api.service';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {BeverageState} from '../beverages';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory_list.html',
  styleUrls: ['./inventory.css']
})
export class InventoryListComponent implements OnInit {
  dataSource: BeverageDataSource;
  beverages;
  // beverages: Observable<BeverageData[]>;
  // displayedColumns = ['name', 'quantity'];
  //
  constructor(public store: Store<BeverageState>, private readonly apiService: ApiService) {}

  ngOnInit() {
    this.apiService.list().subscribe(beverages => {
      this.store.dispatch({type: 'LIST_BEVERAGES', payload: beverages});
      this.beverages = beverages;
    });
    // this.beverages = this.apiService.list();
    console.log('beverages', this.beverages);
    // this.dataSource = new BeverageDataSource(this.beverages);
  }
}

export class BeverageDataSource extends DataSource<any> {
  constructor(private readonly beverageData: Observable<BeverageData[]>) {
    super();
  }

  connect(): Observable<BeverageData[]> {
    return this.beverageData;
  }

  disconnect() {}
}
