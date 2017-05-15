import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Furniture } from "app/furniture";
import { Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
@Injectable()
export class SearchService {

  constructor(private httpService:HttpService) { }

  searchFurniture(key:string,value:string): Observable<Furniture[]>{
    
    return this.httpService.getFilterFurniture(key,value);

  }

}
