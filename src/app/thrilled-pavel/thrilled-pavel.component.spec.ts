import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrilledPavelComponent } from './thrilled-pavel.component';

describe('ThrilledPavelComponent', () => {
  let component: ThrilledPavelComponent;
  let fixture: ComponentFixture<ThrilledPavelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThrilledPavelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThrilledPavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
