import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-url-setter',
  templateUrl: './url_setter.html',
  styleUrls: ['./url_setter.css']
})
export class UrlSetterComponent implements OnInit {
  apiUrl: string;
  urlFormControl: FormControl;

  constructor(private apiService: ApiService) {
    this.apiUrl = this.apiService.getApiUrl();
    this.createFormControl();
  }

  ngOnInit() {}

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
