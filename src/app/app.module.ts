import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonInputComponent } from './persons/person-input/person-input.component';
import { PersonsComponent } from './persons/persons.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    PersonInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
