import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-number-edit',
  template: '<input [(ngModel)]="value" (ngModelChange)="onInputChange()">',
  standalone: true,
  imports: [FormsModule]
})
export class NumberEditComponent {
  @Input()
  value: number = 0;

  @Output()
  valueChange = new EventEmitter<number>();

  onInputChange(): void {
    this.valueChange.emit(this.value);
  }
}
