import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NabvarLjmComponent } from './nabvar-ljm.component';

describe('NabvarLjmComponent', () => {
  let component: NabvarLjmComponent;
  let fixture: ComponentFixture<NabvarLjmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NabvarLjmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NabvarLjmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
