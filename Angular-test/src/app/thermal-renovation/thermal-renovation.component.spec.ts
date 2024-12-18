import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermalRenovationComponent } from './thermal-renovation.component';

describe('ThermalRenovationComponent', () => {
  let component: ThermalRenovationComponent;
  let fixture: ComponentFixture<ThermalRenovationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThermalRenovationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThermalRenovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
