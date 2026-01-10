import { NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-css-class',
  imports: [NgClass, FormsModule, NgStyle],
  templateUrl: './dynamic-css-class.html',
  styleUrl: './dynamic-css-class.css',
})
export class DynamicCssClass {
  myClassName: string = "bg-warning text-center";

  isActive: boolean = false;

  ProductPrice = 500;

  divBackColor: string = '';

  isSidePanel = signal(false); 

  openSidePanel() {
    this.isSidePanel.set(true);
  }

  closeSidePanel() {
    this.isSidePanel.set(false);
  }

  myCss = {
    color: 'red',
    'background-color': 'black',
    'font-size': '35px'
  }
}
