import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 7 },
    { name: 'Tom',   type: 'Cat', age: 4 },
    { name: 'Frida', type: 'Dog', age: 5 },
    { name: 'Bob',   type: 'Hrose', age: 10 },
  ];

  animalDetails = ''

  constructor() {}

  ngOnInit(): void {}

  showAge(animal:Animal){
    this.animalDetails = `O pet ${animal.name} tem ${animal.age}`
  }
}
