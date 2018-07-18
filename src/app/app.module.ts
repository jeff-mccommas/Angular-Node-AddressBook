import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HeaderComponent,
    SharedComponent,
    ContactDetailComponent,
    ContactEditComponent,
    ContactListComponent,
    ContactStartComponent,
    FilterPipe,
    DropdownDirective,
    LoginComponent,
    LogoutComponent

  ],
  imports: [
    BrowserModule,
    RouterModule,
  AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
