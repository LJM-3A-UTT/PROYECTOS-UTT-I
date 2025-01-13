import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LjmAgregarEditarComentarioComponent } from './ljm-agregar-editar-comentario.component';

describe('LjmAgregarEditarComentarioComponent', () => {
  let component: LjmAgregarEditarComentarioComponent;
  let fixture: ComponentFixture<LjmAgregarEditarComentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LjmAgregarEditarComentarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LjmAgregarEditarComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
