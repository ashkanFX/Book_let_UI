import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'form-inputs',
  templateUrl: './form-inputs.component.html',
  styleUrls: ['./form-inputs.component.css']
})
export class FormInputsComponent implements OnInit{
  constructor(private fb: FormBuilder) {
  }

  authorsForm: FormGroup = this.fb.group({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    university: new FormControl(null, [Validators.required])
  })

  ngOnInit(): void {
  }
  get firstName() {
    return this.authorsForm.get('firstName')
  }
  get lastName() {
    return this.authorsForm.get('lastName')
  }
  get email() {
    return this.authorsForm.get('email')
  }
  get university() {
    return this.authorsForm.get('university')
  }
}
