import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LsiDashboardComponent } from './lsi-dashboard.component';

describe('LsiDashboardComponent', () => {
  let component: LsiDashboardComponent;
  let fixture: ComponentFixture<LsiDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LsiDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LsiDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
