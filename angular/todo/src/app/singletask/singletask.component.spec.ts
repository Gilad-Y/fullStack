import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingletaskComponent } from './singletask.component';

describe('SingletaskComponent', () => {
  let component: SingletaskComponent;
  let fixture: ComponentFixture<SingletaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingletaskComponent]
    });
    fixture = TestBed.createComponent(SingletaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
