import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutAPI } from './put-api';

describe('PutAPI', () => {
  let component: PutAPI;
  let fixture: ComponentFixture<PutAPI>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PutAPI]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutAPI);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
