import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthorComponent} from "./author/author.component";
import {ShareModule} from "../../common/share.module";
import {FormInputsComponent} from "./author/form-inputs/form-inputs.component";
import {CardModule} from "primeng/card";
import {ReactiveFormsModule} from "@angular/forms";
import {AutoCompleteModule} from 'primeng/autocomplete';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {BrowserModule} from "@angular/platform-browser";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {CheckboxModule} from "primeng/checkbox";
import {FieldsetModule} from 'primeng/fieldset';
import {InputSwitchModule} from 'primeng/inputswitch';
import {PanelRoutingModule} from "./panel-routing.module";
import {MenuModule} from 'primeng/menu';
import {HomeComponent} from './home/home.component';
import {TranslateModule} from "@ngx-translate/core";
import {ListComponent} from './author/list/list.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AuthorComponent,
    FormInputsComponent,
    HomeComponent,
    ListComponent,
  ],
  imports: [

    TableModule,
    CommonModule,
    FieldsetModule,
    ShareModule,
    InputSwitchModule,
    CardModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    BrowserModule,
    NoopAnimationsModule,
    CheckboxModule,
    PanelRoutingModule,
    MenuModule,
    TranslateModule
  ], exports: [
    AuthorComponent
  ],
  providers: [
    MessageService
  ]
})
export class PanelPageModule {
}
