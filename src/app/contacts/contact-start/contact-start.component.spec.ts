import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactStartComponent } from './contact-start.component';

describe('ContactStartComponent', () => {
  let component: ContactStartComponent;
  let fixture: ComponentFixture<ContactStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
