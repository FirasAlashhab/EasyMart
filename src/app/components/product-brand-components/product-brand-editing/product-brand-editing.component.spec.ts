import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBrandEditingComponent } from './product-brand-editing.component';

describe('ProductBrandEditingComponent', () => {
  let component: ProductBrandEditingComponent;
  let fixture: ComponentFixture<ProductBrandEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductBrandEditingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductBrandEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
