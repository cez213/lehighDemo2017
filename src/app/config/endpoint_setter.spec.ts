import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndpointSetterComponent } from './endpoint_setter';

describe('EndpointSetterComponent', () => {
  let component: EndpointSetterComponent;
  let fixture: ComponentFixture<EndpointSetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndpointSetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndpointSetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
