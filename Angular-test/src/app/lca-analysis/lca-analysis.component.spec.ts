import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LCAAnalysisComponent } from './lca-analysis.component';

describe('LCAAnalysisComponent', () => {
  let component: LCAAnalysisComponent;
  let fixture: ComponentFixture<LCAAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LCAAnalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LCAAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
