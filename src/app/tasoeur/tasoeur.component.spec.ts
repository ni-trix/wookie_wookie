import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasoeurComponent } from './tasoeur.component';

describe('TasoeurComponent', () => {
  let component: TasoeurComponent;
  let fixture: ComponentFixture<TasoeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasoeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasoeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
