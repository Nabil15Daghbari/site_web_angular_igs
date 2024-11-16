import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfnatComponent } from './enfnat.component';

describe('EnfnatComponent', () => {
  let component: EnfnatComponent;
  let fixture: ComponentFixture<EnfnatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnfnatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfnatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
