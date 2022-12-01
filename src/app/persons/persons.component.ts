import { Component, OnInit } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {


  personList: string [] = [];

  constructor(private personService: PersonsService) {}

  ngOnInit(): void {
    this.personList = this.personService.persons;
  }

  onRemovePerson(person: string) {
    this.personService.deletePerson(person);
  }
}
