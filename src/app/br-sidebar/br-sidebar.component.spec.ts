import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrSidebarComponent } from './br-sidebar.component';

describe('BrSidebarComponent', () => {
  let component: BrSidebarComponent;
  let fixture: ComponentFixture<BrSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
