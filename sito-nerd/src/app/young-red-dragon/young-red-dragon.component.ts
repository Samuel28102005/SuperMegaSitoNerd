import { Component, OnInit } from '@angular/core';
import { Root } from '../app.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-young-red-dragon',
  templateUrl: './young-red-dragon.component.html',
  styleUrls: ['./young-red-dragon.component.css']
})
export class YoungRedDragonComponent implements OnInit {
  title = 'vesuvio esplodi';
  data! : Root;
  pic = String;
  loading!: boolean;
  o !: Observable<Root>;
  constructor(public http: HttpClient) {}
  ngOnInit(): void {
    console.log("here");
     this.loading = true;
     this.o = this.http.get<Root>('https://api.scryfall.com/cards/named?fuzzy=a-young-red-dragon-a-bathe-in-gold');
     this.o.subscribe(this.getData);
   }
     
   getData = (d : Root) =>
   {
     this.loading = (false);
     this.data = (d);
   }
}

