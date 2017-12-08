import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookingForJobCommentsPanelComponent } from './looking-for-job-comments-panel.component';

describe('LookingForJobCommentsPanelComponent', () => {
  let component: LookingForJobCommentsPanelComponent;
  let fixture: ComponentFixture<LookingForJobCommentsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookingForJobCommentsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookingForJobCommentsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
