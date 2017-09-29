import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ApiService, BeverageData} from '../api.service';
import {BeverageState} from '../beverages';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory_list.html',
  styleUrls: ['./inventory.css']
})
export class InventoryListComponent implements OnInit {
  beverages: BeverageData[];

  constructor(
      public store: Store<BeverageState>,
      private readonly apiService: ApiService) {}

  ngOnInit() {
    this.apiService.list().subscribe(beverages => {
      this.store.dispatch({type: 'LIST_BEVERAGES', payload: beverages});
      this.beverages = beverages;
    });
  }
}
