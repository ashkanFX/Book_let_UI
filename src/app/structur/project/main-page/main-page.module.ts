import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthorComponent} from "./author/author.component";
import {ShareModule} from "../../common/share.module";



@NgModule({
  declarations:[
    AuthorComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ],exports :[
    AuthorComponent
  ]
})
export class MainPageModule { }
