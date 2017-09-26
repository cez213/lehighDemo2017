import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ApiService} from './api.service';
import {AppComponent} from './app.component';
import {EndpointDialogComponent, EndpointSetterComponent} from './config/endpoint_setter';
import {InventoryModule} from './inventory/inventory_module';
import {MaterialModule} from './material.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    InventoryModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    EndpointSetterComponent,
    EndpointDialogComponent,
  ],
  bootstrap: [
    AppComponent,
    EndpointDialogComponent,
  ],
  entryComponents: [EndpointSetterComponent],
  providers: [ApiService]
})
export class AppModule {}
