import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActionComponent } from './add-action.component';

describe('AddActionComponent', () => {
  let component: AddActionComponent;
  let fixture: ComponentFixture<AddActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddActionComponent]
    });
    fixture = TestBed.createComponent(AddActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
