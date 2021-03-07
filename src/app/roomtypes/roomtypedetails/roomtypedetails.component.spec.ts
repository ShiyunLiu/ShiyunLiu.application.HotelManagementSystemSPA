import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomtypedetailsComponent } from './roomtypedetails.component';

describe('RoomtypedetailsComponent', () => {
  let component: RoomtypedetailsComponent;
  let fixture: ComponentFixture<RoomtypedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomtypedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomtypedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
