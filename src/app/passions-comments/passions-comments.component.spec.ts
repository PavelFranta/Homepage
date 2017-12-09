import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassionsCommentsComponent } from './passions-comments.component';

describe('PassionsCommentsComponent', () => {
  let component: PassionsCommentsComponent;
  let fixture: ComponentFixture<PassionsCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassionsCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassionsCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
