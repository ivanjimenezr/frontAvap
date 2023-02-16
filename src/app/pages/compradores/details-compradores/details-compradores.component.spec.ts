import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCompradoresComponent } from './details-compradores.component';

describe('DetailsCompradoresComponent', () => {
  let component: DetailsCompradoresComponent;
  let fixture: ComponentFixture<DetailsCompradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCompradoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsCompradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
