import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {CommonModule} from "@angular/common";
import {ShareModule} from "./structur/common/share.module";
import {MainPageModule} from "./structur/project/main-page/main-page.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ShareModule,
    MainPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
