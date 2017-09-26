import {Component, Inject} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MD_DIALOG_DATA, MdDialog} from '@angular/material';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-endpoint-setter-dialog',
  templateUrl: './endpoint_dialog.html',
  styleUrls: ['../app.component.css']
})
export class EndpointDialogComponent {
  constructor(private apiService: ApiService, public dialog: MdDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(EndpointSetterComponent, {
      width: '500px',
      data: {apiUrl: this.apiService.getApiUrl()}
    });

    dialogRef.afterClosed().subscribe((url: string) => {
      if (url) {
        this.apiService.setApiUrl(url);
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

  constructor(@Inject(MD_DIALOG_DATA) public data: {apiUrl: string}) {
    this.apiUrl = data.apiUrl;
    this.createFormControl();
  }

  // TODO(carolynz): Add validator for url format.
  createFormControl() {
    this.urlFormControl = new FormControl('', [
      Validators.required,
    ]);
  }
}
