import { Component } from '@angular/core';
import { Root } from '../app.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})
export class GenericComponent {
  title = 'vesuvio esplodi';
  data! : Root;
  pic = String;
  loading!: boolean;
  o !: Observable<Root>;
  ola: string | undefined;
  constructor(public http: HttpClient,private route: ActivatedRoute) {

      //Gestisce i cambi di route con l'observable paramMap
      this.route.paramMap.subscribe(this.getRouterParam);
    }
   
    //Ogni volta che viene invocata la route tracks/:id, l'observable paramMap richiama questo metodo
    getRouterParam = (params: ParamMap) =>
    {
      let uri_param = params.get('id'); //Ottengo l'id dalla ParamMap
      console.log (uri_param); //Stampo su console
      //this.service.getTrack()
      if (uri_param == 'black-dragon') this.ola = 'https://api.scryfall.com/cards/named?fuzzy=aust+com'  ;
      if (uri_param == 'white-monster') this.ola = 'https://api.scryfall.com/cards/named?fuzzy=white-shield-crusader';
      if (uri_param == 'young-red-dragon') this.ola = 'https://api.scryfall.com/cards/named?fuzzy=a-young-red-dragon-a-bathe-in-gold';
      if (uri_param == 'green-slime') this.ola = 'https://api.scryfall.com/cards/named?fuzzy=green-slime';
      if (uri_param == 'purple-crab') this.ola = 'https://api.scryfall.com/cards/named?fuzzy=purple-crab';


      
    }
  l(): void {
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