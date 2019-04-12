import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page3etDemiComponent } from './page3et-demi.component';

describe('Page3etDemiComponent', () => {
  let component: Page3etDemiComponent;
  let fixture: ComponentFixture<Page3etDemiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page3etDemiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page3etDemiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
