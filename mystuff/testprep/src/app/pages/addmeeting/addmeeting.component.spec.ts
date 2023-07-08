import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmeetingComponent } from './addmeeting.component';

describe('AddmeetingComponent', () => {
  let component: AddmeetingComponent;
  let fixture: ComponentFixture<AddmeetingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddmeetingComponent]
    });
    fixture = TestBed.createComponent(AddmeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
