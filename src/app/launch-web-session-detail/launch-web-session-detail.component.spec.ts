import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchWebSessionDetailComponent } from './launch-web-session-detail.component';

describe('LaunchWebSessionDetailComponent', () => {
  let component: LaunchWebSessionDetailComponent;
  let fixture: ComponentFixture<LaunchWebSessionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchWebSessionDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchWebSessionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
