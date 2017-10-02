import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ApiService} from '../api.service';
import {MaterialModule} from '../material.module';

import {InventoryListComponent} from './inventory_list';
import {BeverageInputComponent} from './beverage_input';
import {BeverageService} from '../beverage.service';
import {beverages} from '../beverages';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.provideStore(beverages),
  ],
  exports: [
    InventoryListComponent,
    BeverageInputComponent,
  ],
  providers: [ApiService, BeverageService],
  declarations: [
    InventoryListComponent,
    BeverageInputComponent,
  ],
  bootstrap: [
    InventoryListComponent,
    BeverageInputComponent,
  ]
})
export class InventoryModule {}
