import { Address } from './../shared/Address.model';
import { Contact } from './contact.model';
import {Injectable, EventEmitter} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ContactService {
  contactSelected = new EventEmitter<Contact>();
  contactChanged = new Subject<Contact[]>();
     private contacts: Contact[] = [
      new Contact('Ahmed', '201090416555',
       'https://thumbs.dreamstime.com/z/contacte-nos-%C3%ADcone-no-fundo-branco-29710783.jpg', 'Ahmed@gmail.com', 'Zollk', 'Male',[
        new Address('alhay.st', 25),
      ]),
      new Contact('Ali', '2010516555',
       'https://thumbs.dreamstime.com/z/contacte-nos-%C3%ADcone-no-fundo-branco-29710783.jpg', 'ali@gmail.com', 'alinho', 'Male',
      [
        new Address('milano.st', 23),
        new Address('milano.st', 23)
      ])
    ];

  constructor() { }
  }
