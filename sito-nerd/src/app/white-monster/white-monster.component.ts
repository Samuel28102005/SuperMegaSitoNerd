import { Component } from '@angular/core';
import { Root } from '../app.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-white-monster',
  templateUrl: './white-monster.component.html',
  styleUrls: ['./white-monster.component.css']
})
export class WhiteMonsterComponent {
  title = 'vesuvio esplodi';
  data! : Root;
  pic = String;
  loading!: boolean;
  o !: Observable<Root>;
  constructor(public http: HttpClient) {}


   makeRequest(): void {
     console.log("here");
     this.loading = true;
     this.o = this.http.get<Root>('https://api.scryfall.com/cards/named?fuzzy=white-shield-crusader');
     this.o.subscribe(this.getData);
   }
   getData = (d : Root) =>
   {
     this.loading = (false);
     this.data = (d);
   }
}
