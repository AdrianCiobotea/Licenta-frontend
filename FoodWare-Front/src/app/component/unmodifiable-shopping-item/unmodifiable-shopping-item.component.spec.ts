import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnmodifiableShoppingItemComponent } from './unmodifiable-shopping-item.component';

describe('UnmodifiableShoppingItemComponent', () => {
  let component: UnmodifiableShoppingItemComponent;
  let fixture: ComponentFixture<UnmodifiableShoppingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnmodifiableShoppingItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnmodifiableShoppingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
