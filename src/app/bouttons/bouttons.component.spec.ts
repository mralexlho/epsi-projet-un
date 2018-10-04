import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BouttonsComponent } from './bouttons.component';

describe('BouttonsComponent', () => {
  let component: BouttonsComponent;
  let fixture: ComponentFixture<BouttonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BouttonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BouttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
