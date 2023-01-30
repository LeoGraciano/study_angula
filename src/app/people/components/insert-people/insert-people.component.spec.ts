import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertPeopleComponent } from './insert-people.component';

describe('InsertPeopleComponent', () => {
  let component: InsertPeopleComponent;
  let fixture: ComponentFixture<InsertPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertPeopleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
