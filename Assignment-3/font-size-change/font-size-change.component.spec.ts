import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontSizeChangeComponent } from './font-size-change.component';

describe('FontSizeChangeComponent', () => {
  let component: FontSizeChangeComponent;
  let fixture: ComponentFixture<FontSizeChangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FontSizeChangeComponent]
    });
    fixture = TestBed.createComponent(FontSizeChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
