
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MyContact } from '../models/contact';
import { UserServiceService } from '../shared/services/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  contacts: any = [];
  emailData: any = [];
  contactData: any = [];
  constructor(private UserService: UserServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getContact();
  }
  
  getContact() {
    this.UserService.getAllContacts().subscribe(data => {
      this.contacts = data;
    }, error => console.log("Error: " + error)
    )
  }
  
  ContactEmail(id:number) {
    this.UserService.getContactEmail(id).subscribe(data => {
      this.emailData = data;
      let a = this.emailData[0].email
      console.log(this.emailData)
    }, error => console.log("Error: " + error)
    )
  }
  viewDetail(id: number){
    this.ContactEmail(id);
    this.UserService.getContact(id).subscribe(data => {
    this.contactData = data;
    });
  }
}



