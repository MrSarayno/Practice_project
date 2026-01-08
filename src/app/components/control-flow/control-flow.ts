import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  titleStyle = 'title';
  offerStyle = 'offer';

  isOfferCodeAvailable: boolean = false;

  isSuccessDivVisible: WritableSignal<boolean> = signal(false);

  toggleDivVisibility() {
    this.isSuccessDivVisible.set(!this.isSuccessDivVisible());
  }
  studentName: string = '';

  subject1Name: string = '';
  subject2Name: string = '';
  subject3Name: string = '';
  subject4Name: string = '';
  subject5Name: string = '';
  subject6Name: string = '';
  subject7Name: string = '';

  subject1Marks: number = 0;
  subject2Marks: number = 0;
  subject3Marks: number = 0;
  subject4Marks: number = 0;
  subject5Marks: number = 0;
  subject6Marks: number = 0;
  subject7Marks: number = 0;

  get totalMarks(): number {
    return (
      Number(this.subject1Marks) +
      Number(this.subject2Marks) +
      Number(this.subject3Marks) +
      Number(this.subject4Marks) +
      Number(this.subject5Marks) +
      Number(this.subject6Marks) +
      Number(this.subject7Marks)
    );
  }

  get studentTotalMarks(): number {
    return this.totalMarks / 7;
  }

  offerlist: string[] = [
    '20% off on Electronics',
    '15% off on Clothing',
    '10% off on Groceries',
    '25% off on Home Appliances',
    '30% off on Furniture',
  ];
}