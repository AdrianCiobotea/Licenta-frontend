import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupShoppingCartComponent } from './group-shopping-cart.component';

describe('GroupShoppingCartComponent', () => {
  let component: GroupShoppingCartComponent;
  let fixture: ComponentFixture<GroupShoppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupShoppingCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
