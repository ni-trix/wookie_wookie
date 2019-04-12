import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviantOneComponent } from './deviant-one.component';

describe('DeviantOneComponent', () => {
  let component: DeviantOneComponent;
  let fixture: ComponentFixture<DeviantOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviantOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviantOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
