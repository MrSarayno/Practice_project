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

  studentTotalMarks: number = 0;
}