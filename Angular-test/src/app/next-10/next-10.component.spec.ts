import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Next10Component } from './next-10.component';

describe('Next10Component', () => {
  let component: Next10Component;
  let fixture: ComponentFixture<Next10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Next10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Next10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
