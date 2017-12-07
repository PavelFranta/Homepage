import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeCommentsComponent } from './knowledge-comments.component';

describe('KnowledgeCommentsComponent', () => {
  let component: KnowledgeCommentsComponent;
  let fixture: ComponentFixture<KnowledgeCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgeCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
