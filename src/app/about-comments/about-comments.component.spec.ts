import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPavelPanelComponent } from './about-pavel-panel.component';

describe('AboutPavelPanelComponent', () => {
  let component: AboutPavelPanelComponent;
  let fixture: ComponentFixture<AboutPavelPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPavelPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPavelPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
