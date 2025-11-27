import { Component } from '@angular/core';


interface Suggestion {
  id: number;
  title: string;
  description: string;
  category: string;
  date: Date;
  status: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // <-- styleUrls (avec s)
})
export class AppComponent {
  title = 'montassarghodhbeniN';

 }
