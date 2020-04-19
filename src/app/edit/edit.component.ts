import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from '../services/data.service';
import { register } from '../register/register.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:any;
  mydata:any;
  resr = new register();
  constructor(
    private rout:ActivatedRoute,
    private dataService:DataService

  ) { }

  ngOnInit() {
    this.id=(this.rout.snapshot.params.id);
    this.getData();
  }
  getData(){
    this.dataService.getOneData(this.id).subscribe(res=>{
     // console.log(res);
     this.mydata = res; 
     this.resr=this.mydata;
    })
  }

  UpdateData(){
    this.dataService.updateData(this.id,this.resr).subscribe();
    alert("Updated Successfully..!");
    window.location.href = '/';
  }
}
