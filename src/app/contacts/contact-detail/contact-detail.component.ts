import { Component, OnInit } from '@angular/core';
import {DataService} from "../../shared/data.service";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contactInfo;
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe(params => {
      this.dataService.getcontactInfo(params.id).subscribe(x => {
        this.contactInfo = x
      }, error => {
        console.log(error);
      });
    });
  }

  ngOnInit() {
  }
  deleteContact() {
    this.dataService.deletecontactInfo(this.contactInfo._id).subscribe(x => {
      this.router.navigate(['/contacts']);
    }, error => {
      console.log(error);
    });
  }

}
