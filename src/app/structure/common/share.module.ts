import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResponsiveListComponent} from "./responsive-list/responsive-list.component";
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {Page404Component} from './page404/page404.component';
import {SideBarComponent} from './side-bar/side-bar.component';
import {SidebarModule} from "primeng/sidebar";
import {ViewNavbarComponent} from './view-navbar/view-navbar.component';
import {PanelNavbarComponent} from './panel-navbar/panel-navbar.component';
import {MenuModule} from 'primeng/menu';
import {FooterComponent} from './footer/footer.component';
import {Page500Component} from './page500/page500.component';
import {Page401Component} from './page401/page401.component';
import {PanelMenuModule} from 'primeng/panelmenu';
import {TabPanelComponent} from './tab-panel/tab-panel.component';
import {PanelModule} from "primeng/panel";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {CardModule} from "primeng/card";
import {CarouselModule} from "primeng/carousel";
import {TabViewModule} from "primeng/tabview";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {RadioButtonModule} from "primeng/radiobutton";
import {InputTextModule} from "primeng/inputtext";
import { DialogModule } from 'primeng/dialog';
import {TagModule} from "primeng/tag";
import {RatingModule} from "primeng/rating";

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
    TabPanelComponent,
  ],
  exports: [
    ResponsiveListComponent,
    SideBarComponent,
    ViewNavbarComponent,
    PanelNavbarComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    MenuModule,
    TableModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule,
    SidebarModule,
    PanelMenuModule,
    ToastModule,
    PanelModule,
    ToolbarModule,
    CardModule,
    CarouselModule,
    TabViewModule,
    ScrollPanelModule,
    ButtonModule,
    RadioButtonModule,
    InputTextModule,
    DialogModule,
    TagModule,
    RatingModule,
    FormsModule
  ]
})
export class ShareModule {
}
