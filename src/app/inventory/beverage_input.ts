import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from "@ngrx/store";
import {ApiService} from '../api.service';
import {BeverageState} from '../beverages';

@Component({
  selector: 'app-beverage-input',
  templateUrl: './beverage_input.html',
  styleUrls: ['./inventory.css']
})
export class BeverageInputComponent implements OnInit {
  beverageForm: FormGroup;

  constructor(public store: Store<BeverageState>, private fb: FormBuilder, private apiService: ApiService) {
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
    this.apiService.addOrUpdate(this.beverageForm.value)
        .subscribe(
            () => this.updateSaved(), () => this.updateSaved());
  }

  // TODO(carolynz): FIX.
  showError(field: string) {
    return this.beverageForm.get(field).hasError('required') && this.beverageForm.value.touched();
  }

  private updateSaved() {
    this.store.dispatch(
      {type: 'ADD_BEVERAGE', payload: [this.beverageForm.value]});
    this.resetForm();
  }

  private resetForm() {
    this.beverageForm.reset();
    this.beverageForm.setErrors(null, {emitEvent: true});
    this.createForm();
  }
}

