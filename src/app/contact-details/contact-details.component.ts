import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Contact, contactList } from '../contact-list/contact-data';
import { ContactService } from '../contact-list/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contactId: string;
  contactInfo: Contact;

  constructor(
    private reqThang: ActivatedRoute,
    public contactTruc: ContactService,
    private resThang: Router
  ) { }

  ngOnInit() {
    this.reqThang.paramMap
      .subscribe((myParams) => {
                  // { path: 'contact/:blahId', ... }
        this.contactId = myParams.get('blahId');
                         // req.params.blahId

        this.contactInfo = this.contactTruc.getContact(this.contactId);
      });
  }

  confirmDelete() {
    const { name } = this.contactInfo;
    // const name = this.contactInfo.name;

    const isOkay = confirm(`Are you sure you want to delete ${name}?`);

    if (isOkay) {
      this.contactTruc.deleteContact(this.contactId);
      this.resThang.navigateByUrl('/contacts');
    }             // res.redirect('/contacts')
  }

}
