import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthorsModel} from "../../../../model/models/authors.model";
import {ListService} from "../../../../service/impl/list.service";
import {MessageService} from "primeng/api";
@Component({
  selector: 'form-inputs',
  templateUrl: './form-inputs.component.html',
  styleUrls: ['./form-inputs.component.css']
})
export class FormInputsComponent implements OnInit{
  constructor(private fb: FormBuilder, private listService: ListService, private messageService: MessageService) {
  }

  authorsForm: FormGroup = this.fb.group({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required,Validators.email]),
    university: new FormControl(null, [Validators.required]),
    isAlive: new FormControl(false),
   })

  authorsInfo: AuthorsModel = new AuthorsModel();

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
  get isAlive() {
    return this.authorsForm.get('isAlive')
  }


  add() {
    this.authorsInfo.firstName = this.authorsForm.controls['firstName'].value
    this.authorsInfo.lastname = this.authorsForm.controls['firstName'].value;
    this.authorsInfo.email = this.authorsForm.controls['firstName'].value;
    this.authorsInfo.university = this.authorsForm.controls['firstName'].value;
    this.authorsInfo.isAlive = this.authorsForm.controls['firstName'].value;
    this.authorsInfo.isAlive = this.authorsForm.controls['isAlive'].value;
    this.authorsInfo.isAlive = this.authorsForm.controls['isDead'].value;
    /*this.listService.add(this.authorsInfo).subscribe((item)=> {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    })*/
  }
}

console.log(document.onreadystatechange);
