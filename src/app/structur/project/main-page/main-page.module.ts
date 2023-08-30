import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthorComponent} from "./author/author.component";
import {ShareModule} from "../../common/share.module";
import {FormInputsComponent} from "./author/form-inputs/form-inputs.component";
import {CardModule} from "primeng/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations:[
    AuthorComponent,
    FormInputsComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    CardModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    InputTextModule
  ],exports :[
    AuthorComponent
  ]
})
export class MainPageModule { }
