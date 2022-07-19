import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
  
  ];

  animalDetails = ''

  constructor(private listService: ListService) {
   this.getAnimals()
  }

  ngOnInit(): void {}

  showAge(animal:Animal){
    this.animalDetails = `O pet ${animal.name} tem ${animal.age}`
  }

  removeAnimal(animal:Animal){
    this.animals =  this.animals.filter(a => a.name != animal.name)
    this.listService.remove(animal.id).subscribe()
    //his.animals = this.listService.remove(this.animals, animal)
  }

  postAnimal(){
  this.listService.postAnimal(this.animals, {id: 3, age:8, name:'Nero', type:'Cat'})
  }

  getAnimals():void{
    this.listService.getAll().subscribe((animals) => this.animals = animals)
  }


}
