import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationOptionsComponent } from './location-options.component';

describe('LocationOptionsComponent', () => {
  let component: LocationOptionsComponent;
  let fixture: ComponentFixture<LocationOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
