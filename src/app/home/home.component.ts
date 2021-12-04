import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  custom:any
  tipAmount:any
  total:any
  rounded1:any
  rounded2:any
  billInput: any = '';
  peopleNum: any = '';
  

  infoForm:FormGroup = new FormGroup({
    billInput:new FormControl(null,[Validators.max(5000), Validators.min(100), Validators.required]),
    peopleNum:new FormControl(null,[Validators.max(30), Validators.min(1), Validators.required])
  })

  // error:any = this.infoForm.get('peopleNum')?.errors

  constructor() { }

  ngOnInit(): void {
    
  }


  getRes(per:number, form:any):void {

    this.billInput = (<HTMLInputElement>document.getElementById("bill")).value;
    this.peopleNum = (<HTMLInputElement>document.getElementById("numOfPeople")).value;
    this.custom =  (<HTMLInputElement>document.getElementById("custom")).value;

     this.tipAmount = (this.billInput * per) / this.peopleNum ;  //(this.billInput * custom) / this.peopleNum
     this.total = (this.billInput * (per + 1)) / this.peopleNum ;

     this.rounded1 = Math.round( this.tipAmount * 100 ) / 100;
     this.rounded2 = Math.round( this.total * 100 ) / 100;

    console.log();

  }

  getreset() {

    this.rounded1 = '0.00';
    this.rounded2 = '0.00';

    (<HTMLInputElement>document.getElementById("bill")).value = '';
    (<HTMLInputElement>document.getElementById("numOfPeople")).value = '';
    (<HTMLInputElement>document.getElementById("custom")).value = '';

  }

}
