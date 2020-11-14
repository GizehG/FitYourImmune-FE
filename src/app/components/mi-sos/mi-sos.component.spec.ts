import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiSOSComponent } from './mi-sos.component';

describe('MiSOSComponent', () => {
  let component: MiSOSComponent;
  let fixture: ComponentFixture<MiSOSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiSOSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiSOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
