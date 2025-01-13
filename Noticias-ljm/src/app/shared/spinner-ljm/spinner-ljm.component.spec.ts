import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerLjmComponent } from './spinner-ljm.component';

describe('SpinnerLjmComponent', () => {
  let component: SpinnerLjmComponent;
  let fixture: ComponentFixture<SpinnerLjmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerLjmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinnerLjmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
