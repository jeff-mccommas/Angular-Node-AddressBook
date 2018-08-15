import { Component, OnInit } from '@angular/core';
import { DataService } from "../shared/data.service";
export interface Section {
  name: string;
  updated: Date;
}
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {
  contacts = [];
  mynumber;
  constructor(private dataService: DataService) {
    var userObj = JSON.parse(localStorage.getItem('user'));
    if (userObj) {
      this.mynumber = userObj.phone;
    }
    this.dataService.getcontacts().subscribe(x => {
      this.contacts = x
    }, error => {
      console.log(error);
    });
  }
  updateMyPhone() {
    var userObj = JSON.parse(localStorage.getItem('user'));
    var reqObj = {
      phone: this.mynumber
    };
    if (this.mynumber) {
      this.dataService.updateUser(userObj._id, reqObj).subscribe(x => {
        userObj.phone = this.mynumber
        localStorage.setItem("user", JSON.stringify(userObj));
      }, error => {
        console.log(error);
      });
    }
  }
  ngOnInit() {
  }
}
