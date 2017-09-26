import {Component} from '@angular/core';
import {ApiService} from '../api.service';
import {FormControl, Validators} from '@angular/forms';
import {MdDialog} from '@angular/material';

@Component({
  selector: 'app-url-setter',
  templateUrl: './url_setter.html',
  styleUrls: ['./url_setter.css']
})
export class UrlSetterComponent {
  apiUrl: string;
  urlFormControl: FormControl;

  constructor(private apiService: ApiService) {
    this.apiUrl = this.apiService.getApiUrl();
    this.createFormControl();
  }

  updateUrl() {
    console.log('value', this.urlFormControl.value);
    this.apiService.setApiUrl(this.urlFormControl.value);
  }

  // TODO(carolynz): Add validator for url format.
  createFormControl() {
    this.urlFormControl = new FormControl('', [
      Validators.required,
    ]);
  }
}

@Component({
  selector: 'app-endpoint-dialog',
  templateUrl: './endpoint_dialog.html',
  styleUrls: ['./url_setter.css']
})
export class EndpointDialogComponent {
  constructor(public dialog: MdDialog) {}

  openDialog() {
    this.dialog.open(UrlSetterComponent, {});
  }
}
