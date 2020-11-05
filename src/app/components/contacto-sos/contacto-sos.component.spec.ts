import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoSOSComponent } from './contacto-sos.component';

describe('ContactoSOSComponent', () => {
  let component: ContactoSOSComponent;
  let fixture: ComponentFixture<ContactoSOSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactoSOSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoSOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
