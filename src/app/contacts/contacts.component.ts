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
  folders: Section[] = [
    {
      name: 'Jeffrey Mccommas',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Shashwat Tripathi',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Iron Man',
      updated: new Date('1/28/16'),
    },
    {
      name: 'Shashwat Tripathi',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Iron Man',
      updated: new Date('1/28/16'),
    },
    {
      name: 'Shashwat Tripathi',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Iron Man',
      updated: new Date('1/28/16'),
    },
    {
      name: 'Shashwat Tripathi',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Iron Man',
      updated: new Date('1/28/16'),
    },
    {
      name: 'Shashwat Tripathi',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Iron Man',
      updated: new Date('1/28/16'),
    }
  ];
}
