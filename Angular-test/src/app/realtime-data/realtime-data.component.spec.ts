import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeDataComponent } from './realtime-data.component';

describe('RealtimeDataComponent', () => {
  let component: RealtimeDataComponent;
  let fixture: ComponentFixture<RealtimeDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealtimeDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealtimeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
