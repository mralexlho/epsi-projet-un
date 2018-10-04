import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnssembleComponent } from './enssemble.component';

describe('EnssembleComponent', () => {
  let component: EnssembleComponent;
  let fixture: ComponentFixture<EnssembleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnssembleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnssembleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
