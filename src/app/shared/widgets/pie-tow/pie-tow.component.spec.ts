import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieTowComponent } from './pie-tow.component';

describe('PieTowComponent', () => {
  let component: PieTowComponent;
  let fixture: ComponentFixture<PieTowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieTowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieTowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
