import { Component, OnInit, Input } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { ContactModel } from '../../models/contact-model';
import { AuthService } from '../../auth.service';
import { ContactsService } from '../../contacts.service';
import { HttpErrorResponse } from '@angular/common/http';
//import { GUID } from '../../models/Guid';
//import * as jwt_decode from 'jwt-decode';


//import {User} from './home/form-table/user.model';
export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
}
@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.css']
})
export class FormTableComponent implements OnInit {

 //form:FormGroup;
 @Input() row: User;

 currentUser = {
  email: '',
  password: '', 
  _id: ''
} 
contactList: ContactModel[] = [];
  contactForm: FormGroup;
  contact: ContactModel;

 columnsToDisplay: string[] = ["firstName", "lastName", "email", "phone"];
//  public USER_DATA: User[] = [
//    { firstName: "Aco", lastName: "Acovski", email: "test@test1.com", phone: 968726385 },
//    { firstName: "Dule", lastName: "Dulevski", email: "test@test2.com", phone: 7868726385 },
//    { firstName: "Eli", lastName: "Elevska", email: "test@test3.com", phone: 2368726385 }
//  ]
 public newUser = { firstName: "", lastName: "", email: "", phone: 0};
 public myDataArray: any;

 constructor(private http:HttpClient,
             private _router:Router,
             private _auth:AuthService,
             private _contacts: ContactsService) {
   
 }

 ngOnInit() {
   this.getUser();
   this.contactForm = new FormGroup({        // because the is of type FormGroup, we create a new form with FormGrop constructor. inside we specify the js object with controls(key:value pairs)

    'firstName': new FormControl(null, Validators.required), //null or ''(empty string)         // the FormControl() can contain 3 arguments. 1st is the value od the control(input), 2nd is the potencional single Validator, 3rd is the Async Validators potencional
    'lastName': new FormControl(null, Validators.required),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'phone': new FormControl(null, Validators.required) // def a default gender to be male.

    //'hobbies': new FormArray([])         // we can add some controls in this FormArray, but now we leave empty
  });
 }

 addUser() {
  console.log(this.contactForm);
    if (this.contactForm.valid) {

      //console.log(this.contactForm.value)
      //console.log(this.contactForm)
      let contact = new ContactModel();
      contact.firstName = this.contactForm.get('firstName').value;
      contact.lastName = this.contactForm.get('lastName').value;
      contact.email = this.contactForm.get('email').value;
      contact.phone = this.contactForm.get('phone').value;
      //contact.userId = localStorage.getItem('userId');
      contact.userId = this.currentUser._id; // GUID.newGuid().toString();

      this._contacts.saveFormContact(contact).subscribe(result => {
        console.log(result);
        this.contact = result;  // store result:contact model into this.contact property (or varable, which we declare najgore)

         //getContacts .. refresh data on save of new contact
      
      }, error => {
        console.log("onSubmit()", error);
      });

    }
  this.getContacts();

  //  const newUsersArray = this.USER_DATA;
  //  newUsersArray.push(this.newUser);
  //  this.myDataArray = [...newUsersArray];
  // this.newUser = { firstName: "", lastName: "", email: "", phone: 0}
  //  console.warn(this.myDataArray);
 }

  public getRecord(row: ContactModel) {
    console.log(row);
    //var json = JSON.stringify(row);
    //this.http.get('http://localhost:4200/user-details/'+'?row='+encodeURIComponent(json))

//localStorage.setItem('row', row)
    this._router.navigate(['/user-details'], {queryParams:{firstName: row.firstName, lastName:row.lastName,email:row.email,phone:row.phone}})
//document.write(row)
  }

  getUser() {
    this._auth.getUser().subscribe(
      res => {
        console.log("currentUser", res);
        
        this.currentUser = res; 
        if(this.currentUser) {
          this.getContacts();
        }
        //this._router.navigate(['/table'])
        
        //  if(this.currentUser) {
        //    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        //    console.log(this.dataSource);
        //  }
        //this.table.renderRows();
        
      },     // if we retrieve res(in res obj is the returned user) from the Observable , then assign it to the this.currentUser obj 
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this._router.navigate(['/login'])
          }

        }
      }

    )
  }

  getContacts() {
    this._contacts.getContacts(this.currentUser._id).subscribe(result => {
      console.log(result);
      this.contactList = result;
      console.log(this.contactList);

      this.myDataArray = new MatTableDataSource<ContactModel>([...this.contactList]);
      
    },
      error => {
        console.log(error);
      });
    }
}