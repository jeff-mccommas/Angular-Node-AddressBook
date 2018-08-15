import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr'
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { AppComponent } from './app.component';
import{AppRoutingModule} from'./app-routing.module'
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header/header.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { FilterPipe } from './filter.pipe';
import { LoginComponent } from './login/login.component';
import {DataService} from "./shared/data.service";
import { MatToolbar, 
  MatToolbarModule, 
  MatCard, MatCardModule, 
  MatIcon, MatIconModule, MatListModule, 
  MatGridListModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatNativeDateModule,
  MatSidenav,
  MatSidenavContainer,
  MatDatepickerModule,
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
    ContactDetailComponent,
    ContactEditComponent,
    FilterPipe,
    LoginComponent,
    RegisterComponent
  

  ],
  imports: [
  BrowserModule,
  FormsModule,
  RouterModule,
  AppRoutingModule,
  MatToolbarModule,
  MatNativeDateModule,
  MatButtonModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatDatepickerModule,
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
