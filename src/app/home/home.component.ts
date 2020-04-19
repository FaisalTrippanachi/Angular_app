import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:any;
  mydata:any;
  constructor(
    private dataService:DataService
  ) { }

  ngOnInit() {
   // this.data=this.dataService.getData();
   // console.log(this.data);
   this.getRegisterData();
  }

  getRegisterData(){
    //console.log("heloooo");
    this.dataService.getData().subscribe(res=>{
      //console.log(res);
      this.mydata = res; 
      //console.log(this.mydata);
    });
  }

  DeleteData(id){
    var result = confirm("Are you sure you want to delete this item..?");
    if (result) {
       this.dataService.deleteData(id).subscribe(res=>{
       this.getRegisterData();
    });
  }
}


  
}
