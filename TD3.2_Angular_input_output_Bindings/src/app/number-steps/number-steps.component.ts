import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number-steps',
  template: `
    <div>
      <button type="button" class="btn btn-small btn-outline-primary" (click)="onClickDecr10()">-10</button>
      <button type="button" class="btn btn-small btn-outline-primary" (click)="onClickDecr1()">-1</button>
      <button type="button" class="btn btn-small btn-outline-primary" (click)="onClickIncr1()">+1</button>
      <button type="button" class="btn btn-small btn-outline-primary" (click)="onClickIncr10()">+10</button>
    </div>
  `,
  standalone: true
})
export class NumberStepsComponent {
  @Output() decr10 = new EventEmitter<number>();
  @Output() decr1 = new EventEmitter<number>();
  @Output() incr1 = new EventEmitter<number>();
  @Output() incr10 = new EventEmitter<number>();

  onClickDecr10() {
    this.decr10.emit(-10);
  }

  onClickDecr1() {
    this.decr1.emit(-1);
  }

  onClickIncr1() {
    this.incr1.emit(1);
  }

  onClickIncr10() {
    this.incr10.emit(10);
  }
}
