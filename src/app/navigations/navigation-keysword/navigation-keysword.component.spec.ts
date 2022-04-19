import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationKeyswordComponent } from './navigation-keysword.component';

describe('NavigationKeyswordComponent', () => {
  let component: NavigationKeyswordComponent;
  let fixture: ComponentFixture<NavigationKeyswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationKeyswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationKeyswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
