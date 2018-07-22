import { Injectable } from '@angular/core';
import { Http, Headers, Response,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class DataService {

  result:any;
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({ headers: this.headers });
  //Todo: use loggedInUser to send all data instead of having two loggedIn and loggedInUser object
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}
  private loggedInUser = new BehaviorSubject<any>({}); // {1}
  constructor(private _http: Http) {
    this.loggedIn.next(!!localStorage.getItem('authToken'));
    this.loggedInUser.next(localStorage.getItem('username'));
  }
  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }
  get isLoggedInUser() {
    return this.loggedInUser.asObservable(); // {2}
  }
  getcontacts() {
    return this._http.get('http://localhost:3000/api/contacts').map(res => res.json());
  }
  getcontactInfo(id:any) {
    return this._http.get('http://localhost:3000/api/contacts/' + id).map(res => res.json());
  }
  addContact(id:any, contactData:any) {
    return this._http.post('http://localhost:3000/api/contacts/', contactData, this.options).map(res => res.json());
  }
  updateContactDetail(id:any, contactInfo:any) {
    return this._http.post('http://localhost:3000/api/contacts/' + id, contactInfo,this.options).map(res => res.json());
  }

  registerUser(user){
    return this._http.post('http://localhost:3000/api/users/register',user, this.options).map(res => res.json());
  }
  loginUser(user){
    return this._http.post('http://localhost:3000/api/users/login',user, this.options).map(res => {
      let body = res.json();
      if (body.token) {
        localStorage.setItem("authToken", body.token);
        localStorage.setItem("username", body.username);
        this.loggedIn.next(true);
        this.loggedInUser.next(body.username);
      }
      return body;
    });
  }
  logoutUser() {
    window.localStorage.removeItem("authToken");
    window.localStorage.removeItem("username");
    this.loggedIn.next(false);
  }
}
