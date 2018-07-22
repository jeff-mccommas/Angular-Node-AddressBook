import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr'
import { ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { AppComponent } from './app.component';
import{AppRoutingModule} from'./app-routing.module'
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header/header.component';
import { SharedComponent } from './shared/shared.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactStartComponent } from './contacts/contact-start/contact-start.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { FilterPipe } from './filter.pipe';
import { DropdownDirective } from './shared/dropdown.directive';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import {DataService} from "./shared/data.service";
import { MatToolbar, 
  MatToolbarModule, 
  MatCard, MatCardModule, 
  MatIcon, MatIconModule, MatListModule, 
  MatGridListModule,
  MatSidenavModule,
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent, 
  MatButtonModule,
  MatMenu,
  MatButton,
  MatMenuModule,
  MatFormFieldModule,
  MatOptionModule,
  MatInputModule,
  MatSelectModule,
  } from '@angular/material';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HeaderComponent,
    SharedComponent,
    ContactDetailComponent,
    ContactEditComponent,
    // ContactListComponent,
    // ContactStartComponent,
    FilterPipe,
    DropdownDirective,
    LoginComponent,
    LogoutComponent,
    RegisterComponent
  

  ],
  imports: [
  BrowserModule,
  RouterModule,
  AppRoutingModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatGridListModule,
  MatFormFieldModule,
  MatOptionModule,
  MatInputModule,
  MatSelectModule,
  RouterModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  HttpModule,
  ToastrModule.forRoot(),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
