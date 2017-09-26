import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ApiService} from '../api.service';
import {MaterialModule} from '../material.module';

import {InventoryListComponent} from './inventory_list';
import {BeverageInputComponent} from './beverage_input';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  exports: [
    InventoryListComponent,
    BeverageInputComponent,
  ],
  providers: [ApiService],
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
