import { Component, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class SignalComponent {
  // courseName: string = 'Angular 21';

  infoStyle = "course"
  studentStyle = "student"
  dataStyle = "data"
  titleStyle = "title"


  courseName = signal('Angular 21');
  studentNumber = signal(136762120344);
  student = signal({ name: 'Niño', age: 23, course: 'BSIT-4C' });

  courseDuration: Signal<string> = signal("3 Months");

  constructor() {
    console.log('Before' + this.courseName());
    setTimeout(() => {
      this.courseName.set('React Js');
      console.log('After' + this.courseName);
    }, 3000);

    console.log('Before' + this.studentNumber());
    setTimeout(() => {
      this.studentNumber.set(202211344);
      console.log('After' + this.studentNumber);
    }, 3000);

  }

  changeCourseJava() {
    this.courseName.set('Java');
  }
  changeCourseJavaScript() {
    this.courseName.set('JavaScript');
  }
  changeCoursePython() {
    this.courseName.set('Python');
  }
  changeCourseC() {
    this.courseName.set('C++');
  }
}
