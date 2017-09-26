import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-beverage-input',
  templateUrl: './beverage_input.html',
  styleUrls: ['./inventory.css']
})
export class BeverageInputComponent implements OnInit {
  beverageForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.beverageForm = this.fb.group({
      name: [null, Validators.required],
      value: [null, Validators.required]
    });
  }

  addBeverage() {
    console.log('adding beverage', this.beverageForm.value);
    this.apiService.addOrUpdate(this.beverageForm.value).subscribe(data => {
      console.log('data', data);
    });
  }
}
