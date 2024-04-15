import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }
  getdetails(){
    return this._http.get("https://jsonplaceholder.typicode.com/albums");
  }
  getdetailsspecific(id:number){
    return this._http.get("https://jsonplaceholder.typicode.com/albums/id");
  }
  postdetails(userId:number,id:number,title:string)
  {
    return this._http.post("https://jsonplaceholder.typicode.com/albums",userId);
  }
}