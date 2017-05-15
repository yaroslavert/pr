import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
  public masiv:Array<any> = [];
  public masivMinRow:Array<any> = [];
  public N:number = 5;
  public M:number = 4;
  public IndexMaxInMinRow:string = '';

  constructor(private taskService:TaskService) { }

  ngOnInit() {
    this.create();
  }
  
  public create(){
    this.masivMinRow = [];

    this.masiv = this.taskService.generateMasiv({N:this.N,M:this.M});

    let min = 0;
    let dj  = 0;
    for(let i=0; i<this.N; i++){
       min = this.masiv[i][0];
       for(let j=0; j<this.M; j++){
          if(this.masiv[i][j]<min){
             min = this.masiv[i][j];
             dj = j;
          }
       }
       this.masivMinRow.push({
          value: min,
          index:{
            i:i,
            j:dj
          }
       });
       
    }
  }
  public getMaxMasiv(mas:Array<any>){
    let newMasiv:Array<any> = [];

    for(let i=0; i<this.masivMinRow.length; i++){
        newMasiv.push(this.masivMinRow[i].value);
    }

    let max = this.taskService.getMaxMasiv(newMasiv);
    let indexMax = newMasiv.indexOf(max);

    let _indexMas =  this.masivMinRow[indexMax].index;

    this.IndexMaxInMinRow = `i=${_indexMas.i} || j=${_indexMas.j}`; 

    return max;
  }
}
