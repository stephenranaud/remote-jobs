import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationLocationComponent } from './navigation-location.component';

describe('NavigationLocationComponent', () => {
  let component: NavigationLocationComponent;
  let fixture: ComponentFixture<NavigationLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
