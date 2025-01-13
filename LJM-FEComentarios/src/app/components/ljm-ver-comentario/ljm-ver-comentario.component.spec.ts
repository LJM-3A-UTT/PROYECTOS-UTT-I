import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LjmVerComentarioComponent } from './ljm-ver-comentario.component';

describe('LjmVerComentarioComponent', () => {
  let component: LjmVerComentarioComponent;
  let fixture: ComponentFixture<LjmVerComentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LjmVerComentarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LjmVerComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
