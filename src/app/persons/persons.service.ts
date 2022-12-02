import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  personsChanged = new Subject<string[]>();
  persons: string [] = ['Marcos', 'Ann', 'Peter'];

  constructor(private http: HttpClient) { }

  fetchPersons() {
    this.http.get<any>('https://swapi.dev/api/people')
    .pipe(map(data => {
      return data.results.map((character: { name: string; }) => character.name);
    }))
    .subscribe(transformedData => {
      this.personsChanged.next(transformedData);
    });
  }

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
