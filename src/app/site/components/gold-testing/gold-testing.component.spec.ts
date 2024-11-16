import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldTestingComponent } from './gold-testing.component';

describe('GoldTestingComponent', () => {
  let component: GoldTestingComponent;
  let fixture: ComponentFixture<GoldTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoldTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
