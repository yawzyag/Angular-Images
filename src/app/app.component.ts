import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'INTELCOST';
  name: string = 'yesid';
  constructor() {
    console.log(123);
    this.changeName('2');
    console.log(this.name);
  }
  changeName(name: string) {
    this.name = name;
  }
}
