import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributDirektivenComponent } from './attribut-direktiven.component';

describe('AttributDirektivenComponent', () => {
  let component: AttributDirektivenComponent;
  let fixture: ComponentFixture<AttributDirektivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributDirektivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributDirektivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
