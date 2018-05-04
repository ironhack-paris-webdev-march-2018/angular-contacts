import { Component, OnInit } from '@angular/core';

import { IcndbService, Joke } from '../api/icndb.service';

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.css']
})
export class ChuckComponent implements OnInit {

  jokes: Array<Joke> = [];

  constructor(
    public chuckTruc: IcndbService
  ) { }

  ngOnInit() {
    this.getAJoke();
  }

  getAJoke() {
    this.chuckTruc.getRandom()
      .then((result: any) => {
        console.log('Random Joke Result', result);

        // connect the API data to the component
        this.jokes.push(result.value);
      })
      .catch((err) => {
        console.log('Random Joke Error 💩', err);
      });
  }

}
