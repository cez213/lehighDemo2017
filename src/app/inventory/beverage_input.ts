import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-beverage-input',
  templateUrl: './beverage_input.html',
  styleUrls: ['./inventory.css']
})
export class BeverageInputComponent implements OnInit {
  @Input() addBeverage = new EventEmitter();

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

  add() {
    console.log('adding beverage', this.beverageForm.value);
    this.apiService.addOrUpdate(this.beverageForm.value).then(() => {
      this.addBeverage.emit(this.beverageForm.value);
      this.beverageForm.reset();
    });
  }
}

