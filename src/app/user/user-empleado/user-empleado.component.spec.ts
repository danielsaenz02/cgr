import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEmpleadoComponent } from './user-empleado.component';

describe('UserEmpleadoComponent', () => {
  let component: UserEmpleadoComponent;
  let fixture: ComponentFixture<UserEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEmpleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
