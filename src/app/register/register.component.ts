import { Component, OnInit } from '@angular/core';
import { register } from './register.model';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  resr = new register();
  constructor(
    private dataService:DataService
  ) { }

  ngOnInit() {
  }

  InsertDatas(){
    //console.log(this.res);
    this.dataService.insertData(this.resr).subscribe();

    // alert("Registered Successfully..!");

    // this.resr.f_name="";
    // this.resr.l_name="";
    // this.resr.dob="";
    // this.resr.gender="";
    // this.resr.username="";
    // this.resr.password="";
  }

}
