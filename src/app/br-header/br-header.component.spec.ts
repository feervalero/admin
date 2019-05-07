import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrHeaderComponent } from './br-header.component';

describe('BrHeaderComponent', () => {
  let component: BrHeaderComponent;
  let fixture: ComponentFixture<BrHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
