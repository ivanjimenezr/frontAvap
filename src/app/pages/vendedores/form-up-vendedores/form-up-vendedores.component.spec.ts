import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpVendedoresComponent } from './form-up-vendedores.component';

describe('FormUpVendedoresComponent', () => {
  let component: FormUpVendedoresComponent;
  let fixture: ComponentFixture<FormUpVendedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUpVendedoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormUpVendedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
