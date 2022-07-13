import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  show:boolean = true

  showMessage(): void {
    this.show = !this.show
  }

  constructor() { }

  ngOnInit(): void {
  }

}
