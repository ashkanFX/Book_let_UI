import {Component} from '@angular/core';

@Component({
  selector: 'panel-navbar',
  templateUrl: './panel-navbar.component.html',
  styleUrls: ['./panel-navbar.component.css']
})
export class PanelNavbarComponent {
  title = 'Book_let_UI';
  test: string = "hidden "
  sidebarVisible: boolean = false;
  ngClick(){
    if (this.test === "hidden" ){
      this.test   = "block scalein  animation-duration-90"
    }else {
      this.test ="hidden"
    }
    this.sidebarVisible = true
  }
}
