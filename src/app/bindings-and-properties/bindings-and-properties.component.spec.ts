import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BindingsAndPropertiesComponent} from './bindings-and-properties.component';

describe('BindingsAndPropertiesComponent', () => {
  let component: BindingsAndPropertiesComponent;
  let fixture: ComponentFixture<BindingsAndPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BindingsAndPropertiesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingsAndPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
