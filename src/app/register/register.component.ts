import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DataService} from "../shared/data.service";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup
  hotelId: any;
  errorMsg: string;
  successMsg: string;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(8)]),
      userName: new FormControl('', [Validators.required, Validators.minLength(8)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      passwordAgain: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }
  get name() {
    return this.registerForm.get('name');

  }

  get userName() {
    return this.registerForm.get('userName');

  }

  get password() {
    return this.registerForm.get('password');

  }

  get passwordAgain() {
    return this.registerForm.get('passwordAgain');

  }
  register = function () {
    let userRef = this
    var user = {
      username: userRef.userName.value,
      password: userRef.password.value,
      name: userRef.name.value
    };
    let body: string = JSON.stringify(user);
    if (!userRef.userName.value || !userRef.password.value) {
      this.toastr.error('Please add a username and a password.');

    } else {
      if (userRef.password.value !== userRef.passwordAgain.value) {
        this.toastr.error('Please make sure the passwords match.');
      } else {
        this.dataService.registerUser(body).subscribe(x => {
          this.toastr.success('Successful registration.');
          this.router.navigate(['/contacts']);
        });

      }
    }
  }
}
