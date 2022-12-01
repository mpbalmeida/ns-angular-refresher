import { Component } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent {

  personList: string [];

  constructor(personsService: PersonsService) {
    this.personList = personsService.persons;
  }
}
