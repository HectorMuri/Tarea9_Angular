import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarea9Component } from './tarea9.component';

describe('Tarea9Component', () => {
  let component: Tarea9Component;
  let fixture: ComponentFixture<Tarea9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tarea9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tarea9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
