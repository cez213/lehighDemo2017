import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ApiService} from '../api.service';
import {MaterialModule} from '../material.module';

import {SuppliesComponent} from './supplies.component';

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
    SuppliesComponent,
  ],
  providers: [ApiService],
  declarations: [SuppliesComponent],
  bootstrap: [SuppliesComponent]
})
export class SuppliesModule {}
