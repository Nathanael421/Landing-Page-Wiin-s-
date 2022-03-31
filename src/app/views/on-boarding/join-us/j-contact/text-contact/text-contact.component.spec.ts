import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextContactComponent } from './text-contact.component';

describe('TextContactComponent', () => {
  let component: TextContactComponent;
  let fixture: ComponentFixture<TextContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});