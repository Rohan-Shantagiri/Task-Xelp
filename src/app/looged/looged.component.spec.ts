import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoogedComponent } from './looged.component';

describe('LoogedComponent', () => {
  let component: LoogedComponent;
  let fixture: ComponentFixture<LoogedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoogedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoogedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
