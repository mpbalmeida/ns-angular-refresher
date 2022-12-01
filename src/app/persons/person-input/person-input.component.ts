import { Component } from '@angular/core';
import { PersonsService } from '../persons.service';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {

  enteredPersonName: string = '';

  constructor(private personsService: PersonsService) {}

  onCreateUser() {
    console.log(`person created ${this.enteredPersonName}`);
    this.personsService.addPerson(this.enteredPersonName);
    console.log(this.personsService);
    this.enteredPersonName = '';
  }

}
