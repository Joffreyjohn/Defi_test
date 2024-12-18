import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BimDataComponent } from './bim-data.component';

describe('BimDataComponent', () => {
  let component: BimDataComponent;
  let fixture: ComponentFixture<BimDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BimDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BimDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
