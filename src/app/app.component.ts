import { Component } from '@angular/core';



@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  // `<h1>Start {{name}}</h1>`,
  styleUrls: ['app.component.css']
})


export class AppComponent  { 

  title: string = 'DayOrganizer';
}
