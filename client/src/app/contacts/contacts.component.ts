import { Component, OnInit } from '@angular/core';
import { ContactService } from "../contact.service";
import { Contact } from "../contact";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers:[ContactService]
})
export class ContactsComponent implements OnInit {
  contacts:Contact[];
  contact:Contact;
  first_name:String;
  last_name:String;
  phone:String;
  navStart: Observable<Object>;


  constructor(private contactService:ContactService) {  }
  addContact(){
    var contacts=this.contacts;
    const newContact={
      first_name:this.first_name,
      last_name:this.last_name,
      phone:this.phone
    }
    this.contactService.addContact(newContact)
    .subscribe();
    window.location.reload();
    
  }

  deleteContact(id:any){
    var contacts=this.contacts;
    
    this.contactService.deleteContact(id)
    .subscribe();
    for(var i=0;i<this.contacts.length;i++){
      if(contacts[i]._id==id){
        contacts.splice(i,1);
      }
    }
    
    }
  showContact(){
    this.contactService.getContacts().
    subscribe(contacts=>this.contacts=contacts); 
  }
  ngOnInit() {
    this.showContact();
  }

}
