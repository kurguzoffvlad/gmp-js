import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmpJsComponent } from './gmp-js.component';

describe('GmpJsComponent', () => {
  let component: GmpJsComponent;
  let fixture: ComponentFixture<GmpJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmpJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmpJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
