import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NumberDisplayComponent } from '../number-display/number-display.component';
import { NumberStepsComponent } from '../number-steps/number-steps.component';
import { NumberEditComponent } from '../number-edit/number-edit.component';
@Component({ selector: 'app-test-page1',
  templateUrl: './test-page1.component.html',
  styleUrls: ['./test-page1.component.css'],
  standalone: true,
  imports: [FormsModule, NumberDisplayComponent, NumberStepsComponent, NumberEditComponent]
})
export class TestPage1Component implements OnInit {
  numberValue = 1;

  constructor() {}

  ngOnInit(): void {}

  onClickIncrementValue(): void {
    this.numberValue++;
  }

  onInputChanged($event: Event): void {
    console.log("input changed", $event);
    const input = $event.target as HTMLInputElement;
    const textValue: string = input.value;
    console.log('input text value:', textValue);
    const numberValue: number = +textValue;
    console.log('input number value:', numberValue);
    this.numberValue = numberValue;
  }

  onDecr10($event: number): void {
    this.numberValue -= 10;
  }

  onDecr1($event: number): void {
    this.numberValue -= 1;
  }

  onIncr1($event: number): void {
    this.numberValue += 1;
  }

  onIncr10($event: number): void {
    this.numberValue += 10;
  }
}
