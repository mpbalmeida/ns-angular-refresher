import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {

  @Output() createdPerson = new EventEmitter<string>();
  enteredPersonName: string = '';

  onCreateUser() {
    console.log(`person created ${this.enteredPersonName}`);
    this.createdPerson.emit(this.enteredPersonName);
    this.enteredPersonName = '';
  }

}
