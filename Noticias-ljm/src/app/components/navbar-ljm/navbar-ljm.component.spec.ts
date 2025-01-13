import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLjmComponent } from './navbar-ljm.component';

describe('NavbarLjmComponent', () => {
  let component: NavbarLjmComponent;
  let fixture: ComponentFixture<NavbarLjmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarLjmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarLjmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
