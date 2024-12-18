import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Models3DComponent } from './models-3-d.component';

describe('Models3DComponent', () => {
  let component: Models3DComponent;
  let fixture: ComponentFixture<Models3DComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Models3DComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Models3DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
