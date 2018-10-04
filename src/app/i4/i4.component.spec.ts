import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { I4Component } from './i4.component';

describe('I4Component', () => {
  let component: I4Component;
  let fixture: ComponentFixture<I4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
