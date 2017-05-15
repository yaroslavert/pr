import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { HttpService } from './../service/http.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  data:FormGroup;
  
  constructor(private fb: FormBuilder,private httpService:HttpService) {
    this.data =  this.fb.group({
      numberHeadset: ['', Validators.required ],
      name: ['', Validators.required ],
      typeFurniture: ['', Validators.required ],
      countItems: ['', Validators.required ],
      prise: ['', Validators.required ],
      countStorage: ['', Validators.required ],
      dateBuy: ['', Validators.required ]
    }) 
   }
  public onSubmit(){
     this.httpService.createFurniture(this.data.value)
         .subscribe(
           ()=>alert('ok'),
           ()=>alert('err')
         )
  }
  ngOnInit() {
  }

}
