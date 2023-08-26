import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResponsiveListComponent} from "./responsive-list/responsive-list.component";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {HttpClient, HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    ResponsiveListComponent,
    NavBarComponent
  ],
  exports: [
    ResponsiveListComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    HttpClientModule
  ]
})
export class ShareModule { }
