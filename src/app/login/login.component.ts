import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form={
    username:null,
    password:null
  };
  result:any;
  message:any;


  constructor(
    private dataService:DataService
  ) { }

  ngOnInit() {
  }

  login(){
   this.dataService.loginData(this.form).subscribe(res=>{
    this.result = res; 
    //console.log(this.result);
    if(this.result=="Incorrect Username"){
      this.message="Incorrect Username";
    }
    else if(this.result=="Incorrect Password"){
      this.message="Incorrect Password";
    }
    else{
      location.href = '/';
    }
  });

  }
}