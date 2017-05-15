import { Component, OnInit } from '@angular/core';
import { Subject } from "rxjs/Subject";

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { Furniture } from "app/furniture";
import { Observable } from "rxjs/Observable";
import { SearchService } from "app/service/search.service";


@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.scss']
})
export class CalculateComponent implements OnInit {


  public furnitures:Furniture[];
  public searchTerms:Subject<string> = new Subject<string>();
  public Prise:number=0;
  public masiv:Array<any> = [1];
  private firstSearch:Boolean = false;

  search(term: string): void {
    this.searchTerms.next(term);
  }

  constructor(private searchService:SearchService) { }

  ngOnInit() {
     this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.searchService.searchFurniture('typeFurniture',term)
        // or the observable of empty heroes if no search term
        : Observable.of<Furniture[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(`Error in component ... ${error}`);
        return Observable.of<Furniture[]>([]);
      })
      .subscribe(
        (furnitures:Furniture[])=>{
          this.firstSearch = true; 
          this.furnitures = furnitures;
          this.Prise = 0;
          furnitures.forEach((furniture)=>{
             this.Prise += (+furniture.prise*+furniture.countStorage);
          });
          
        },
        (err)=>console.log(`err ${err}`)
      )
// this.furnitures
    // this.furnitures
    //     .subscribe(
    //       (furnitures:Furniture[])=>{
    //         this.Prise = 0;
    //         furnitures.forEach((furniture)=>{
    //             this.Prise += (+furniture.prise*+furniture.countStorage);
    //         });
    //       },
    //       (err)=>console.log('err 10')
    //     )
      
  }

}
