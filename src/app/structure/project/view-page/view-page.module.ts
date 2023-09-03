import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewPageRoutingModule } from './view-page-routing.module';
import { HomeComponent } from './home/home.component';
import {ShareModule} from "../../common/share.module";

import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PanelModule } from 'primeng/panel';
import { CarouselModule } from 'primeng/carousel';
import {ButtonModule} from "primeng/button";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {TagModule} from "primeng/tag";
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PanelModule,
    CarouselModule,
    ViewPageRoutingModule,
    ShareModule,
    TabViewModule,
    ScrollPanelModule,
    ButtonModule,
    RadioButtonModule,
    InputTextModule,
    TagModule


  ]
})
export class ViewPageModule { }
