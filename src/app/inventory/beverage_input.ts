import {Component, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BeverageService} from '../beverage.service';

@Component({
  selector: 'app-beverage-input',
  templateUrl: './beverage_input.html',
  styleUrls: ['./inventory.css']
})
export class BeverageInputComponent implements OnInit, OnChanges {
  beverageForm: FormGroup;

  constructor(
      private fb: FormBuilder, private beverageService: BeverageService) {}

  ngOnInit() {
    this.createForm();
  }

  ngOnChanges() {
    this.beverageForm.reset({name: null, value: null});
  }

  createForm() {
    this.beverageForm = this.fb.group({
      name: new FormControl(null),
      value: new FormControl(null)
    });
  }

  add() {
    this.beverageService.addBeverage(this.beverageForm.value);
    this.ngOnChanges();
  }
}


