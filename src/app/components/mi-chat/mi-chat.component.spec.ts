import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiChatComponent } from './mi-chat.component';

describe('MiChatComponent', () => {
  let component: MiChatComponent;
  let fixture: ComponentFixture<MiChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
