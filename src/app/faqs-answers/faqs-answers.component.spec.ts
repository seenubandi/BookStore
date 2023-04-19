import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsAnswersComponent } from './faqs-answers.component';

describe('FaqsAnswersComponent', () => {
  let component: FaqsAnswersComponent;
  let fixture: ComponentFixture<FaqsAnswersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqsAnswersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqsAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
