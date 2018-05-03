import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Contact, contactList } from '../contact-list/contact-data';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contactId: string;
  contactInfo: Contact;

  constructor(private reqThang: ActivatedRoute) { }

  ngOnInit() {
    this.reqThang.paramMap
      .subscribe((myParams) => {
                  // { path: 'contact/:blahId', ... }
        this.contactId = myParams.get('blahId');
                         // req.params.blahId
        this.fetchContactInfo();
      });
  }

  fetchContactInfo() {
    contactList.forEach((oneContact) => {
      if (oneContact.id === this.contactId) {
        this.contactInfo = oneContact;
      }
    });
  }
    // Pro way
    // this.contactInfo =
    //   contactList.find(contact => contact.id === this.contactId);

}
