import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {CommonModule} from "@angular/common";
import {ShareModule} from "./structur/common/share.module";
import {MainPageModule} from "./structur/project/main-page/main-page.module";
import {RouterOutlet} from "@angular/router";
import {ViewPageModule} from "./structur/project/view-page/view-page.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        CommonModule,
        ShareModule,
        MainPageModule,
        RouterOutlet,
      ViewPageModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
