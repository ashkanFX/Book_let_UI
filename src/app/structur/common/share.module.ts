import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResponsiveListComponent} from "./responsive-list/responsive-list.component";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { FormInputsComponent } from '../project/main-page/author/form-inputs/form-inputs.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CardModule} from "primeng/card";
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [
    ResponsiveListComponent,
    NavBarComponent,

  ],
  exports: [
    ResponsiveListComponent,
    NavBarComponent,

  ],
    imports: [
        CommonModule,
        ButtonModule,
        TableModule,
        ReactiveFormsModule,
        HttpClientModule,
        TranslateModule,

    ]
})
export class ShareModule { }
