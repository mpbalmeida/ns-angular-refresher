import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit, OnDestroy {

  private personListSubscription: Subscription = new Subscription;
  personList: string [] = [];

  constructor(private personService: PersonsService) {}

  ngOnInit(): void {
    this.personList = this.personService.persons;
    this.personListSubscription = this.personService.personsChanged.subscribe(persons => {
      this.personList = persons;
    });
  }

  ngOnDestroy(): void {
    this.personListSubscription.unsubscribe();
  }

  onRemovePerson(person: string) {
    this.personService.deletePerson(person);
  }
}
