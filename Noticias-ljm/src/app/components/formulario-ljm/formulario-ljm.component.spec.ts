import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioLjmComponent } from './formulario-ljm.component';

describe('FormularioLjmComponent', () => {
  let component: FormularioLjmComponent;
  let fixture: ComponentFixture<FormularioLjmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioLjmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioLjmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
