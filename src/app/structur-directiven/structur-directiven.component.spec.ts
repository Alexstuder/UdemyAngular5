import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructurDirectivenComponent } from './structur-directiven.component';

describe('StructurDirectivenComponent', () => {
  let component: StructurDirectivenComponent;
  let fixture: ComponentFixture<StructurDirectivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructurDirectivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructurDirectivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
