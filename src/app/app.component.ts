import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Marcelo'
  userData = {name: 'Marcelo', role:"Admin"}
  title = 'tuto-ang';
}
