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
  displayedColumns = ['name', 'quantity', 'buttons'];

  constructor(private readonly apiService: ApiService) {}

  ngOnInit() {
    this.apiService.list().subscribe((data: BeverageData[]) => {
      this.dataSource = new BeverageDataSource(data);
    });
  }
}

export class BeverageDataSource extends DataSource<any> {
  constructor(private readonly beverageData: BeverageData[]) {
    super();
  }

  connect(): Observable<BeverageData[]> {
    return Observable.of(this.beverageData);
  }

  disconnect() {}
}
