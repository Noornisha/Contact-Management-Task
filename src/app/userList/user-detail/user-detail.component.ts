import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnChanges {
  @Input() EmailData;
  @Input() ContactData;
  emailArray: Array<any> = [];
  mobileArray: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let a = this.EmailData;
    let b = this.ContactData;
  }

  ngOnChanges() {
    this.email();
    this.mobile();
  }
  email(){
    let email = this.EmailData[0].email
    let emailArray = [];
    email.forEach(element => {
      let obj;
      obj = {};
      obj.email = element;
      emailArray.push(obj);
    });
    this.emailArray = []
    this.emailArray = emailArray;
  }
  mobile(){
    let mobile = this.EmailData[0].mobile
    let mobileArray = [];
    mobile.forEach(element => {
      let obj;
      obj = {};
      obj.mobile = element;
      mobileArray.push(obj);
    });
    this.mobileArray = []
    this.mobileArray = mobileArray;
  }
}
