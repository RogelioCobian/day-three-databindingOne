import { Person } from './person/person';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  heading = 'Person Details';
  // person: any = {
  //     name = {
  //     first: string = 'John',
  //     last: string = 'Doe'
  //   },
  //   gender = 'Mr'
  // };

  // constructor(newPerson: string) {
  //   this.person = newPerson;
  // }

  // Attempt One = fail. My sadness grows :(
  // Attempt #2
 public generation: Person = new Person();
 result: any[];

 constructor() {
   this.result = this.generation.people;
 }

}



