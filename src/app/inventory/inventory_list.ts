import {Component, OnInit} from '@angular/core';
import {ApiService, BeverageData} from '../api.service';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory_list.html',
  styleUrls: ['./inventory.css']
})
export class InventoryListComponent implements OnInit {
  dataSource: BeverageDataSource;
  beverages: Observable<BeverageData[]>;
  displayedColumns = ['name', 'quantity'];

  constructor(private readonly apiService: ApiService) {}

  ngOnInit() {
    this.beverages = this.apiService.list();
    this.dataSource = new BeverageDataSource(this.beverages);
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
