import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateroomtypeComponent } from './createroomtype.component';

describe('CreateroomtypeComponent', () => {
  let component: CreateroomtypeComponent;
  let fixture: ComponentFixture<CreateroomtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateroomtypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateroomtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
