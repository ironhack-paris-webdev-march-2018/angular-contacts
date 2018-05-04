import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/operator/toPromise';

@Injectable()
export class IcndbService {

  constructor(
    private ajaxTruc: HttpClient
  ) { }

  // https://api.icndb.com/jokes/random
  getRandom() {
    return this.ajaxTruc
      .get('https://api.icndb.com/jokes/random')
      .toPromise();
  }

  // https://api.icndb.com/jokes/count
  getCount() {
    return this.ajaxTruc
      .get('https://api.icndb.com/jokes/count')
      .toPromise();
  }

  // https://api.icndb.com/categories
  getCategories() {
    return this.ajaxTruc
      .get('https://api.icndb.com/categories')
      .toPromise();
  }

}

export class Joke {
  id: number;
  joke: string;
  categories: Array<string>;
}
