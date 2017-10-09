import {Component, Inject} from '@angular/core';
import {AbstractControl, FormControl, ValidatorFn, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {ApiService} from '../api.service';
import {BeverageService} from '../beverage.service';

@Component({
  selector: 'app-endpoint-setter-dialog',
  templateUrl: './endpoint_dialog.html',
  styleUrls: ['../app.component.css']
})
export class EndpointDialogComponent {
  constructor(
      private apiService: ApiService, private beverageService: BeverageService,
      public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(EndpointSetterComponent, {
      width: '500px',
      data: {apiUrl: this.apiService.getApiUrl()}
    });

    dialogRef.afterClosed().subscribe((url: string) => {
      if (url) {
        this.beverageService.changeEndpoint(url);
      }
    });
  }
}

@Component({
  selector: 'app-endpoint-setter',
  templateUrl: './endpoint_setter.html',
  styleUrls: ['../app.component.css']
})
export class EndpointSetterComponent {
  apiUrl: string;
  urlFormControl: FormControl;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {apiUrl: string}) {
    this.apiUrl = data.apiUrl;
    this.createFormControl();
  }

  createFormControl() {
    this.urlFormControl = new FormControl('', [
      Validators.required,
      endpointUrlValidator(/^\/{2}.*\.com$/i)
    ]);
  }
}

/** Custom validator to check if the inputted url is correct. */
export function endpointUrlValidator(urlRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const correctUrl = urlRe.test(control.value);
    return correctUrl ? null : {'incorrectUrl': {value: control.value}};
  };
}
