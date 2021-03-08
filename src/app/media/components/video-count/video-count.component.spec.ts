import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCountComponent } from './video-count.component';

describe('VideoCountComponent', () => {
  let component: VideoCountComponent;
  let fixture: ComponentFixture<VideoCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
