import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
//import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // KEY = 'token';
  // value: any = token;

  loginUserData = {
                    'email': '',
                    'password': ''
                  }

  constructor(private _auth:AuthService,
              private _router:Router,
              //public local:LocalStorageService,
              //public session:SessionStorageService
              ) { }

  ngOnInit(): void {
  }
  
  loginUser() {
    // console.log(this.loginUserData)
    this._auth.loginUser(this.loginUserData).subscribe(
      res => {
              //this.local.set('token', res.token);
              console.log(res)
              localStorage.setItem('token', res.token)
              //localStorage.setItem('userId', res.token.payload.userId)
              
              // let user = res.json();
              // if(user) {
              // sessionStorage.setItem('currentUser', user)
              if(res.token) {
              this._router.navigate(['/home'])
              }
              
            },
      err => console.log(err)    
    );
  }
  // now, connection is complied. see on the browser

}

// import { Component, OnInit } from '@angular/core';
// import {Router} from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   username: string;
//   password: string;

//   constructor(private router: Router) { }
//   ngOnInit() {
//   }
  
//   login() : void {
//     if(this.username == 'exo' && this.password == 'exo'){
//      this.router.navigate(['/home']);
//     }else {
//       alert("Invalid credentials");
//     }
//   }
//   }
