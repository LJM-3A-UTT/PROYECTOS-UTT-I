import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApuestaLjmComponent } from './apuesta-ljm.component';

describe('ApuestaLjmComponent', () => {
  let component: ApuestaLjmComponent;
  let fixture: ComponentFixture<ApuestaLjmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApuestaLjmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApuestaLjmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
