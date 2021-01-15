import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicallyAddControlsComponent } from './dynamically-add-controls.component';

describe('DynamicallyAddControlsComponent', () => {
  let component: DynamicallyAddControlsComponent;
  let fixture: ComponentFixture<DynamicallyAddControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicallyAddControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicallyAddControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
