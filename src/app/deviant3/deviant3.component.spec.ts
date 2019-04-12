import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Deviant3Component } from './deviant3.component';

describe('Deviant3Component', () => {
  let component: Deviant3Component;
  let fixture: ComponentFixture<Deviant3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Deviant3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Deviant3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
