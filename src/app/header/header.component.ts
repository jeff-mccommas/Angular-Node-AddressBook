import { Component, OnInit } from '@angular/core';
import {DataService} from "../shared/data.service";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userObj: any;  
  constructor(private dataService: DataService, private router: Router) {
      this.dataService.getLoggedInName.subscribe(name => {
          this.getUser();
      });
   }
  getUser() {
     var token = localStorage.getItem('authToken'); 
    this.dataService.authUser(token).subscribe(x => {
      localStorage.setItem("user", JSON.stringify(x.data));
      this.userObj = x.data;
      this.router.navigate(['/contacts']);
    }, error => {
      this.router.navigate(['/login']);
      this.userObj = null;
    });
  }
  ngOnInit() {
    this.getUser();
  }
  logout() {
      this.router.navigate(['/login']);
      localStorage.clear();
      this.userObj = null;
  }
}
