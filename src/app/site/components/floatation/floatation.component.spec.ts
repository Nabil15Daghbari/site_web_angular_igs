import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatationComponent } from './floatation.component';

describe('FloatationComponent', () => {
  let component: FloatationComponent;
  let fixture: ComponentFixture<FloatationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
