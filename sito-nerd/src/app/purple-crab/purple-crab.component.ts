import { Component } from '@angular/core';
import { Root } from '../app.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-purple-crab',
  templateUrl: './purple-crab.component.html',
  styleUrls: ['./purple-crab.component.css']
})
export class PurpleCrabComponent {
  title = 'vesuvio esplodi';
  data! : Root;
  pic = String;
  loading!: boolean;
  o !: Observable<Root>;
  constructor(public http: HttpClient) {}
  ngOnInit(): void {
    console.log("here");
     this.loading = true;
     this.o = this.http.get<Root>('https://api.scryfall.com/cards/named?fuzzy=purple-crab');
     this.o.subscribe(this.getData);
  }
   getData = (d : Root) =>
   {
     this.loading = (false);
     this.data = (d);
   }
}
