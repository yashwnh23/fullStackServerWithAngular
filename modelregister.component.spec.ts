import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelregisterComponent } from './modelregister.component';

describe('ModelregisterComponent', () => {
  let component: ModelregisterComponent;
  let fixture: ComponentFixture<ModelregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
