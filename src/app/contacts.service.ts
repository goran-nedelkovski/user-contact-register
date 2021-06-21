import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

import { ContactModel } from '../app/models/contact-model';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { HomeComponent } from './home/home.component';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  // contactForm:FormGroup;
  private _loadContacts = "http://localhost:3000/contacts/loadcontacts";
  private _saveFormContact = "http://localhost:3000/contacts/savecontact";

  constructor(private http: HttpClient) { }


  getContacts(userId: string):Observable<ContactModel[]> {
          return this.http.get<ContactModel[]>(this._loadContacts + "?userId=" + userId);
          //so <Array<ContactModel>> ke ja zeme celata niza-array od site objecti koi se od tip ContactModel
        
        }

  saveFormContact(contact: ContactModel): Observable<ContactModel> {
    return this.http.post<ContactModel>(this._saveFormContact, contact);
  }


}