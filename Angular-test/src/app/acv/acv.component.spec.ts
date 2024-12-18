import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcvComponent } from './acv.component';

describe('AcvComponent', () => {
  let component: AcvComponent;
  let fixture: ComponentFixture<AcvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
