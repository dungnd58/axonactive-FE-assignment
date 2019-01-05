import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSelectionBoxComponent } from './home-selection-box.component';

describe('HomeSelectionBoxComponent', () => {
  let component: HomeSelectionBoxComponent;
  let fixture: ComponentFixture<HomeSelectionBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSelectionBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSelectionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
