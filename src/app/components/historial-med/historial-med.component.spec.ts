import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialMedComponent } from './historial-med.component';

describe('HistorialMedComponent', () => {
  let component: HistorialMedComponent;
  let fixture: ComponentFixture<HistorialMedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialMedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
