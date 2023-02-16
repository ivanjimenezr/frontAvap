import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsVendedoresComponent } from './details-vendedores.component';

describe('DetailsVendedoresComponent', () => {
  let component: DetailsVendedoresComponent;
  let fixture: ComponentFixture<DetailsVendedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsVendedoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsVendedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
