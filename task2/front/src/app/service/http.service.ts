import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { environment } from './../../environments/environment';

import { Furniture } from './../furniture';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class HttpService {

  constructor(private http:Http) { }
  getFurnitures(){
    let path = 'furniture';
    let url = `${environment.url}${path}`;

    return this.http.get(url).map((res:Response)=>res.json() as Furniture[]);
  }
  getFurniture(id:number){
    let path = `furniture/${id}`;
    let url = `${environment.url}${path}`;

    return this.http.get(url).map((res:Response)=>res.json() as Furniture);
  }
  getFilterFurniture(key:string,value:string){
    let path = `furnitureFilter`;
    let url = `${environment.url}${path}?key=${key}&value=${value}`;
    
    return this.http.get(url)
      .map((res:Response)=>res.json() as Furniture[]);
  }
  createFurniture(furniture:Furniture){
    let path = 'furniture';
    let url = `${environment.url}${path}`;

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

     return this.http.post(url, { ...furniture }, options);
  }
}
