import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpCompradoresComponent } from './form-up-compradores.component';

describe('FormUpCompradoresComponent', () => {
  let component: FormUpCompradoresComponent;
  let fixture: ComponentFixture<FormUpCompradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUpCompradoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormUpCompradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
