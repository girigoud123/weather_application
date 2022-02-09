import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingScreenComponentComponent } from './landing-screen-component.component';

describe('LandingScreenComponentComponent', () => {
  let component: LandingScreenComponentComponent;
  let fixture: ComponentFixture<LandingScreenComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingScreenComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingScreenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
