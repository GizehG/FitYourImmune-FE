import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiDietaComponent } from './mi-dieta.component';

describe('MiDietaComponent', () => {
  let component: MiDietaComponent;
  let fixture: ComponentFixture<MiDietaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiDietaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiDietaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
