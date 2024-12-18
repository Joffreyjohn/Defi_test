import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdtComponent } from './idt.component';

describe('IdtComponent', () => {
  let component: IdtComponent;
  let fixture: ComponentFixture<IdtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
