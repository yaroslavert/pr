import { Component, OnInit } from '@angular/core';
import { Furniture } from "app/furniture";
import { HttpService } from './../service/http.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public furnitures:Furniture[];
  public maxFurniture:Furniture;
  constructor(private httpService:HttpService,private router: Router) { 
    this.httpService.getFurnitures()
        .subscribe(
          (funitures:Furniture[])=>{
            this.furnitures=funitures;
            this.maxFurniture = this.furnitures[0];
            funitures.forEach(funiture=>{
                if(funiture.prise > this.maxFurniture.prise){
                  this.maxFurniture = funiture;
                }
            });
            // this.fur=this.furnitures[0];
            console.log(this.furnitures);
          },
          (err)=>console.log('err')
        )
  }

  ngOnInit() {
  }
  public gotoDetail(furniture:Furniture){
    this.router.navigate(['/dashboard',furniture.id]);
  }
}
