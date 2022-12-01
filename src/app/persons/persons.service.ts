import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  persons: string [] = ['Marcos', 'Ann', 'Peter'];

  constructor() { }

  addPerson(name: string) {
    this.persons.push(name);
  }

  deletePerson(name: string) {
    this.persons = this.persons.filter(p => {
      return p !== name;
    });
    console.log(this.persons);
  }
}
