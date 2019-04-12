import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviantTwoComponent } from './deviant-two.component';

describe('DeviantTwoComponent', () => {
  let component: DeviantTwoComponent;
  let fixture: ComponentFixture<DeviantTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviantTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviantTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
