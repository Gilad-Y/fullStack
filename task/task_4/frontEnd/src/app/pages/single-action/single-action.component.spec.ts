import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleActionComponent } from './single-action.component';

describe('SingleActionComponent', () => {
  let component: SingleActionComponent;
  let fixture: ComponentFixture<SingleActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleActionComponent]
    });
    fixture = TestBed.createComponent(SingleActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
