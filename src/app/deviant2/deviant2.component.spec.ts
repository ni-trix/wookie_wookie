import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Deviant2Component } from './deviant2.component';

describe('Deviant2Component', () => {
  let component: Deviant2Component;
  let fixture: ComponentFixture<Deviant2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Deviant2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Deviant2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
