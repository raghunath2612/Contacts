import { Injectable } from '@angular/core';
//import {Http,Headers} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError,map, tap } from 'rxjs/operators';

import {Contact} from './contact';


// var headers=new HttpHeaders();
// headers.append('Content-type','application/json');


@Injectable()
export class ContactService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  
  constructor(
    private http: HttpClient
     ) { }
     


  getContacts():Observable<Contact[]>{
  return this.http.get<Contact[]>("http://localhost:3000/api/contacts")
  .pipe(tap());

  
  
  }
  
  //add contact
  addContact(newContact):Observable<Contact[]>{

    //return this.http.post("http:localhost:3000/api/contact",newContact,this.httpOptions).pipe(map(res=>res.json()));
    return this.http.post<Contact[]>("http://localhost:3000/api/contact",newContact,this.httpOptions).pipe(tap());

  }
  deleteContact(id):Observable<Contact[]>{
    return this.http.delete<Contact[]>("http://localhost:3000/api/contact/"+id)
    .pipe(tap());
    
  }
}
