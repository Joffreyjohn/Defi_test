import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maintain10Component } from './maintain-10.component';

describe('Maintain10Component', () => {
  let component: Maintain10Component;
  let fixture: ComponentFixture<Maintain10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Maintain10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Maintain10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
