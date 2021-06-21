import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }   

  intercept(req, next) {  
    
    let authService = this.injector.get(AuthService)        // req-contain the token, and next is for execution
    let token = authService.getToken()
    let httpHeaders = {};
if (token) {
 httpHeaders = {
  Authorization: `Bearer ${token}`   // key is Authorization, and the Value is 'bearer ${AuthService.getToken()} instead the value of the token with json value format xx.yy.zz

}
 }
  
    let tokenizedReq = req.clone({     // clone the requested token
      setHeaders: httpHeaders
    }) 
    return next.handle(tokenizedReq)      // execute and handle the tokenizedreq and return that 

    // this is for test if the interceprot work
  
  
  }

}