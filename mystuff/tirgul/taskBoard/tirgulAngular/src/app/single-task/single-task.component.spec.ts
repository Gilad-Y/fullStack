import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTaskComponent } from './single-task.component';

describe('SingleTaskComponent', () => {
  let component: SingleTaskComponent;
  let fixture: ComponentFixture<SingleTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleTaskComponent]
    });
    fixture = TestBed.createComponent(SingleTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
