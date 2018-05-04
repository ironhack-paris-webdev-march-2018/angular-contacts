import { Component } from '@angular/core';

import { CounterService } from './counter-ui/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [CounterService]
})
export class AppComponent {
  title = 'app';
  timerId: number;

  constructor(
    public counterTruc: CounterService
  ) { }

  ngOnInit() {
    this.timerId =
      setInterval(() => {
        this.counterTruc.increment();
      }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timerId);
  }
}
