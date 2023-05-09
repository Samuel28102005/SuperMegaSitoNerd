import { Component } from '@angular/core';
import { Root } from '../app.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-black-dragon',
  templateUrl: './black-dragon.component.html',
  styleUrls: ['./black-dragon.component.css']
})
export class BlackDragonComponent {
  title = 'vesuvio esplodi';
  data! : Root;
  pic = String;
  loading!: boolean;
  o !: Observable<Root>;
  constructor(public http: HttpClient) {}


   makeRequest(): void {
     console.log("here");
     this.loading = true;
     this.o = this.http.get<Root>('https://api.scryfall.com/cards/named?fuzzy=aust+com');
     this.o.subscribe(this.getData);
   }
   getData = (d : Root) =>
   {
     this.loading = (false);
     this.data = (d);
   }
}
