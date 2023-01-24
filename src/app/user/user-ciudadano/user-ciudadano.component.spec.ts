import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCiudadanoComponent } from './user-ciudadano.component';

describe('UserCiudadanoComponent', () => {
  let component: UserCiudadanoComponent;
  let fixture: ComponentFixture<UserCiudadanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCiudadanoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCiudadanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
