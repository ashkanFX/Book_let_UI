import { Component } from '@angular/core';

@Component({
  selector: 'view-navbar',
  templateUrl: './view-navbar.component.html',
  styleUrls: ['./view-navbar.component.css']
})
export class ViewNavbarComponent {
  title = 'Book_let_UI';
  test: string = "hidden "
  ngClick(){
    if (this.test === "hidden" ){
      this.test   = "block scalein  animation-duration-90"
    }else {
      this.test ="hidden"
    }
  }
}
