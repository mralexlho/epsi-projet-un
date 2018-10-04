import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailhomeComponent } from './detailhome.component';

describe('DetailhomeComponent', () => {
  let component: DetailhomeComponent;
  let fixture: ComponentFixture<DetailhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
