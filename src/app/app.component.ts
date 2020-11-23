import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ap';


  prev() {
    document.getElementById('container').classList.add('margin-left')
    console.log("perv");
  }

  dalej() {

  }
}
