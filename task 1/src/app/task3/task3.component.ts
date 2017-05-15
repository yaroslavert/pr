import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {

  private masiv:Array<any> = [];
  public newMasiv:Array<any> = [];
  public N = 20;
  public sum:number = 0;
  public count:number = 0;
  constructor(private taskService:TaskService) { }

  ngOnInit() {
    this.masiv = this.taskService.generateMasiv(this.N);
    
    for(let i=0; i<this.masiv.length; i++){
      if( (this.masiv[i] < 5) && (i % 4 === 0) ){
          this.newMasiv.push(this.masiv[i]);
          this.count++;
          this.sum+=Number(this.masiv[i]);
      }
    }

  }
}
