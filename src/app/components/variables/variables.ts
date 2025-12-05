import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.html',
  styleUrl: './variables.css',
})
// Decorator

export class Variables {
  // String Variables, number, boolean, Date, Array of strings, Array of numbers, Object
  courseName: string = 'Angular 21';
  currentVersion = "v21.0.2";

  rollNumber: number = 121;
  productPrice = 1200.50;

  isActive: boolean = false;
  isPresent = true;

  currentDate: Date = new Date();

  cityList: string[] = ['Makati', 'Manila', 'Cebu', 'Davao'];
  rollNumberList: number[] = [101, 102, 103, 104];

  studentObj = {
    firstName: 'Niño',
    mobile: '09675827771',
    email: 'mrsarayno@gmail.com'
  };

  studentList = [
    { firstName: 'Niño', mobile: '09675827771', email: 'mrsarayno@gmail.com' }
    , { firstName: 'Francis', mobile: '09171234567', email: 'ninyosarayno@gmail.com' }
    , { firstName: 'Sarayno', mobile: '09081234567', email: 'sarayno9103@gmail.com' }
  ]

  className = "primary";

  constructor() { 
    this.courseName = 'Angular 21 - Updated';

    this.rollNumber = 9103;
  }
}
