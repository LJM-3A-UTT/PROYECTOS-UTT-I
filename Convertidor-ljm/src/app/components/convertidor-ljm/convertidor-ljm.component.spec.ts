import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertidorLjmComponent } from './convertidor-ljm.component';

describe('ConvertidorLjmComponent', () => {
  let component: ConvertidorLjmComponent;
  let fixture: ComponentFixture<ConvertidorLjmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertidorLjmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertidorLjmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
