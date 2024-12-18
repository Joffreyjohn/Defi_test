import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsperancyComponent } from './esperancy.component';

describe('EsperancyComponent', () => {
  let component: EsperancyComponent;
  let fixture: ComponentFixture<EsperancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsperancyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsperancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
