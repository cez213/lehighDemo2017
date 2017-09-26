import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {InventoryModule} from './inventory/inventory_module';
import {MaterialModule} from './material.module';
import {UrlSetterComponent} from './config/url_setter';
import {ApiService} from './api.service';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent, UrlSetterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    InventoryModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent, UrlSetterComponent]
})
export class AppModule {}
