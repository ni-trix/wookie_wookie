import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Deviant1Component } from './deviant1.component';

describe('Deviant1Component', () => {
  let component: Deviant1Component;
  let fixture: ComponentFixture<Deviant1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Deviant1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Deviant1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
