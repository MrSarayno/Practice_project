import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAPI } from './delete-api';

describe('DeleteAPI', () => {
  let component: DeleteAPI;
  let fixture: ComponentFixture<DeleteAPI>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteAPI]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAPI);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
