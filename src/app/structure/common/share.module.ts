import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResponsiveListComponent} from "./responsive-list/responsive-list.component";
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import { Page404Component } from './page404/page404.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import {SidebarModule} from "primeng/sidebar";
import { ViewNavbarComponent } from './view-navbar/view-navbar.component';
import { PanelNavbarComponent } from './panel-navbar/panel-navbar.component';
import { MenuModule } from 'primeng/menu';
import { FooterComponent } from './footer/footer.component';
import { Page500Component } from './page500/page500.component';
import { Page401Component } from './page401/page401.component';

@NgModule({
  declarations: [
    ResponsiveListComponent,
    Page404Component,
    SideBarComponent,
    ViewNavbarComponent,
    PanelNavbarComponent,
    FooterComponent,
    Page500Component,
    Page401Component,
  ],
  exports: [
    ResponsiveListComponent,
    SideBarComponent,
    ViewNavbarComponent,
    PanelNavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    MenuModule,
    TableModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule,
    SidebarModule,
  ]
})
export class ShareModule { }
