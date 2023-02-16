import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewCompradoresComponent } from './form-new-compradores.component';

describe('FormNewCompradoresComponent', () => {
  let component: FormNewCompradoresComponent;
  let fixture: ComponentFixture<FormNewCompradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNewCompradoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNewCompradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
