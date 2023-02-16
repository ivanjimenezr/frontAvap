import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewVendedoresComponent } from './form-new-vendedores.component';

describe('FormNewVendedoresComponent', () => {
  let component: FormNewVendedoresComponent;
  let fixture: ComponentFixture<FormNewVendedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNewVendedoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNewVendedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
