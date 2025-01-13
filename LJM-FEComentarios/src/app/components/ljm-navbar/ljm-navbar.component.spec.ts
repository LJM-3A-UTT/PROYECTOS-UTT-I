import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LjmNavbarComponent } from './ljm-navbar.component';

describe('LjmNavbarComponent', () => {
  let component: LjmNavbarComponent;
  let fixture: ComponentFixture<LjmNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LjmNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LjmNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
