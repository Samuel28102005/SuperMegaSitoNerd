import { Component, OnInit } from '@angular/core';
import { Root } from '../app.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-green-slime',
  templateUrl: './green-slime.component.html',
  styleUrls: ['./green-slime.component.css']
})
export class GreenSlimeComponent implements OnInit{
  title = 'vesuvio esplodi';
  data! : Root;
  pic = String;
  loading!: boolean;
  o !: Observable<Root>;
  constructor(public http: HttpClient) {}
  ngOnInit(): void {
    console.log("here");
     this.loading = true;
     this.o = this.http.get<Root>('https://api.scryfall.com/cards/named?fuzzy=green-slime');
     this.o.subscribe(this.getData);
  }
   getData = (d : Root) =>
   {
     this.loading = (false);
     this.data = (d);
   }
}
