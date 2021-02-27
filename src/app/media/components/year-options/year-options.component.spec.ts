import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearOptionsComponent } from './year-options.component';

describe('YearOptionsComponent', () => {
  let component: YearOptionsComponent;
  let fixture: ComponentFixture<YearOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
