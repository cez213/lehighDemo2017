import {Component, OnInit} from '@angular/core';
import {BeverageData} from '../api.service';
import {Observable} from 'rxjs/Observable';
import {BeverageService} from '../beverage.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory_list.html',
  styleUrls: ['./inventory.css']
})
export class InventoryListComponent implements OnInit {
  beverages: Observable<BeverageData[]>;

  constructor(private readonly beverageService: BeverageService) {
    this.beverages = this.beverageService.beverages;
  }

  ngOnInit() {
    this.beverageService.listBeverages();
  }
}
