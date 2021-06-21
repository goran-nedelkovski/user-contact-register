import { Component, OnInit, Input  } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {ActivatedRoute} from '@angular/router';
//import {FormTableComponent} from './home/form-table/form-table.component';
//import { User } from '../home/form-table/user.model';
export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
}
// @Injectable({
//   providedIn: 'root'
// })
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  obj: any = {}
  // private _jsonURL = './users.json';

  //@Input() row: User;
  constructor(private http: HttpClient,
    private route:ActivatedRoute) { 
    //  var object:User;
    //  this.getJSON().subscribe(data => object = data, error => console.log(error))
  }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    this.route.queryParams.subscribe(
      data => this.obj = data,
      error => console.log(error)
    );
  }

  // getUserDetails() {
  //   localStorage.getItem(row)
  // }

  // public getJSON():Observable<any> {
  //   return this.http.get(this._jsonURL)
  //   // .map((response:any) => response.json())
  //   // .catchError((error:any) => console.log(error))
    
  // }

}
