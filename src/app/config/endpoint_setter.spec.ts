import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlSetterComponent } from './url_setter';

describe('UrlSetterComponent', () => {
  let component: UrlSetterComponent;
  let fixture: ComponentFixture<UrlSetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlSetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlSetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
