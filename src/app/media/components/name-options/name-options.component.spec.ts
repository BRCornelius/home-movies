import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameOptionsComponent } from './name-options.component';

describe('NameOptionsComponent', () => {
  let component: NameOptionsComponent;
  let fixture: ComponentFixture<NameOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
