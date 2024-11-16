import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HydrometComponent } from './hydromet.component';

describe('HydrometComponent', () => {
  let component: HydrometComponent;
  let fixture: ComponentFixture<HydrometComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HydrometComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HydrometComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
