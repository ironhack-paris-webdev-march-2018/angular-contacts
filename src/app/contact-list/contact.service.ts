import { Injectable } from '@angular/core';

import { Contact, contactList } from './contact-data';

@Injectable()
export class ContactService {

  // make a copy of "contactList" for our starting data
  contacts: Array<Contact> = [...contactList];

  constructor() { }

  getContact(id: string) {
    let contactInfo;

    this.contacts.forEach((oneContact) => {
      if (oneContact.id === id) {
        contactInfo = oneContact;
      }
    });

    return contactInfo;
  }
    // Pro way
    // return this.contacts.find(contact => contact.id === id);

  deleteContact(id: string) {
    let contactIndex;

    this.contacts.forEach((oneContact, index) => {
      if (oneContact.id === id) {
        contactIndex = index;
      }
    });

    this.contacts.splice(contactIndex, 1);
  }
    // Pro way
    // const contactIndex =
    //   this.contacts.findIndex(contact => contact.id === id);

    // this.contacts.splice(contactIndex, 1);
}
