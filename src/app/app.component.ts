import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
