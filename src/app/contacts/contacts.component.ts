import { Component, OnInit } from '@angular/core';
import {DataService} from "../shared/data.service";
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
  constructor(private dataService: DataService) { 
    this.dataService.getcontacts().subscribe(x => {
      this.contacts = x
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
  }
}
