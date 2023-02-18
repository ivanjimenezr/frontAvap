import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsociaInmuebleComponent } from './asocia-inmueble.component';

describe('AsociaInmuebleComponent', () => {
  let component: AsociaInmuebleComponent;
  let fixture: ComponentFixture<AsociaInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsociaInmuebleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsociaInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
