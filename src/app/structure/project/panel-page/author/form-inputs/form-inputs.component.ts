import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthorsModel} from "../../../../model/models/authors.model";
import {ListService} from "../../../../service/impl/list.service";
import {AuthorService} from "../../../../service/impl/author.service";

@Component({
  selector: 'form-inputs',
  templateUrl: './form-inputs.component.html',
  styleUrls: ['./form-inputs.component.css']
})
export class FormInputsComponent implements OnInit{
  constructor(private fb: FormBuilder, private listService: ListService,private authorService:AuthorService) {
  }

  authorsForm: FormGroup = this.fb.group({
    firstname: new FormControl(null, [Validators.required]),
    lastname: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required,Validators.email]),
    university: new FormControl(null, [Validators.required]),
    isAlive: new FormControl(false),
   })

  authorsInfo: AuthorsModel = new AuthorsModel();

  ngOnInit(): void {
  }



  add() {

    this.authorService.add(this.authorsForm.value).subscribe( (response)=>{
      console.log(response);
    } )
  }
}
