import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RMDComponent } from './rmd.component';

describe('RMDComponent', () => {
  let component: RMDComponent;
  let fixture: ComponentFixture<RMDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RMDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RMDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
