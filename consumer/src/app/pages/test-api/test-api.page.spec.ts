import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAPIPage } from './test-api.page';

describe('TestAPIPage', () => {
  let component: TestAPIPage;
  let fixture: ComponentFixture<TestAPIPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAPIPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAPIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
