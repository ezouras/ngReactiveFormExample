import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledReactiveFormComponent } from './styled-reactive-form.component';

describe('StyledReactiveFormComponent', () => {
  let component: StyledReactiveFormComponent;
  let fixture: ComponentFixture<StyledReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyledReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyledReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
