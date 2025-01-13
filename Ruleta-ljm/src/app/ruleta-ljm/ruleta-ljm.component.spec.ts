import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuletaLjmComponent } from './ruleta-ljm.component';

describe('RuletaLjmComponent', () => {
  let component: RuletaLjmComponent;
  let fixture: ComponentFixture<RuletaLjmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuletaLjmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuletaLjmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
