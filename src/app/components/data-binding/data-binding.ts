import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  courseName = 'Angular v21 Full Course';
  city = 'Makati';
  className = "primary";
  bold = "secondary"; 
  inputType = 'date';
  inputClass = 'design';
  headerStyle = 'title';

  clickme() {
    alert('Button Clicked!');
  }

  onStateChange() {
    alert('Dropdown value changed!');
  }

  name: string = 'Niño';

  changeCourseName(text: string) {
    this.courseName = text;
  }

}

