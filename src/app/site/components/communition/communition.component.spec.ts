import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitionComponent } from './communition.component';

describe('CommunitionComponent', () => {
  let component: CommunitionComponent;
  let fixture: ComponentFixture<CommunitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
