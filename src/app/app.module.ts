import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {InventoryModule} from './inventory/inventory_module';
import {MaterialModule} from './material.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    InventoryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
