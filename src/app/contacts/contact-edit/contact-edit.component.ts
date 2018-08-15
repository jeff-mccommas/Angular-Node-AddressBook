import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DataService} from "../../shared/data.service";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  contactInfo:any = {
    name: "",
    phone: [""],
    email:[""],
    address: "",
    socialProfile: "",
    birthday: "",
    photoUrl: ""
  };
  mode;
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      if (params.id) {
          //editMode
          this.mode = "edit";
          this.dataService.getcontactInfo(params.id).subscribe(x => {
            this.contactInfo = x
          }, error => {
            console.log(error);
          });
      } else {
        this.mode = "add";
      }
    });
   }

  ngOnInit() {
  }
  addEmail() {
    if (this.contactInfo.email.length < 3) {
        this.contactInfo.email.push("");
    }
  }
  addPhone() {
    if (this.contactInfo.phone.length < 3) { 
        this.contactInfo.phone.push("");
    }
  }
  indexTracker(index: number, value: any) {
    return index;
  }
  saveContact() {
    if (this.mode === "add") {
        this.dataService.addContact(this.contactInfo).subscribe(x => {
          this.router.navigate(['/contacts']);
        }, error => {
          console.log(error);
        });
    } else {
      this.dataService.updateContactDetail(this.contactInfo._id, this.contactInfo).subscribe(x => {
        this.router.navigate(['/contacts']);
      }, error => {
        console.log(error);
      });
    }
  }
}
