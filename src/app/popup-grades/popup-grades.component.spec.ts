import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupGradesComponent } from './popup-grades.component';

describe('PopupGradesComponent', () => {
  let component: PopupGradesComponent;
  let fixture: ComponentFixture<PopupGradesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupGradesComponent]
    });
    fixture = TestBed.createComponent(PopupGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
