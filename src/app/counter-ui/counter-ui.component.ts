import { Component, OnInit } from '@angular/core';

import { CounterService } from './counter.service';

@Component({
  selector: 'app-counter-ui',
  templateUrl: './counter-ui.component.html',
  styleUrls: ['./counter-ui.component.css'],
  // providers: [CounterService]
})
export class CounterUiComponent implements OnInit {

  constructor(
    public counterTruc: CounterService
  ) { }

  ngOnInit() {
  }

  userIncrease() {
    this.counterTruc.increment();
  }
  userDecrease() {
    this.counterTruc.decrement();
  }
  userReset() {
    this.counterTruc.zero();
  }

}
