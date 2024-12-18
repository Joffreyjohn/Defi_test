import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Next50Component } from './next-50.component';

describe('Next50Component', () => {
  let component: Next50Component;
  let fixture: ComponentFixture<Next50Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Next50Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Next50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
