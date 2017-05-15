import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from "app/service/http.service";
import { Furniture } from "app/furniture";
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrls: ['./dashboard-detail.component.scss']
})
export class DashboardDetailComponent implements OnInit {

  public furniture:Furniture;

  constructor(private httpService:HttpService,private route: ActivatedRoute,private location:Location) { }

  ngOnInit() {
      this.route.params
        .subscribe(
          (params)=>{
            this.httpService.getFurniture(+params.id)
              .subscribe(
                (furniture:Furniture)=>{
                  this.furniture = furniture;
                  this.furniture.dateBuy = new Date(Date.parse(this.furniture.dateBuy));
                },
                (err)=>console.log('err 2 detal')
              )
          }
        )
  }
 goBack(){
    this.location.back();
 }
}
