import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onPersonCreated(name: string) {
    this.persons.push(name);
  }
  persons: string [] = ['Marcos', 'Ann', 'Peter'];
}
