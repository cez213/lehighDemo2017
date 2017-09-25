import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService, BeverageData} from '../api.service';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrls: ['./supplies.component.css']
})
export class SuppliesComponent implements OnInit {
  beverageForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required])
  });
  dataSource: BeverageDataSource;
  displayedColumns = ['name', 'quantity', 'buttons'];

  constructor(private readonly apiService: ApiService) {}

  ngOnInit() {
    this.apiService.list().subscribe((data: BeverageData[]) => {
      console.log('data', data);
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
