import { TestBed } from '@angular/core/testing';

import { TasksDataService } from './tasks-data.service';

describe('TasksDataService', () => {
  let service: TasksDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
