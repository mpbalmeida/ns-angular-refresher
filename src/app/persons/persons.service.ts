import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  personsChanged = new Subject<string[]>();
  persons: string [] = ['Marcos', 'Ann', 'Peter'];

  constructor() { }

  addPerson(name: string) {
    this.persons.push(name);
    this.personsChanged.next(this.persons);
  }

  deletePerson(name: string) {
    this.persons = this.persons.filter(p => {
      return p !== name;
    });
    this.personsChanged.next(this.persons);
    console.log(this.persons);
  }
}
