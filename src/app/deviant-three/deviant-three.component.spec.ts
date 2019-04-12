import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviantThreeComponent } from './deviant-three.component';

describe('DeviantThreeComponent', () => {
  let component: DeviantThreeComponent;
  let fixture: ComponentFixture<DeviantThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviantThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviantThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
