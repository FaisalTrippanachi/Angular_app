import { Injectable } from '@angular/core';

//updates
import {HttpClient} from '@angular/common/http';
//#updates

@Injectable({
  providedIn: 'root'
})
export class DataService {
data:any;
  constructor(
    private httpClient:HttpClient
  ) {}

  getData(){
    return this.httpClient.get('https://laravelapi-tets.herokuapp.com/api/userdetails');
  }

  insertData(data){
    //console.log(data);
    return this.httpClient.post('https://laravelapi-tets.herokuapp.com/api/adddetails',data);
  }

  deleteData(id){
   return this.httpClient.delete('https://laravelapi-tets.herokuapp.com/api/deletedetails/'+id);
  }

  getOneData(id){
    return this.httpClient.get('https://laravelapi-tets.herokuapp.com/api/userdetails/'+id);
  }

  updateData(id,data){
    return this.httpClient.patch('https://laravelapi-tets.herokuapp.com/api/editdetails/'+id,data);
  }
  loginData(datas){
    //console.log(datas);
    return this.httpClient.post('https://laravelapi-tets.herokuapp.com/api/login',datas);
  }
}
