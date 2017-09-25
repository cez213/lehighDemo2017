import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MdButtonModule, MdInputModule, MdTableModule} from '@angular/material';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { SuppliesComponent } from './supplies/supplies.component';

@NgModule({
  exports: [
    MdInputModule,
    MdButtonModule,
    MdTableModule,
  ]
})
export class AppMaterialModule {}

@NgModule({
  declarations: [AppComponent, SuppliesComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent, SuppliesComponent]
})
export class AppModule {}
