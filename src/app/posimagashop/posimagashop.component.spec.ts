import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosimagashopComponent } from './posimagashop.component';

describe('PosimagashopComponent', () => {
  let component: PosimagashopComponent;
  let fixture: ComponentFixture<PosimagashopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosimagashopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosimagashopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
