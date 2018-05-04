import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {

  currentCount: number = 0;

  constructor() { }

  increment() {
    this.currentCount += 1;
  }
  decrement() {
    this.currentCount -= 1;
  }
  zero() {
    this.currentCount = 0;
  }

}
