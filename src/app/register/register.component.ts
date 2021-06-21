import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData = {
                      'email': '',
                      'password': ''
                     }  // set to empty object. now we bind the user data to this propery 
  constructor(private _auth:AuthService,
             private _router:Router) { }

  ngOnInit(): void {
  }

  registerUser() {
    console.log(this.registerUserData)
    this._auth.registerUser(this.registerUserData).subscribe(  // subscribe to the Observable(responce) that we want to return from the back-end api (err, res) after the registration in the db is done.

      res => {console.log(res)
        this.registerUserData = res
        //sessionStorage.setItem('registeredUser', res.registeredUser)
        
        // let user = res.json();
        // if(user) {
        // sessionStorage.setItem('currentUser', user)
        if(this.registerUserData) {
        this._router.navigate(['/login'])
        }
      },
     err => console.log(err)        
      
      
    )
  }
  //now, the connection is done and we can see on the browser. there's an errors because our front-end run on port localhost:4200 and the back-end run on port:3000.To fix that, we must install cors (middle)


  }