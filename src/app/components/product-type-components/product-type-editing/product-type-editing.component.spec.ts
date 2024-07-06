import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTypeEditingComponent } from './product-type-editing.component';

describe('ProductTypeEditingComponent', () => {
  let component: ProductTypeEditingComponent;
  let fixture: ComponentFixture<ProductTypeEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductTypeEditingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductTypeEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
