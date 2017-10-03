import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BeverageService} from '../beverage.service';

@Component({
  selector: 'app-beverage-input',
  templateUrl: './beverage_input.html',
  styleUrls: ['./inventory.css']
})
export class BeverageInputComponent implements OnInit {
  // Get access to the ngForm value.
  @ViewChild('formDir') form;
  beverageForm: FormGroup;

  constructor(
      private fb: FormBuilder, private beverageService: BeverageService) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.beverageForm = this.fb.group({
      name: new FormControl(null, Validators.required),
      value: new FormControl(null, Validators.required)
    });
  }

  /** Called by the view when the form is submitted. */
  onSubmit() {
    this.beverageService.updateBeverage(this.beverageForm.value);
    this.form.resetForm();
  }
}


