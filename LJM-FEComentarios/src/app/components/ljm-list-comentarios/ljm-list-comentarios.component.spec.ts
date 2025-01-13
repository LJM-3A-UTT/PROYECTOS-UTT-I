import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LjmListComentariosComponent } from './ljm-list-comentarios.component';

describe('LjmListComentariosComponent', () => {
  let component: LjmListComentariosComponent;
  let fixture: ComponentFixture<LjmListComentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LjmListComentariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LjmListComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
