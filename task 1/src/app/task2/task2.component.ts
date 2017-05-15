import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {

  private word:string = 'Універсальний';
  public letters:Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.create();
  }
  public create(){
    let str = '';
    this.letters = [];
    for(let i=0; i<this.word.length; i++){

        let leter = this.word[i].toLowerCase();

        if(str.indexOf(leter) === -1){
            this.letters[leter] = 1;
        }else{
            this.letters[leter] += 1;
        }

        str+=leter;
    }
  }

}
