import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
 
// let httpOptions = {
//   headers: new HttpHeaders({'Content-Type': 'application/json', 
//                            'Access-Control-Allow-Origin': '*',
//                           'Access-Control-Allow-Methods': 'POST'} ),
//   //params: new HttpParams().set('program_id', this.program_id)
// };

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private _registerUrl = "http://localhost:3000/user/register";
private _loginUrl = "http://localhost:3000/user/login";
private _homeUrl = "http://localhost:3000/user/home"
  constructor(private http:HttpClient) { }

  registerUser(user):Observable<any> {                       // this AuthService makes http post request(http call) to the back-end api/register with the user details. Back-end api will register that user to the Mongodb, and it will return the user details as responce (Observable) (err, res). finaly, we must subscribe to that responce (Observable) obj with the subscribe() in register.somponent.ts
     return this.http.post<any>(this._registerUrl, user)          // return Observable obj of that http call to the api_reg endpoint, t.e. return the responce that back-end api sends to us (err, res) obj in a callback function after registration in the db.that responce is Observable. 
  }

  loginUser(user):Observable<any> {
    return this.http.post<any>(this._loginUrl, user)            //  type <any> - to return the Observable without any errors  
  }

  getUser() {
    //       // return localStorage.getItem('currentUser')
          return this.http.get<any>(this._homeUrl)               // return this observable object from the back end
   }

  loggedIn() {                                             // for the auth.guard - define LoggedIn() method to check if the token exist on the browser's localStorage or not
     return !!localStorage.getItem('token')        //  we don't want to return the token, but with !!(double negation) we want to return true if the token exists or false 
   }

  // loggedIn() {                                             // for the auth.guard - define LoggedIn() method to check if the token exist on the browser's localStorage or not
  //    return !!sessionStorage.getItem('currentUser')        //  we don't want to return the token, but with !!(double negation) we want to return true if the token exists or false 
  // }

   getToken() {
     return localStorage.getItem('token')
   }


}