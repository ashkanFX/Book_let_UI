import {NgModule} from "@angular/core";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {ResponsiveListComponent} from "./responsive-list/responsive-list.component";
import {TableModule} from "primeng/table";
import {NgForOf, NgStyle} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";

@NgModule({
  declarations: [
    NavBarComponent,
    ResponsiveListComponent,
  ],
  imports: [
    TableModule,
    NgForOf,
    ButtonModule,
    RippleModule,
    NgStyle
  ],
  exports: [
    ResponsiveListComponent,
    NavBarComponent
  ],
  providers: []
})
export class CommonModule {

}
