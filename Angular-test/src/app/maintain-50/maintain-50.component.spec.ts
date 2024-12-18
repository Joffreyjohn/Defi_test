import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maintain50Component } from './maintain-50.component';

describe('Maintain50Component', () => {
  let component: Maintain50Component;
  let fixture: ComponentFixture<Maintain50Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Maintain50Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Maintain50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
