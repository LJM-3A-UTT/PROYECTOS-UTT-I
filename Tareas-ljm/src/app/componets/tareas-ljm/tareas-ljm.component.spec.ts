import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasLjmComponent } from './tareas-ljm.component';

describe('TareasLjmComponent', () => {
  let component: TareasLjmComponent;
  let fixture: ComponentFixture<TareasLjmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasLjmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasLjmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
