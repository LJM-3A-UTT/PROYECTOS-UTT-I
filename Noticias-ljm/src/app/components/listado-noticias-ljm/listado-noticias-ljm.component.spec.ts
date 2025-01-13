import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoNoticiasLjmComponent } from './listado-noticias-ljm.component';

describe('ListadoNoticiasLjmComponent', () => {
  let component: ListadoNoticiasLjmComponent;
  let fixture: ComponentFixture<ListadoNoticiasLjmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoNoticiasLjmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoNoticiasLjmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
