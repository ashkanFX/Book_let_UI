import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ViewPageRoutingModule} from './view-page-routing.module';
import {HomeComponent} from './home/home.component';
import {ShareModule} from "../../shared/share.module";
import {RatingModule} from 'primeng/rating';
import {InputTextModule} from 'primeng/inputtext';
import {TabViewModule} from 'primeng/tabview';
import {RadioButtonModule} from 'primeng/radiobutton';
import {PanelModule} from 'primeng/panel';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from "primeng/button";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {TagModule} from "primeng/tag";
import {FormsModule} from "@angular/forms";
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {CardModule} from 'primeng/card';
import {HomeBodyComponent} from './home/home-body/home-body.component';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';

@NgModule({
  declarations: [
    HomeComponent,
    HomeBodyComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    PanelModule,
    ToolbarModule,
    CardModule,
    CarouselModule,
    ViewPageRoutingModule,
    ShareModule,
    TabViewModule,
    ScrollPanelModule,
    ButtonModule,
    RadioButtonModule,
    InputTextModule,
    TagModule,
    RatingModule,
    FormsModule,
    AvatarModule,
    AvatarGroupModule


  ]
})
export class ViewPageModule { }
