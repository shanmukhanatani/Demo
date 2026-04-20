import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sai } from './sai';

describe('Sai', () => {
  let component: Sai;
  let fixture: ComponentFixture<Sai>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sai]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sai);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
