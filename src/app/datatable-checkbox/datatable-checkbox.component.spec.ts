import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableCheckboxComponent } from './datatable-checkbox.component';

describe('DatatableCheckboxComponent', () => {
  let component: DatatableCheckboxComponent;
  let fixture: ComponentFixture<DatatableCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatableCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
